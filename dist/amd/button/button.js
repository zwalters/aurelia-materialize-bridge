define(['exports', 'aurelia-framework', '../common/cssClassSetter', '../common/attributes'], function (exports, _aureliaFramework, _commonCssClassSetter, _commonAttributes) {
  'use strict';

  exports.__esModule = true;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdButton = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdButton, [{
      key: 'disabled',
      decorators: [_aureliaFramework.bindable()],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'flat',
      decorators: [_aureliaFramework.bindable()],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'large',
      decorators: [_aureliaFramework.bindable()],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MdButton(element) {
      _classCallCheck(this, _MdButton);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'large', _instanceInitializers);

      this.classSetter = new _commonCssClassSetter.CssClassSetter(element);
    }

    MdButton.prototype.attached = function attached() {
      var classes = [];

      if (_commonAttributes.getBooleanFromAttributeValue(this.flat)) {
        classes.push('btn-flat');
      }
      if (_commonAttributes.getBooleanFromAttributeValue(this.large)) {
        classes.push('btn-large');
      }

      if (classes.length === 0) {
        classes.push('btn');
      }

      if (_commonAttributes.getBooleanFromAttributeValue(this.disabled)) {
        classes.push('disabled');
      }

      if (!_commonAttributes.getBooleanFromAttributeValue(this.flat)) {
        classes.push('accent');
      }
      this.classSetter.addClasses(classes);
    };

    MdButton.prototype.detached = function detached() {
      this.classSetter.removeClasses(['accent', 'btn', 'btn-flat', 'btn-large', 'disabled']);
    };

    MdButton.prototype.disabledChanged = function disabledChanged(newValue) {
      if (_commonAttributes.getBooleanFromAttributeValue(newValue)) {
        this.classSetter.addClasses('disabled');
      } else {
        this.classSetter.removeClasses('disabled');
      }
    };

    var _MdButton = MdButton;
    MdButton = _aureliaFramework.inject(Element)(MdButton) || MdButton;
    MdButton = _aureliaFramework.customAttribute('md-button')(MdButton) || MdButton;
    return MdButton;
  })();

  exports.MdButton = MdButton;
});