// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"components/c8editor.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    TextareaControl = _wp$components.TextareaControl;

var C8Editor = /*#__PURE__*/function (_Component) {
  _inherits(C8Editor, _Component);

  var _super = _createSuper(C8Editor);

  function C8Editor(props) {
    var _this;

    _classCallCheck(this, C8Editor);

    _this = _super.call(this, props);
    _this.state = {
      content: '',
      working: false
    };
    return _this;
  } // just for testing


  _createClass(C8Editor, [{
    key: "toggleWorking",
    value: function toggleWorking() {
      this.setState({
        working: !this.state.working
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        content: '',
        working: false
      });
    }
  }, {
    key: "publish",
    value: function publish() {
      this.setState({
        working: true
      });

      if (this.props.publishCallback(this.state)) {
        this.reset();
      } else {
        this.setState({
          working: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(TextareaControl, {
        label: "Write A New Post\u2026",
        value: this.state.content,
        disabled: this.state.working,
        onChange: function onChange(content) {
          return _this2.setState({
            content: content
          });
        }
      }), /*#__PURE__*/React.createElement(Button, {
        isTertiary: true,
        onClick: function onClick() {
          return _this2.toggleWorking();
        }
      }, "Toggle"), /*#__PURE__*/React.createElement(Button, {
        disabled: this.state.working,
        isSecondary: true,
        onClick: function onClick() {
          return _this2.reset();
        }
      }, "Reset"), /*#__PURE__*/React.createElement(Button, {
        disabled: this.state.working,
        isPrimary: true,
        onClick: function onClick() {
          return _this2.publish();
        }
      }, "Publish"), /*#__PURE__*/React.createElement("small", null, this.state.content));
    }
  }]);

  return C8Editor;
}(Component);

var _default = C8Editor;
exports.default = _default;
},{}],"c8.scss":[function(require,module,exports) {

},{}],"c8.jsx":[function(require,module,exports) {
"use strict";

var _c8editor = _interopRequireDefault(require("./components/c8editor"));

require("./c8.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var Post = wp.api.models.Post;
var render = wp.element.render;

_objectDestructuringEmpty(wp.components);

function publishCallback(_ref) {
  var content = _ref.content;
  var newPost = new Post({
    content: content,
    status: 'publish'
  });
  newPost.save();
  return newPost;
} // Bootload in the stub for the new post


var stub = document.createElement('div');
stub.id = 'c8-new-post';
document.querySelector('.post.hentry').before(stub); // Render the React component.

render( /*#__PURE__*/React.createElement(_c8editor.default, {
  publishCallback: publishCallback
}), stub);
},{"./components/c8editor":"components/c8editor.jsx","./c8.scss":"c8.scss"}]},{},["c8.jsx"], null)
//# sourceMappingURL=c8.js.map