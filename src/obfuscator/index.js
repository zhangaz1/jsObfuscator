const testUglifyJs = require('./testUglifyJs');
testUglifyJs();

const testObfuscateEs = require('./testObfuscateEs');
const obfuscateEs = require('./obfuscateEs');

testObfuscateEs(obfuscateEs);