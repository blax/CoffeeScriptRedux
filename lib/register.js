// Generated by CoffeeScript 2.0.0-beta6-dev
var CoffeeScript, fs, runModule;
fs = require('fs');
CoffeeScript = require('./module');
runModule = require('./run').runModule;
module.exports = !(null != require.extensions['.coffee']);
if (null != require.extensions['.coffee'])
  require.extensions['.coffee'];
else
  require.extensions['.coffee'] = function (module, filename) {
    var csAst, input, js, jsAst;
    input = fs.readFileSync(filename, 'utf8');
    csAst = CoffeeScript.parse(input, { raw: true });
    jsAst = CoffeeScript.compile(csAst);
    js = CoffeeScript.js(jsAst);
    return runModule(module, js, jsAst, filename);
  };
if (null != require.extensions['.litcoffee'])
  require.extensions['.litcoffee'];
else
  require.extensions['.litcoffee'] = function (module, filename) {
    var csAst, input, js, jsAst;
    input = fs.readFileSync(filename, 'utf8');
    csAst = CoffeeScript.parse(input, {
      raw: true,
      literate: true
    });
    jsAst = CoffeeScript.compile(csAst);
    js = CoffeeScript.js(jsAst);
    return runModule(module, js, jsAst, filename);
  };
