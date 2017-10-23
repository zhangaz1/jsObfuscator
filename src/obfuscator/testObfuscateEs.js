const fs = require('fs');

module.exports = testObfuscateEs;

function testObfuscateEs(obfuscateEs) {
    const demo1Path = './src/testCodes/demo1.js';
    const code = fs.readFileSync(demo1Path, 'utf-8');
    
    console.log('xxxxxxxxxxxxxxxxxxxx original:', code);
    
    const obfuscated = obfuscateEs(code);
    console.log('xxxxxxxxxxxxxxxxxxxx obfuscate:', obfuscated);
}