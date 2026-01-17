---
title: QwQNT 第九次社区解谜活动题解与部分源码披露
tags: [QwQNT,解谜,题解]
date: 2026-01-18 00:26:36
categories: [QwQNT]
---

# 1. 前言

本篇题解大部分来自[@Lheopd](https://t.me/Lheopd)。已获得授权。

本篇题解涉及的原网站，因为有人扫站，为了保障其余网站的稳定，决定下线。

# 2. 题解

[QwQNT文档](https://qwqnt-community.github.io/docs/)

以往活动存档请[点击这里查看](https://qwqnt-community.github.io/docs/framework/event-archive)

本次活动共计16题，不同题目之间存在防跳关机制~~（不过看起来有用，但不多）~~

## a. 开始页

[QwQNT 第二次统一高考](https://3.qwqnt.adproqwq.top/)

点击 `开始考试` 即可前往第 1 题

## b. 第 1 题

[第 1 题](https://3.qwqnt.adproqwq.top/1/)

此处的 `经典返场` 指的是 QwQNT 第三次社区解谜活动的第1题，将网页上方地址栏中的 1 改为 2 即可前往第 2 题

```text
https://3.qwqnt.adproqwq.top/1/
↓
https://3.qwqnt.adproqwq.top/2/
```

## c. 第 2 题

[第 2 题](https://3.qwqnt.adproqwq.top/2/)

`学会用审视的眼光看问题！` 指的是网页中常用的 F12 开发者工具

点击 F12 打开开发者工具后，选择元素选项卡，展开 `<div id="app">` 一项后，可以看到注释字段

```html
<!-- 答案 = answer -->
```

由此可以得知下一题的关键词

```text
https://3.qwqnt.adproqwq.top/2/
↓
https://3.qwqnt.adproqwq.top/answer/
```

## d. 第 3 题

[第 3 题](https://3.qwqnt.adproqwq.top/answer/)

根据题目中 `宇宙的终极答案` 可知，此处 neta 了道格拉斯·亚当斯的《银河系漫游指南》

在《银河系漫游指南》中，超级电脑“深思”花了几百万年算出来的答案为 42

由此可以得知下一题的关键词

```text
https://3.qwqnt.adproqwq.top/answer/
↓
https://3.qwqnt.adproqwq.top/42/
```

## e. 第 4 题

[第 4 题](https://3.qwqnt.adproqwq.top/42/)

根据题目中的提示，我们点击 F12 打开开发者工具，选择控制台选项卡即可看到输出的日志 `next`

由此可以得知下一题的关键词

```text
https://3.qwqnt.adproqwq.top/42/
↓
https://3.qwqnt.adproqwq.top/next/
```

## f. 第 5 题

[第 5 题](https://3.qwqnt.adproqwq.top/next/)

此处题目中提到 `吃铁锈的螃蟹` 或许部分人直接去搜索对应的生物词条了，但实际上这里指的是编程语言 `Rust` 的吉祥物 `Ferris`

由此可以得知下一题的关键词

```text
https://3.qwqnt.adproqwq.top/next/
↓
https://3.qwqnt.adproqwq.top/Ferris/   #注意，此处严格区分大小写！
```

## g. 第 6 题

[第 6 题](https://3.qwqnt.adproqwq.top/Ferris/)

可以看见页面中的按钮为灰色，推测是被禁用了

因此我们按 F12 打开开发者工具，选择元素选项卡

展开 `<div id="app">` 后，将按钮所在元素中的 `disable` 删去，即可看见按钮恢复正常，点击前往下一题

## h. 第 7 题

[第 7 题](https://3.qwqnt.adproqwq.top/07)

此处按钮为正常状态，点击后没有反应，结合题目中的文本推测，可能是按钮内部文本做了识别

打开开发者工具，将按钮内文本中的 `不` 删除

```text
点击也不让你进入下一关
↓
点击也让你进入下一关
```

再次点击按钮，成功跳转至下一题

## i. 第 8 题

读题可知：世界第一的公主殿下（即初音未来）的代表色为葱绿色，即 **`#39C5BB`** 。题目中 `颜色不对` 可知，需要修改颜色

打开开发者工具，切换至控制台选项卡，输入 `setColor('#39C5BB')`

输入完成后页面弹出提示，点击查看提示后，控制台输出日志：`某个 baka 经常数错数，我们要纠正她！`

通过东方的相关梗知识，此处的 `baka` 指的是琪露诺，在`琪露诺的算数课堂`中可以得知，她数数是这样的：1，2，⑨。

所以这里将其纠正答案即是 `3`。

## j. 第 ⑨ 题

[第 ⑨ 题](https://3.qwqnt.adproqwq.top/3/)

（原作者此处因为是从第 8 题页面进入的第 9 题，因此不会触发防跳关机制，如果直接跳过前面的进入第 9 题，则会触发防跳关回到开始页）

按照惯例，打开 F12 开发者工具，展开元素可以看见题目文本中的 `答案就在这里` 后面有许多字符。

根据字符特征，推测为 `零宽字符隐写术` 。将其全部复制出来可以得到：

```text
答案就在这里&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;&#xFEFF;&ZeroWidthSpace;&#xFEFF;&ZeroWidthSpace;&ZeroWidthSpace;&#xFEFF;
```

将字符解密可以得到关键字 `koishi` （此处解密可以使用网页工具，也可以使用 ChatGPT 等 AI 工具）

由此可以得知下一题的关键词

```text
https://3.qwqnt.adproqwq.top/3/
↓
https://3.qwqnt.adproqwq.top/koishi/
```

## k. 第 10 题

[第 10 题](https://3.qwqnt.adproqwq.top/koishi/)

根据文本，点击文字后出现提示，根据提示查看控制台日志可以得到下一题关键词

```text
https://3.qwqnt.adproqwq.top/koishi/
↓
https://3.qwqnt.adproqwq.top/hajimi/
```

## l. 第 11 题

[第 11 题](https://3.qwqnt.adproqwq.top/hajimi/)

这题直接扔去 ChatGPT 等 AI 工具，解出答案有两种，不同学校教的方程形式不一样，±12 都填进去试试

最后正确答案为 -12

根据提示查看日志得出下一题关键词

```text
https://3.qwqnt.adproqwq.top/hajimi/
↓
https://3.qwqnt.adproqwq.top/qwqnt/   #此处关键词应该挺容易猜出来的
```

## m. 第 12 题

[第 12 题](https://3.qwqnt.adproqwq.top/qwqnt/)

结合题目，查看 F12 开发者工具中的各个地方均无特殊标识，所以直接根据题目猜关键词

原作者这里尝试了 `true` `yes` `no` `false` ，最后确定 `false` 为关键词

但其实你扣一下题目字眼，在控制台中访问 window.hongdouni 会返回 `false`

```text
https://3.qwqnt.adproqwq.top/qwqnt/
↓
https://3.qwqnt.adproqwq.top/false/
```

## n. 第 13 题

[第 13 题](https://3.qwqnt.adproqwq.top/false/)

查看题目中内容发现为社会主义核心价值观，不同词语出现的次数和频率不一样

推测为核心价值观编码方式，将其粘贴进对应网页工具可得提示： `下一关是：nanbeilvdou`

```text
https://3.qwqnt.adproqwq.top/false/
↓
https://3.qwqnt.adproqwq.top/nanbeilvdou/
```

## o. 第 14 题

[第 14 题](https://3.qwqnt.adproqwq.top/nanbeilvdou/)

题目中的 `大张挞伐，一决雌雄` 为清廷在 1900 年（即光绪二十六年）庚子事变中发布的对外宣战诏书（宣战措辞）中的内容

《北京55天》讲的正是这一诏书所处的历史背景下，北京使馆区被围困约55天、直至联军入京解围的事件改编故事

当然，你听过歌的话，看到光绪二十六年就该反应过来了

由此可以得出下一题的关键词

```text
https://3.qwqnt.adproqwq.top/nanbeilvdou/
↓
https://3.qwqnt.adproqwq.top/55/
```

## p. 第 15 题

[第 15 题](https://3.qwqnt.adproqwq.top/55/)

根据题目中提示，本题需要修改按钮颜色

打开开发者工具，查看 `冰冰凉凉` 对应的颜色为 `#0ff` ，将按钮元素的颜色更改为 `#0ff` 后按钮提示发生改变，得到下一题的关键词

```text
https://3.qwqnt.adproqwq.top/55/
↓
https://3.qwqnt.adproqwq.top/qqnt/   #此处关键词也挺容易猜出来的
```

## q. 第 16 题

[第16题](https://3.qwqnt.adproqwq.top/qqnt/)

（相较于之前的题目，这题才是重量级）

首先打开 F12 开发者工具，查看元素选项卡，发现隐藏地址 [api_doc](https://3.qwqnt.adproqwq.top/api_doc.txt)

接下来分析其中内容（此处可以借助 AI 工具帮助分析）

```text
nandaoshuo:

CCB: () => string
Get [数据损坏].

hajimi: (code: string) => void
To get code, please run [数据损坏]. Log [数据损坏] to console.

inject: (funcName: string) => void
Inject a verified function into nandaoshuo. If the function is not verified, it will inject a empty function.

verify: (funcName: string) => boolean
Check if a function name is verified. Return true for yes, false for no.

l[数据损坏]t: () => void
[数据损坏] all v[数据损坏]

l[数据损坏]C[数据损坏]d[数据损坏]: () => void
[数据损坏]
```

根据 CCB 下面的 Get 猜测可以获取到某个字段，在控制台输入 `nandaoshuo.CCB()` 可以得到一串提示文本：'老爷爷来踩背喽！'

根据 hajimi 中的提示，我们尝试将 `老爷爷来踩背喽！` 作为code传进去

在控制台输入 `nandaoshuo.hajimi('老爷爷来踩背喽！')` 得到一长串文本

```text
奈诺娜美嘎椰达吉奶椰菇阿西噶压，奈诺娜美嘎吉娜椰达吉窝那没撸多？库路曼波奶椰步不椰奶龙。阿西噶压没椰奈哈一哈基米；椰奶龙椰哪耶瓦库路曼波；窝那没撸多多多美一椰椰奶龙，奈诺娜美嘎菇酷哒椰达吉窝那没撸多，奈诺娜美嘎奶椰菇酷南北绿豆；欧莫季里豆椰哪吉窝那没撸多，南北绿豆咋椰友我南北绿豆；南北绿豆一椰南美椰奶龙，奈诺娜美嘎绿椰阿里我不菇奈诺娜美嘎；南北绿豆漫椰椰菇我奈诺娜美嘎，奈诺娜美嘎哒椰达呀酷不哈基米；库路曼波南呀喵多多奈诺娜美嘎；库路曼波美噶椰菇压奈诺娜美嘎，库路曼波嘎椰菇撸窝那没撸多？南北绿豆没椰椰漫椰奶龙。奈诺娜美嘎哪不友库欧窝那没撸多，阿西噶压椰阿耶利椰达美阿西噶压；椰奶龙瓦椰南库撸库路曼波；哦吗吉利一豆哩哩南北绿豆。
```

观察文本推测为哈基米 v1 加密方式，打开[哈基米 v1 的网站](https://lhlnb.top/hajimi/base64)

将上述文本输入进去解密可得：`是不是很熟悉？但是你成功地浪费了时间，什么用都没有哦~`

**（nmd！没错，我当时就是这么解的，看到解密出来的内容没绷住啊）**

此处行不通，于是我们继续查看 api_doc 文本内容，根据零碎字符猜测，下方有一个 list 函数可以列出所有的 verified 函数

于是在控制台输入 `nandaoshuo.list()` 发现控制台报错，结合 api_doc 文本，推测需要先通过 inject 将函数注入才可使用

因此我们可以简单的验证一下，将下面的文本复制进去执行，观察输出内容

```javascript
if (nandaoshuo.verify('list')) {
    nandaoshuo.inject('list');
    console.log("list 注入成功");
}
```

![](https://blog.hrk386.com/wp-content/uploads/2026/01/image.png)

成功验证我们的推测，现在再次输入 `nandaoshuo.list()` 查看所有可用函数

![](https://blog.hrk386.com/wp-content/uploads/2026/01/image-1.png)

发现此处的 `logCode` 符合api_doc文本中最后一项，于是先将其注入，然后执行

![](https://blog.hrk386.com/wp-content/uploads/2026/01/image-2.png)

得到关键词 `zhizaibide` ，尝试替换网址栏中的网址发现不是正确答案

此时注意到 `nandaoshuo.list()` 输出的内容中有一个不在 api_doc 文本中的函数

通过拼音可知为“太上老君急急如律令”，由此我们推测是一个显示特殊文本的函数，结合上一步我们拿到的关键字，我们尝试进行解密

![](https://blog.hrk386.com/wp-content/uploads/2026/01/image-3.png)

输出内容依然符合哈基米 v1 加密方式，我们解密可以得到一串文本：`+pNhy|k`

经过观察发现文本太短，且 y 和 k 中间包含一个特殊字符，不符合 tg 加群链接的格式，替换网址后发现仍然不是正确答案

仔细观察哈基米 v1 解密的网站，发现下面还有一个哈基米方言的输入框，于是我们将 `zhizaibide` 作为方言文本输入进去，得到最终关键词

```text
https://3.qwqnt.adproqwq.top/qqnt/
↓
https://3.qwqnt.adproqwq.top/zmluyww/
```

## r. 结尾

[恭喜！](https://3.qwqnt.adproqwq.top/zmluyww/)

这次活动相较于前 8 期活动给我的感觉是变简单了，也有可能是刚好用到的知识我有了解过，不过总的来说还是挺有意思的。

# 3. 源码披露

这里披露一些源码。

在上面第 16 题的题解里，原作者提到：

> 根据 CCB 下面的 Get 猜测可以获取到某个字段，在控制台输入 `nandaoshuo.CCB()` 可以得到一串提示文本：'老爷爷来踩背喽！'
>
> 根据 hajimi 中的提示，我们尝试将 `老爷爷来踩背喽！` 作为code传进去

但是请看源码：

```javascript
Object.defineProperty(window, 'nandaoshuo', {
  writable: true,
  value: {
    CCB: () => '老爷爷来踩背喽！',
    hajimi: (_: string) => hajimi_qqnt(),
    inject: (funcName: string) => {
      (window.nandaoshuo as Record<string, Function>)[funcName] = () => {};
    },
    verify: (funcName: string): boolean => verify_function_name_qqnt(funcName),
  },
});
```

而 hajimi_qqnt 调用的是 wasm 中的一个导出函数：

```rust
pub fn hajimi_qqnt(){
  console::log_1(&JsValue::from(obfstr!("奈诺娜美嘎椰达吉奶椰菇阿西噶压，奈诺娜美嘎吉娜椰达吉窝那没撸多？库路曼波奶椰步不椰奶龙。阿西噶压没椰奈哈一哈基米；椰奶龙椰哪耶瓦库路曼波；窝那没撸多多多美一椰椰奶龙，奈诺娜美嘎菇酷哒椰达吉窝那没撸多，奈诺娜美嘎奶椰菇酷南北绿豆；欧莫季里豆椰哪吉窝那没撸多，南北绿豆咋椰友我南北绿豆；南北绿豆一椰南美椰奶龙，奈诺娜美嘎绿椰阿里我不菇奈诺娜美嘎；南北绿豆漫椰椰菇我奈诺娜美嘎，奈诺娜美嘎哒椰达呀酷不哈基米；库路曼波南呀喵多多奈诺娜美嘎；库路曼波美噶椰菇压奈诺娜美嘎，库路曼波嘎椰菇撸窝那没撸多？南北绿豆没椰椰漫椰奶龙。奈诺娜美嘎哪不友库欧窝那没撸多，阿西噶压椰阿耶利椰达美阿西噶压；椰奶龙瓦椰南库撸库路曼波；哦吗吉利一豆哩哩南北绿豆。")));
}
```

对，其实无论你往 hajimi 里传什么都会输出这段文本。纯是浪费你们时间的。

还有为了适配 rust 的混淆工具和打包工具的 Powershell 脚本：

```powershell
New-Item -Path .\obfuscated_code -Name src -ItemType Directory -Force # 在混淆产物文件夹内新建 src 文件夹
Move-Item -Path .\obfuscated_code\lib.rs -Destination .\obfuscated_code\src -Force # 将混淆后代码移动进 src
Copy-Item -Path .\Cargo.toml -Destination .\obfuscated_code # 将 Cargo.toml 移动进混淆产物文件夹
Copy-Item -Path .\build.rs -Destination .\obfuscated_code # 将 build.rs 移动进混淆产物文件夹

Invoke-Expression "wasm-pack build obfuscated_code --target web --no-pack"

Remove-Item -Path .\obfuscated_code\pkg\.gitignore -Force # 删除构建产物内的 .gitignore
Remove-Item -Path .\pkg -Recurse -Force # 删除根目录下的 pkg 文件夹

Move-Item -Path .\obfuscated_code\pkg -Destination .\ -Force # 将构建产物移动到根目录

Invoke-Expression "wasm-strip .\pkg\qwqnt_enter_test_9_wasm_bg.wasm"
```

大概就这么多吧，还想看哪里的就在 tg 或者评论区说吧！当然我不保证我所有东西都会公开，有些地方写的太烂了。