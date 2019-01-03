---
typora-copy-images-to: 订阅号可以怎么写？
---

> 话说上次写了一篇《怎么开通订阅号》，半实验性质地弄了些花里胡哨的渐变色、阴影等，现在看起来。。颇丑
>
> 便改了一番：去掉阴影，像按钮一样的大标题给换掉，增添亮色，其他的凸出改成凹陷。自觉好看了一些，少了些压迫，整篇的色调也丰富起来。
>
> 上篇文章虽说样子不好看，内容也单调，甚至没强调开通订阅号完全免费，但歪打正着取了个好名字，这两天居然有很多人通过搜一搜来看。
>
> ![1546521528732](订阅号可以怎么写？/1546521528732.png)
>
> 甚至有一位陌生人关注了我。寒冷的冬天，在此非常感谢。
>
> 这篇文章接着上篇，说说自己怎么写公众号。

## 常规写法

微信后台本身自带文本编辑器。

![1546521987188](订阅号可以怎么写？/1546521987188.png)

你可以设置文字的颜色、大小和位置，加个背景色，还有加粗斜体下划线，最后是分割线和引用标志

仅仅依赖这些，可能不够用，但编辑器还有个神器，图文模板。

![1546522729618](订阅号可以怎么写？/1546522729618.png)

人类的本质是复读机，图文模板的存在像是印证着这句话，复读。现在许多公众号内容倒是不错，但往往开篇给你来个动图让你关注，像是一个销售不告诉你卖得啥却让你买了再说。真要提的话你放到文末，还情有可原，因为我们可能就是一念之间。

图文模板，即把格式保存复用，你可以用保存一个小段。我看到过许多用法，常见的用来求关注或搞推广，也有做一些别的功能模块，比如提示、警告和禁止。

![1546524163117](订阅号可以怎么写？/1546524163117.png)

除此之外，还可以弄成整篇文章的模板。有些公众号会用标志性封面，有些科普的，比如果壳网、自然杂志，文末往往会标明引用，加上作者的具体信息。

用自带的文本编辑器大概如此，除此之外，第三方的编辑器也很常见。

---------

![1546524679826](订阅号可以怎么写？/1546524679826.png)

第三方编辑器非常多，在此感叹公众号的产业链之大。

之前上网搜了问哪个编辑器好，有人推荐说135编辑器不错，复制进来格式基本不会改变。

（gif）

可以看到模板非常多。

几何图形标题有部分是用前端代码实现的，非常巧妙，做前端的朋友有兴趣可以去学习一个。用代码实现意味着不用上传图片，会方便很多。

而有些复杂标题和背景，代码实现不了，135似乎已把那些上传到微信服务器，我们可以直接复制内容到微信编辑器。如果是自己的图片，我需要点击图片手动上传，再手动插入，这种方式插入的图片不能当背景图。

总之，第三方编辑器确实很方便，如果对表现形式有些追求，可以尝试一番。



![1546526268352](订阅号可以怎么写？/1546526268352.png)

powered-by='xiumi.us'，自然公众号用的是秀米的编辑器。

## 个人的方式

因为养成了用markdown写东西的习惯，便不愿多折腾。前面说的常规写法虽有百般巧妙，但我的要求并不高啊~

markdown写完后留有文件，方便之后迁移到别处，比如博客，这是一大好处。

另外，我可以写一点不同的主题，通通用主题来承载我的内容，不同的主题对应不同类型的内容。讲些严肃的我就用黑色主题，写点小故事用泛黄的背景色，谈谈技术方面时硬核一点，闲聊的话要放在活泼的页面上，分享一些东西我就要阳光照进来。

之前提到过typora，不了解typora的朋友可以看下前面的文章。

其实一开始打算是用typora来写，直接把内容复制过去，格式基本可以保留，最后手动改下图片。唯一问题是，复制过去不能保留背景颜色。当时的我硬想着花里胡哨弄个完整背景色，琢磨着要是没有内容至少要徒有其表。便打算自主控制，完整地把md文件生成带主题的文章。

下面讲讲前端方面的东西，非相关人员可跳过。

----

### 前端相关的东西

https://soulsands.github.io/markdown2html4wx/

演示地址，拖动上传或者点击上传md文件可生成内容，直接全选复制到微信编辑器，基本不变形。

