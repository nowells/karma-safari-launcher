var fs = require('fs');
var path = require('path');

var SafariBrowser = function(baseBrowserDecorator) {
  baseBrowserDecorator(this);

  this._getOptions = function(url) {
    var HTML_TPL = path.normalize(__dirname + '/static/safari.html');

    var data = fs.readFileSync(HTML_TPL);
    var content = data.toString().replace('%URL%', url);
    var staticHtmlPath = this._tempDir + '/redirect.html';

    fs.writeFileSync(staticHtmlPath, content);

    return [
      '-Wna',
      'Safari',
      staticHtmlPath
    ];
  };
};

SafariBrowser.prototype = {
  name: 'Safari',

  DEFAULT_CMD: {
    darwin: '/Applications/Safari.app/Contents/MacOS/Safari'
  },
  ENV_CMD: 'SAFARI_BIN'
};

SafariBrowser.$inject = ['baseBrowserDecorator'];

// PUBLISH DI MODULE
module.exports = {
  'launcher:Safari': ['type', SafariBrowser]
};
