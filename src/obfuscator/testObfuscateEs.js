const fs = require('fs');

module.exports = testObfuscateEs;

function testObfuscateEs(obfuscateEs) {
    const demo1Path = './src/testCodes/demo1.js';
    const code = fs.readFileSync(demo1Path, 'utf-8');
    
    console.log('xxxxxxxxxxxxxxxxxxxx original:', code);
    
    let obfuscated = obfuscateEs(code);
    console.log('xxxxxxxxxxxxxxxxxxxx obfuscate1:', obfuscated);
    
    obfuscated = obfuscateEs(code, {
        toplevel: true,
        nameCache: {},
        compress: {},
        mangle: {
            toplevel:true,
        },
    });
    console.log('xxxxxxxxxxxxxxxxxxxx obfuscate2:', obfuscated);
    
    // obfuscated = obfuscateEs(code);
    // console.log('xxxxxxxxxxxxxxxxxxxx obfuscate1:', obfuscated);
    //
    // obfuscated = obfuscateEs(code);
    // console.log('xxxxxxxxxxxxxxxxxxxx obfuscate1:', obfuscated);
    //
    // obfuscated = obfuscateEs(code);
    // console.log('xxxxxxxxxxxxxxxxxxxx obfuscate1:', obfuscated);
}