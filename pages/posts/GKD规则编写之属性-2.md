---
title: GKD规则编写之属性-2
tags: [GKD, 教程]
date: 2024-01-06 13:00:23
categories: [教程,GKD]
---

# 0. 前言

本篇主要讲述在GKD规则编写中不必需，但常用的`属性`。

如果没有看过上一篇的同学，请看完上一篇哦！

# 1. 正文

## 1.1 snapshotUrls

`snapshotUrls`属性通常位于`rules`属性内，与`matches`属性同级。

`snapshotUrls`属性后接字符串，字符串的内容是快照的导入链接。

那么，什么是快照？又有什么作用？

### 1.1.1 快照

以下对于`快照`的介绍来自@[Snoopy1866（锟斤拷）](https://github.com/Snoopy1866)

> GKD 使用无障碍权限获取到某个广告弹窗的界面元素信息，并可以通过快照将界面元素信息永久保存，便于规则的书写和维护。
>
>PS：快照不同于截图。截图仅包含界面的图像信息，而快照不仅包含界面的图像信息，还包含界面的元素信息，例如控件的名称和属性，以及控件与控件之间的位置关系信息。

### 1.1.2 格式

`snapshotUrls`属性的格式为：

```json
snapshotUrls: '快照链接'
```

`snapshotUrls`属性的值也可以是数组，格式如下：

```json
snapshotUrls: [
    '快照链接1',
    '快照链接2',
    '...',
]
```



**请注意：快照链接必须以`https://i.gkd.li/i/`开头，关于如何获取该链接，可以前往@Snoopy1866编写的[教程处](https://github.com/Snoopy1866/blogs/blob/main/software/gkd/gkd-rule-tutorial/gkd-rule-tutorial.md)查看**

`snapshotUrls`属性所处的位置：

```json
{
    groups: [
        rules: [
        	snapshotUrls: '快照链接',
    	],
    ]
}
```

### 1.1.3 特殊情况

特别地，如果`rules`属性被简写为`rules: 规则`时，`snapshotUrls`的位置应在：

```json
{
    groups: [
        rules: '规则',
        snapshotUrls: '快照链接',
    ]
}
```

## 1.2 fastQuery

`fastQuery`属性需要搭配`网页审查工具`使用。

关于`网页审查工具`，可以前往@Snoopy1866编写的[教程](https://github.com/Snoopy1866/blogs/blob/main/software/gkd/gkd-rule-tutorial/gkd-rule-tutorial.md)处查看。

### 1.2.1 格式

`fastQuery`属性的接受的值的类型为：`boolean`类型，

即：`true`或`false`，

使用方法如下：

```json
fastQuery: true,
```

**注意：当`fastQuery`的值为`false`时，`fastQuery`属性应省略不写**

### 1.2.2 说明

关于`fastQuery`属性的说明：

#### 1.2.2.1 什么时候使用`fastQuery`属性？

当`rules`属性内的规则的满足下列条件：

 `末尾属性选择器`的`第一个属性选择表达式`符合下面的结构之一的选择器

- `[id='abc']`
- `[vid='abc']`
- `[text='abc']`
- `[text^='abc']`
- `[text*='abc']`
- `[text$='abc']`

或者使用`||`将它们连接形成的逻辑表达式也符合条件，即如下格式：

- `[id='abc' || id='abc2']`
- `[id='abc' || vid='abc' || text='abc' || text^='abc' || text*='abc' || text$='abc']`

下面给出实际示例：✅表示符合格式, ❎表示不符合格式

- `A > B + C[id='x'][childCount=2]` ✅
- `A > B + C[childCount=2][id='x']` ❎
- `A > B + C[id='x' || text='manbaout' || text*='ikun'][childCount=2]` ✅
- `A > B + C[childCount=2][id='x' || text='manbaout' || text*='ikun']` ❎

这样一个选择器只能在右侧使用快速查询，为了在中间的子选择器也能使用

额外规定如果属性选择器如果符合上面格式并且右侧是`<<n`，也能在局部使用快速查找

示例：`A > B + C[id='x'][childCount=2] <<n D`中的`C[id='x'][childCount=2] <<n`可以使用局部快速查找

下面给出满足局部查询优化的示例：✅表示符合格式, ❎表示不符合格式

- `A > B + C[id='x'][childCount=2] <<n D` ✅
- `A > B + C[childCount=2][id='x'] <<n D` ❎

上面介绍的是只有一个局部选择器的情况，下面给出多个局部快速查找的的示例：

如`A > C[id='x'] <<n D[id='y'] <<n E`，其中的`C[id='x'] <<n`和`D[id='y'] <<n`都可以使用局部快速查找

而且只有`网页审查工具`出现`可快速查找`提示（即一个对勾）时，可以使用`fastQuery`属性。

**注意：如果选择器不存在满足快速查找的格式, `fastQuery`是否开启都不影响查询复杂度**

#### 1.2.2.2 `fastQuery`属性的位置

1. 当`fastQuery`属性与`rules`属性同级时，该规则组的所有规则全部使用`fastQuery`。

   可以理解为：在该规则组下全局开启`fastQuery`。

2. 当`fastQuery`属性位于`rules`属性内的其中一个对象中时，仅对该`子规则集`开启`fastQuery`。

   可以理解为：局部使用`fastQuery`

## 1.3 activityIds

`activityIds`属性需要搭配`网页审查工具`使用。

这里拓展下，什么是activity？

### 1.3.1 activity

Android的Activity是一个应用组件，一个应用通常由多个彼此松散联系的activity组成，在这里，你只需要知道这个就足够了。

GKD的activityIds与Android的Activity是一样的。

### 1.3.2 介绍

`activityIds`属性接受一个`String`类型（即字符串）的值 或者 一个`String`类型的数组

值的内容是规则执行的activityId

#### 1.3.2.1 activityIds属性的意义

> 值的内容是规则执行的activityId

如何理解这句话？

activityIds相当于是一个牢笼，将规则的生效范围局限在activityIds规定的Activity下。

比如，一个规则A，在Activity1下能正常工作，但在Activity2下误触。

这时，我们就需要用activityIds，将规则的生效范围限定在Activity1，使其不在Activity2生效

#### 1.3.2.2 格式

使用方法如下：

```json
activityIds: 'activityId',
```
或
```json
activityIds: [
    "activityId1",
    "activityId2",
    ...
],
```

#### 1.3.2.3 说明

类比`fastQuery`属性，

1. 当`activityIds`属性与`rules`属性同级时，该规则组的所有规则全部在`activityIds`规定的activity中生效。

2. 当`activityIds`属性位于`rules`属性内的其中一个对象中时，在仅是该`子规则集`在`activityIds`规定的activity中生效。

## 1.4 resetMatch

`resetMatch`属性接受一个`string`类型的参数。

可选参数为：`app`和`activity`。默认为`activity`。

### 1.4.1 格式

```json5
resetMatch: 'app',

resetMatch: 'activity',
```

### 1.4.2 说明

#### 1.4.2.1 作用

`resetMatch`属性的作用为：规定在规则因`actionMaximum`等原因进入冷却后，重新开始匹配的条件。

当`resetMatch`的值为`app`时，规则冷却后，只有重新进入app才会重新开始匹配；

当`resetMatch`的值为默认的`activity`时，规则冷却后，只要activity变化，就会重新开始匹配。

**请注意：activity的变化并不一定伴随着activityId的变化。**

#### 1.4.2.2 特殊情况

当`resetMatch`的值为`activity`时，一般不会写进规则中。

如：

```json5
{
    resetMatch: 'activity',
    rules: '',
},
```

与

```json5
{
    rules: '',
},
```

完全等价，我们一般会选择下方的写法。

#### 1.4.2.3 位置

类比`fastQuery`属性，

1. 当`resetMatch`属性与`rules`属性同级时，该规则组的所有规则全部使用`resetMatch`的设置。

2. 当`resetMatch`属性位于`rules`属性内的其中一个对象中时，在仅是该`子规则集`使用`resetMatch`的设置。

## 1.5 matchTime

`matchTime`属性接受一个`Interger`类型的参数。

其参数含义为：规则匹配时间，使用的单位是毫秒。

那么为什么需要这么一个属性呢？

### 1.5.1 作用

我们看一下官方对其的说明：

> 规则匹配时间，此规则参与查询屏幕节点时，等待一段时间，休眠此规则
> 例如某些应用的`开屏广告`的`activityId`容易误触/太广泛，而开屏广告几乎只在应用切出来时出现，设置一个有限匹配时间能避免后续的误触

可以看到，其是为了防止误触而出现的一个属性。

一般来说：我们仅会在`开屏广告`类的规则使用到它，但是在特殊情况下，其他分类的规则也会使用。

### 1.5.2 格式

```json5
matchTime: 10000, // 设置为 10000 是最常见的
```

### 1.5.3 说明

类比`fastQuery`属性，

1. 当`matchTime`属性与`rules`属性同级时，该规则组的所有规则全部使用`matchTime`的设置。

2. 当`matchTime`属性位于`rules`属性内的其中一个对象中时，在仅是该`子规则集`使用`matchTime`的设置。


## 1.6 actionMaximum

--TODO--