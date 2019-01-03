const fs = require('fs');
const marked = require('marked');
// var md = require('markdown-it')();

const os = require('os');
// debugger
// let reg =  /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;

// let rpReg = /(?:[*+-]|\d+\.)/;
// function edit(regex, opt) {
//     regex = regex.source || regex;
//     opt = opt || '';
//     return {
//       replace: function(name, val) {
//         val = val.source || val;
//         val = val.replace(/(^|[^\[])\^/g, '$1');
//         regex = regex.replace(name, val);
//         return this;
//       },
//       getRegex: function() {
//         return new RegExp(regex, opt);
//       }
//     };
//   }

//   let result = edit(reg).replace(/bull/g,rpReg)
let rendererMD = new marked.Renderer();
rendererMD.heading = function (text, level) {
    
    return `<h${level} class='title'>
     <span>${text}</span>
     </h${level}>
     `
}
rendererMD.table = function (thead, tbody) {

    return `<figure class='table'><table>
    <thead> ${thead} </thead>
    <tbody> ${tbody} </tbody>
    </table></figure>`
   

}
//包裹pre，复制的时候不会去掉，
rendererMD.code = (code, lang, and) => {
    // let codelins = 
    // console.log(code.split('\n'));
    code = code.replace(/  /g,'&nbsp;')
    console.log(code);
    
    // console.log(level);
    return '<pre class="md-fences"><textarea data-lang="'+lang+'" class="code-mirrow">'+code+'</textarea><p></p></pre>'
}
rendererMD.html = (code, lang, and) => {
    // let codelins = 
    // console.log(code.split('\n'));
    console.log(code);
}

marked.setOptions({
    renderer: rendererMD,
});
let filename = 'md1';

let tmp = fs.readFileSync('./tpl.html', 'utf8');
let str = fs.readFileSync(filename + '.md', 'utf8');
let html = marked(str)
//去掉头部
html = html.replace(/<h.+\n.+typora-copy-i.+\n.+\d>/, '').replace(/^<hr>/, '')
tmp = tmp.replace('<article id="md-content">', '<article id="md-content">' + os.EOL + html)
fs.writeFileSync(filename + '.html', tmp)