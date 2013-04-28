var SafariBrowser = function(baseBrowserDecorator) {
  baseBrowserDecorator(this);

  this._getOptions = function(url) {
    return [
      '-Wna',
      'Safari',
      url
    ];
  };
};

SafariBrowser.prototype = {
  name: 'Safari',

  DEFAULT_CMD: {
    darwin: '/usr/bin/open'
  },
  ENV_CMD: 'SAFARI_BIN'
};

SafariBrowser.$inject = ['baseBrowserDecorator'];

// PUBLISH DI MODULE
module.exports = {
  'launcher:Safari': ['type', SafariBrowser]
};
