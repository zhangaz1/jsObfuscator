module.exports = obfuscateEs;

function obfuscateEs(code) {
    const UglifyJS = require('uglify-es');
    const result = UglifyJS.minify(code);
    return result.code;
}