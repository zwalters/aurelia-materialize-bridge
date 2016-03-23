'use strict';

System.register(['materialize', './config-builder', './toast/toastService'], function (_export, _context) {
  var ConfigBuilder;
  return {
    setters: [function (_materialize) {}, function (_configBuilder) {
      ConfigBuilder = _configBuilder.ConfigBuilder;
    }, function (_toastToastService) {
      var _exportObj = {};

      for (var _key in _toastToastService) {
        if (_key !== "default") _exportObj[_key] = _toastToastService[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {
      function configure(aurelia, configCallback) {
        var builder = new ConfigBuilder();

        if (configCallback !== undefined && typeof configCallback === 'function') {
          configCallback(builder);
        }

        if (builder.useGlobalResources) {
          aurelia.globalResources(builder.globalResources);
        }
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=dist/dev/index.js.map
