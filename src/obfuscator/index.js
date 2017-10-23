const testObfuscateEs = require('./testObfuscateEs');
const obfuscateEs = require('./obfuscateEs');

testObfuscateEs(obfuscateEs);

const testUglifyJs = require('./testUglifyJs');
testUglifyJs();