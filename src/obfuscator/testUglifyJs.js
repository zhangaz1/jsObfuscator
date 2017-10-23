const fs = require('fs');

module.exports = testUglifyJs;

function testUglifyJs(obfuscateEs) {
    const demo2Path = './src/testCodes/demo2.js';
    const code = fs.readFileSync(demo2Path, 'utf-8');
    
    console.log('xxxxxxxxxxxxxxxxxxxx original:', code);
    
    const UglifyJS = require('uglify-js');
    const toplevel = UglifyJS.parse(code); //toplevel就是语法树
    const transformer = new UglifyJS.TreeTransformer(function (node) {
        console.log('node:', arguments);
        if (node instanceof UglifyJS.AST_Number) { //查找需要修改的叶子节点
            node.value = '0x' + Number(node.value).toString(16);
            return node; //返回一个新的叶子节点 替换原来的叶子节点
        };
    });
    toplevel.transform(transformer);  //遍历AST树
    const ncode = toplevel.print_to_string(); //从AST还原成字符串
    
    console.log('xxxxxxxxxxxxxxxxxxxx obfuscate:', ncode);
}