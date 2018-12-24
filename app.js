const fs = require('fs');
const marked = require('marked');
// debugger
let reg =  /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;

let rpReg = /(?:[*+-]|\d+\.)/;
function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    return {
      replace: function(name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function() {
        return new RegExp(regex, opt);
      }
    };
  }

  let result = edit(reg).replace(/bull/g,rpReg)



// let str = fs.readFileSync('./mark it down.md','utf8');
// let html =marked(str)
// fs.writeFileSync('mark it down.html',html)