浏览器上，通过h5的filereader和input获取md文件内容,支持拖拽和点击。

```js
document.addEventListener("dragleave", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("drop", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("dragenter", function (e) {
    e.preventDefault();
}, false);
document.addEventListener("dragover", function (e) {
    e.preventDefault();
}, false);
//拖拽默认事件不要，不然像谷歌浏览器会直接通过浏览器打开文件
let area = document.querySelector('.area');
area.addEventListener('drop', (e) => {
    area.style.border = 'none'
    e.preventDefault()
    let files = e.dataTransfer.files;
    let read = new FileReader();
    let num = 0;
	//递归读取，可以同时上传多个文件
    function readfile(files, callback) {
        let file = files[num];
        if (file == null || file == undefined) return
        read.readAsText(file);
        read.onload = (file) => {
            callback(read.result)
            num++
            readfile(files, callback)
        }
    }
    readfile(files, (content) => {
        transToHtml(content);

    })
})
area.addEventListener('dragover', (e) => {
    area.style.border = '5px dashed #d8d8d8'
})
area.addEventListener("dragleave", function (e) {
    area.style.border = 'none'
});
//btnclick
let skinBtn = document.querySelector('.btn-skin');
let uploaBtn = document.querySelector('.upload-btn');
skinBtn.addEventListener("click", function (e) {
    uploaBtn.click()
});
uploaBtn.addEventListener("change", function (e) {
    let files = uploaBtn.files;
    var reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = function () {
        let content = reader.result;
        transToHtml(content);
    }
});

```

通过以上步骤，即可获取文件文本内容。

```js
function transToHtml(content) {
    let rendererMD = new marked.Renderer();
    rendererMD.heading = function (text, level) {
        return `<h${level} class='title'>
         <span>${text}</span>
         </h${level}>
         `
    }
    
     //微信的编辑器做了限制，在复制进去的时候会将div去除，所以我外面加了<pre>标签
    //里面的textarea时给后文的code-mirrow插件做标记
    rendererMD.table = function (thead, tbody) {
        return `<figure class='table'><table>
        <thead> ${thead} </thead>
        <tbody> ${tbody} </tbody>
        </table></figure>`
    }
    //包裹pre，复制的时候不会去掉，
    rendererMD.code = (text, level, and) => {
        // console.log(level);
        // return `<pre class="md-fences"><textarea data-lang="${level}" class="code-mirrow">${text}</textarea><p></p></pre>`
    }
   
    //微信对table样式做了限制，这里外面包一层<figure>标签，用来操纵背景色
    let options = {
        renderer: rendererMD,
    }
    let html = marked(content,options);
    html = html.replace(/<h.+\n.+typora-copy-i.+\n.+\d>/, '').replace(/^<hr>/, '');
    //用typora时前面多出来的代码用来指定复制图片的文件夹，这里不需要
    geneIframe(html)
    window.mdContent = html;
    return html
}
//最后用iframe的方式来生成，以后可以改进
function geneIframe(html) {
    console.log(html);
    var iframeCon = document.querySelector('.iframeCon');
    var text; //传递的信息
    var iframe = document.createElement('iframe');
        iframe.id = "frame",
        // iframe.style = "display:none;",
        iframe.name = "polling",
        iframe.src = "src/show.html";
        iframe.width = "360px";
        iframe.height = "475px";
    iframeCon.appendChild(iframe);
    iframe.onload = function () {

    }
}

```



到了这一步，我们得到了一个拥有完整html标签的页面，标签语义化很足。

接下来就是代码高亮，以及写自己所需要的样式。

说起这个，微信编辑器的代码高亮让人头痛。本来以为用个highlight.js就可以轻松搞定，但结果不顺，好端端的代码复制到微信里面变成了一行。

原因是highlight.js渲染的是行内标签span，复制到微信编辑器会被转义并且去除div，原本格式没被保留。

一个不行再换一个，就找到了prism.js，也是一个轻量的高亮插件，结果如出一辙。

之后找到syntaxHighlighter，顾名思义语法高亮器，找了文档一通操作，发现它渲染的标签是table，复制到微信里后并没变格式，大喜。虽不太美观，但挫折后的我已经很欣慰了，当天睡了个好觉。

