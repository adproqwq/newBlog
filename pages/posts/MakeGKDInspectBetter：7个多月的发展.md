---
title: MakeGKDInspectBetter：7个多月的发展
tags: [GKD, GKD 网页审查工具]
date: 2024-10-18 21:44:12
---

# 0. 写在前面

MakeGKDInspectBetter，或者说更熟悉的：GKD网页审查工具增强脚本，

是一个提高GKD网页审查工具使用体验的用户脚本。

它可以被绝大多数的用户脚本加载器加载，包括但不限于：`TemperMonkey`、`ScriptCat`。

其最初版本诞生于2024年3月3日，彼时它的名字仍然叫做：GKD网页审查工具**复制**增强。

这篇博文，主要总结下该脚本的发展历程，以及部分代码的讲解。

该脚本的发展历程，我觉得可以分为三个阶段：`按钮监听阶段`、`复制监听阶段`以及`大杂烩阶段`。

# 1. 发展历程

## 1.1 按钮监听阶段

得益于`Greasyfork`的更新记录，我们得已看到最初版的脚本是怎么样的：

![初版代码](https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/MakeGKDInspectBetter-1.png)

可以看到，初代脚本通过`MutationObserver`去检测复制按钮是否出现并监听其点击事件去显示菜单，

功能也只有修改规则名称和描述。

那么为什么需要去检测按钮是否出现呢？

是因为GKD网页审查工具使用`Vue`去编写，DOM元素并不是进入网页就加载的。

在3月3日和3月4日进行了多次的迭代，使用`layui`美化了界面，

同时对监听按钮事件的方法进行了一次迭代：

![1.0.0](https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/MakeGKDInspectBetter-2.png)

可以看到，在1.0.0版本使用了`document.onreadystatechange`。

在这个版本中，给每个复制按钮附加了点击事件，去弹出菜单。

后续的这方面的修改基本都是这两种方法的混合使用，和缝缝补补，在此不作赘述。

## 1.2 复制监听阶段

该阶段开始于4月24日更新的1.5.0版本：

![1.5.0](https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/MakeGKDInspectBetter-3.png)

可以看到，这时候已经使用了覆写函数的方式去实现复制的监听。

通过查看GKD网页审查工具的源代码可知，复制使用的是`navigator.clipboard.writeText`函数，

所以我们通过覆写该函数就可以实现复制的监听，从而摆脱低效的DOM节点监听。

事实上，直到如今依然使用的是复制监听的方法。

只不过，从8月2日提交的1.6.4版本，将原来的覆写函数方式，修改为了更优雅的写法：`Proxy`与`Reflect`的配合写法：

![1.6.4](https://cdn.jsdelivr.net/gh/adproqwq/picx-images-hosting@master/MakeGKDInspectBetter-4.png)

使用`Proxy`代理`navigator.clipboard.writeText`函数，

使用`Reflect`在`Proxy`内调用`navigator.clipboard.writeText`函数。

之后不久，使用由GKD开发者`@lisonge`的一个`Vite`插件，使用Vue去重构了整个插件，将所有代码开源至`Github`，使用`mdui`重写UI界面。

## 1.3 大杂烩阶段

从理论来讲，这一阶段其实属于复制监听阶段，但我还是将其独立出来，作为一个新的阶段。

该阶段开始于8月29日。

当时，除了这个脚本之外，我还另外维护了两个脚本：`GKD网页审查工具规则快捷搜索`和`GKD网页审查工具自动showSize`。

在8月29日，将`GKD网页审查工具规则快捷搜索`脚本整合进了`GKD网页审查工具复制增强`脚本中，

也是从这时起，这个脚本改名成了：`GKD网页审查工具增强`。

正是这一次的整合，才被我称为大杂烩，也是我将其独立作为一个阶段的原因：将其他的增强性脚本统一进了一个脚本中。

这是一个全新的阶段，这个阶段的版本迭代中，不断开拓出了新的增强方式，这将在下节的代码讲解中一并提到。

# 2. 代码讲解

## 2.1 activityIds规则复制优化

为什么要讲这个？

因为这是脚本第一次涉及`indexedDB`内的数据。

这是其具体的实现代码：

```typescript
export const simplyActivityIds = async (snapshotId: string): Promise<string | false> => {
  const snapshotInfo = await snapshotStorage.getItem<Snapshot>(snapshotId);

  if(snapshotInfo?.activityId){
    if(snapshotInfo?.activityId.startsWith(snapshotInfo.appId)){
      const simplyActivityIds = snapshotInfo.activityId.replace(snapshotInfo.appId, '');

      return simplyActivityIds;
    }
    else return false;
  }
  else return false;
};
```

可以看到这一句：

```typescript
const snapshotInfo = await snapshotStorage.getItem<Snapshot>(snapshotId);
```

这是在读取网页审查工具存储的快照信息。

整段代码主要的作用就是：判断activityId的开头是否与appId相同，若相同，则返回去除相同部分的activityId；若不相同，则返回完整的activityId。

由此开始，基于修改`indexedDB`数据的`节点隐私打码`功能上线了。

## 2.2 节点隐私打码

这段代码比较复杂，所以仅节选部分作为展示、讲解。

这是其核心实现代码：

```typescript
interface EditNodeOption {
  target: AttrList;
  value: PrimitiveType;
};

export const editNode = async (snapshotId: string, nodeId: number, options: EditNodeOption[]): Promise<boolean> => {
  try{
    const snapshotInfo = await snapshotStorage.getItem<Snapshot>(snapshotId);

    const nodes = snapshotInfo!.nodes;
    const nodeAttr = nodes[nodeId].attr;

    options.forEach((option) => (nodeAttr[option.target] as PrimitiveType) = option.value);

    nodes[nodeId].attr = nodeAttr;
    snapshotInfo!.nodes = nodes;

    await snapshotStorage.setItem(snapshotId, snapshotInfo);

    return true;
  } catch{
    return false;
  }
};
```

通过给`editNode`函数传入要修改的节点id和要修改的节点信息，用传入的信息覆盖原本的节点信息，达到给节点打码的效果。

```typescript
interface EditNodeOption {
  target: AttrList;
  value: PrimitiveType;
};
```

此处的`target`为修改的属性，如：`text`、`desc`等；
`value`则是属性的内容，需要符合`target`接受的类型。

# 3. 写在最后

这篇文章仅作总结使用，代码的说明后续会挑选一些功能的代码继续更新。

如果有人对代码有更好的优化建议，也欢迎到Github仓库发起PR。

如果有人因此脚本有所启发，开发出更好用的脚本，那就再好不过了。