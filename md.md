---
typora-copy-images-to: mark it down
---

> 开号宣言中提到了markdown,那就讲讲markdown



## 啥是markdown

markdown是某种**标记语言**。

语言是某种约定。

就像拉钩上吊一百年不许变那样的约定。

只要约定好，这些被成为文字的东西便能传达意义。我们说的话是自然发展出的语言，而计算机语言是人造的和计算机的约定。

使用markdown，你可以给文字赋予更多信息，更直观，更准确，好传播。

写文字图个啥，当然图个以后能好好看。

从这个角度来说，用txt和markdown的区别就是一个右撇子的左手和右手。

当然啦，熟练掌握了微软爸爸的word，你可能算是个书法家，但书法家确实不好当嘛。



markdown的语法类似html，但更简单，掌握十多个标记完全够用。

它用来给文本添加**轻量格式**。

虽然轻量，但锋利程度却丝毫不减，因为它本身和word走得是不同的路线。

**markdown很简单。**

语法简单，大多是一些小符号，井号星号横杠之类，符号代表着格式。

所有的格式无非是为了更好地表达，读者更好阅读。而这些手段，常规的包括标题、分段和标点符号。

而markdown添加的，包括分级标题、序列、引用、代码块、表格、图片，链接和一系列的具体文字修饰，比如加粗、下划线、高亮、删除线、斜线、脚注。

**markdown体现一种权衡**。权衡因素包括写起来是不是方便，文本处理起来是否方便，读者是否看得更懂。

因为markdown的符号本身是格式明确的字符，对于正则很友好，所以可以很方便对其进行二次处理。它只提供文本，而字体、字号、字间距、行间距等等都可以用主题来自定义。



## markdown怎么用

学点语法，语法简单。

**标题**，一堆井号，`####`井号越少标题越大。

**序列**，一个横杠加空格 `-  ` ,解析出来出来点点。

- 就是这样

**有序序列**，数字加句点

1. 我有序
2. 我有序

**引用**，大于号加空格 `>  ` 

> 我被引用了

**链接**，`[链接内容](链接url)`

---

**代码块**，这个对于程序员来说必不可少，选定语言，在typora里面可以自动高亮，并且不会格式转换

```js
//Here's an example:
function test() {
  console.log("notice the blank line before this function?");
}
```

---

**表格**

```js
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

----

**脚注**

You can create footnotes like this[^footnote].

[^footnote]: Here is the *text* of the **footnote**.

![1545320393011](mark it down/1545320393011.png)

悬浮上面可以有提示

------

除了上面那些

**文字加粗**     `**文字加粗**`

*重点，斜着*        `*重点，斜着* `

`小的代码段`这个可以和其他文字在一行，不会转换

~~Mistaken text.~~     `Mistaken text.`

<u>Underline</u>      `<u>Underline</u>`

$\lim_{x \to \infty} \exp(-x) = 0     $          ` $\lim_{x \to \infty} \exp(-x) = 0$ `

X^2^  `X^2^`

H~2~O  `H~2~O`

==highlight==   `highlight== `



也可以用html

<span style="color:red">this text is red</span> `<span style="color:red">this text is red</span>`

--------

还有一些拓展功能，可能会依赖特定的编辑器。

比如可以画流程图，支持表情等等。



# 结语

作为除开号宣言的第一篇文章，它非常简陋朴实。

本身是用typora加markdown来写的。

markdown这东西细细品味的话，有点意思。

简单粗暴，在程序员群体中比较常见。

GitHub的仓库都有一个readme.md，都是用markdown写的。

这种用标记来生成格式的风格和word不一样。

word易用难精，而markdown建立了一定门槛，但要学的也不多，可以说人人都可以是markdown高手。

本身也适合非程序员群体，算是一种跨界的意味。

此外，还有git，做版本管理总比一堆添加数字的word文件好，还有啥啥终结版、最终版、最最终版、绝对终版。另外GitHub等仓库，据说有人用这个来一起写书，倒是有趣。





