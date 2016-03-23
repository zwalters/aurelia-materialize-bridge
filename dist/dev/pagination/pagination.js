'use strict';

System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', '../common/events', '../common/attributes'], function (_export, _context) {
  var bindable, customElement, bindingMode, inject, fireMaterializeEvent, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, MdPagination;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonEvents) {
      fireMaterializeEvent = _commonEvents.fireMaterializeEvent;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('MdPagination', MdPagination = (_dec = customElement('md-pagination'), _dec2 = inject(Element), _dec3 = bindable({
        defaultBindingMode: bindingMode.twoWay
      }), _dec4 = bindable({
        defaultBindingMode: bindingMode.oneWay
      }), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function MdPagination(element) {
          _classCallCheck(this, MdPagination);

          _initDefineProp(this, 'mdActivePage', _descriptor, this);

          _initDefineProp(this, 'mdPages', _descriptor2, this);

          _initDefineProp(this, 'mdShowFirstLast', _descriptor3, this);

          _initDefineProp(this, 'mdShowPrevNext', _descriptor4, this);

          this.element = element;
        }

        MdPagination.prototype.bind = function bind() {
          this.mdPages = parseInt(this.mdPages, 10);
          this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
        };

        MdPagination.prototype.setActivePage = function setActivePage(page) {
          this.mdActivePage = page;
          fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
        };

        MdPagination.prototype.setFirstPage = function setFirstPage() {
          if (this.mdActivePage > 1) {
            this.setActivePage(1);
          }
        };

        MdPagination.prototype.setLastPage = function setLastPage() {
          if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdPages);
          }
        };

        MdPagination.prototype.setPreviousPage = function setPreviousPage() {
          if (this.mdActivePage > 1) {
            this.setActivePage(this.mdActivePage - 1);
          }
        };

        MdPagination.prototype.setNextPage = function setNextPage() {
          if (this.mdActivePage < this.mdPages) {
            this.setActivePage(this.mdActivePage + 1);
          }
        };

        return MdPagination;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mdActivePage', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mdPages', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowFirstLast', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mdShowPrevNext', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _export('MdPagination', MdPagination);
    }
  };
});
//# sourceMappingURL=../dist/dev/pagination/pagination.js.map
