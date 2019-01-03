function transToHtml(content) {

    let rendererMD = new marked.Renderer();
  
    rendererMD.heading = function (text, level) {
        return `<h${level} class='title'>
         <span>${text}</span>
         </h${level}>
         `
    }
    //包裹pre，复制的时候不会去掉，
    rendererMD.code = (text, level, and) => {
        // console.log(level);
        return `<pre class="md-fences"><textarea data-lang="${level}" class="code-mirrow">${text}
            </textarea></pre>
        `
    }
    rendererMD.table = function (thead, tbody) {
        return `<figure class='table'><table>
        <thead> ${thead} </thead>
        <tbody> ${tbody} </tbody>
        </table></figure>`
    }
    let options = {
        renderer: rendererMD,
    }
    let html = marked(content,options);
    html = html.replace(/<h.+\n.+typora-copy-i.+\n.+\d>/, '').replace(/^<hr>/, '');
    geneIframe(html)
    window.mdContent = html;
    return html
}

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

