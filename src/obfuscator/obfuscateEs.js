module.exports = obfuscateEs;

function obfuscateEs(code, options) {
    const UglifyJS = require('uglify-es');
    const result = UglifyJS.minify(code, options);
    return result.code;
}