第二天发现一个新问题，支持的语法居然太老，es6都不认识。只能放弃这个寻找新路子。找了半天，打起了typora的主意。

之前试过之前复制typora的内容，代码可以正常显示，便有所留意。但typora用的code-mirrow插件本身是个代码编辑器，换言之代码高亮是它的副业，它的主业是把一块区域变成一个编辑器。但到了这一步，我也没啥办法，是驴是马都要当骡子用了。

```html
    <link rel="stylesheet" href="./css/lib/codemirror.css"> 
    <link rel="stylesheet" href="./css/lib/solarized.css">
    <script src="./js/lib/codemirror.js"></script>
    <script src="./js/lib/mode/xml/xml.js"></script>
    <script src="./js/lib/mode/javascript/javascript.js"></script>
    <script src="./js/lib/mode/css/css.js"></script>
    <script src="./js/lib/mode/htmlmixed/htmlmixed.js"></script>
    <link rel="stylesheet" href="./css/style.css">
```

以上引用可以支持前端代码，如果需要支持别的语言高亮，需要再添加mode里的js。

```js
  let wrapper = document.querySelector('#md-content');
        wrapper.innerHTML = window.parent.mdContent;  
		//找到所有的codo-mirrow内容块，根据预留的语言类型参数来选择高亮模板
        let codeBlocks = document.querySelectorAll('.code-mirrow');
        for (let index = 0; index < codeBlocks.length; index++) {
            const element = codeBlocks[index];
            let lang = element.dataset.lang;
            let match = {
                js: 'javascript',
                javascript: 'javascript',
                html: "htmlmixed",
                css: 'css'
            }
            console.log(match[lang]);
            CodeMirror.fromTextArea(element, {
                readOnly: 'nocursor',
                theme: 'solarized dark',
                mode: {
                    name: match[lang] || 'javascript',
                    scriptTypes: [{
                        matches: /\/x-handlebars-template|\/x-mustache/i,
                        mode: null
                    }]
                }
            });
        }
```

到了这一步，基本渲染完成，直接复制到微信可以使用。

---

这里说下一些细节

- div会被一层一层除掉，这一点影响很大，很多第三方会用section、figure、pre等标签来代替，
- table被微信定义了许多样式，所以需要写很多样式来覆盖

- ul的list-style如果是不设置的话也会清除。

- code-mirrow生成的代码在谷歌上没问题，预览也没问题，但就在微信浏览器上一行代码超出就换行了。把pre的white-space改成no-wrap，结果代码的预先空白样式被浏览器忽略，代码缩进完全没有了。用正则把空格换成&nbsp;`&nbsp;`,才得以解决。代码可以正常显示。

  但最后还是选择让它换行，免得滑来滑去来看代码。



接下来用vuepress来开发自动生成主题，生成文档会方便。





### 前端外的东西

目前写的话直接再typora上面写，这个编辑器也有很多主题，样子如下，![1546531595913](订阅号可以怎么写？/1546531595913.png)

有人说这个颜色好看一点，之后我打算弄个这个颜色的主题。格式方面的问题都解决了，接下只要换换颜色就能切换。

微信浏览器边边的间隔我用代码控制不了，目前没啥办法，所以只能留两个白边。有强迫症朋友反映说不好看。唉，所以正常的白底虽然很普通，但确实协调。

对了如果有人听我安利用了typora的话，这里说个小细节：设置自动复制图片，配合系统自带的截图工具，将其固定在底部栏，快捷键操作，很方便。

## 结尾

关于写公众号，这篇分享的角度比较靠后，只关注了怎么把生下来的内容放到微信上，其实参考意义并不大。

写订阅号，真正重要的大概是能为别人提供价值。或让人现在的心情变好，或让人能够以后过得更好，目前的大公众号基本属于这两种。

我呢，目前打算一边想想自己有什么拿得出手，一边练习练习流畅地下笔。说到这里，深感还是要多读书，读书破万卷方能下笔如有神。现在代码写多了脑子里都是冷冰冰的逻辑，怕是下笔如有鬼。

但愿有一天，脑子里写文章的神经元会顺畅地链接，神采飞扬，火花四溅。

对了，在这还推荐一本书《余光中谈翻译》。虽说谈翻译，但本质上也谈创作。