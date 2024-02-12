function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var headerRoot = ReactDOM.createRoot(document.querySelector('.header-root'));
var footerRoot = ReactDOM.createRoot(document.querySelector('.footer-root'));
var Header = /*#__PURE__*/function (_React$Component) {
  _inherits(Header, _React$Component);
  function Header(props) {
    var _this;
    _classCallCheck(this, Header);
    _this = _callSuper(this, Header, [props]);
    _defineProperty(_assertThisInitialized(_this), "changeVisibility", function () {
      _this.setState(function (prevState) {
        return {
          menuClassName: prevState.menuClassName === 'menul' ? 'menul_show' : 'menul'
        };
      });
    });
    _this.state = {
      menuClassName: 'menul'
    };
    return _this;
  }
  _createClass(Header, [{
    key: "render",
    value: function render() {
      var menuClassName = this.state.menuClassName;
      return /*#__PURE__*/React.createElement("header", {
        className: "header"
      }, /*#__PURE__*/React.createElement("div", {
        className: "header__wrapper"
      }, /*#__PURE__*/React.createElement("div", {
        className: "block-logo"
      }, /*#__PURE__*/React.createElement("a", {
        href: "/"
      }, /*#__PURE__*/React.createElement("img", {
        src: "/img/logo.svg",
        alt: "logo",
        className: "block-logo__image"
      }))), /*#__PURE__*/React.createElement("nav", {
        className: "nav"
      }, /*#__PURE__*/React.createElement("div", {
        className: "menu ".concat(menuClassName)
      }, /*#__PURE__*/React.createElement("a", {
        className: "menu__item",
        href: "/about"
      }, "About us"), /*#__PURE__*/React.createElement("a", {
        className: "menu__item",
        href: "/dev"
      }, "Development"), /*#__PURE__*/React.createElement("a", {
        className: "menu__item",
        href: "/vacancies"
      }, "Vacancies"), /*#__PURE__*/React.createElement("a", {
        className: "menu__item menu__item_bordered",
        href: "/contact"
      }, "Contact us")), /*#__PURE__*/React.createElement("button", {
        className: "burger-button",
        onClick: this.changeVisibility
      }, /*#__PURE__*/React.createElement("span", {
        className: "menu-toggle-bar menu-toggle-bar--top"
      }), /*#__PURE__*/React.createElement("span", {
        className: "menu-toggle-bar menu-toggle-bar--middle"
      }), /*#__PURE__*/React.createElement("span", {
        className: "menu-toggle-bar menu-toggle-bar--bottom"
      })))));
    }
  }]);
  return Header;
}(React.Component);
var footer = /*#__PURE__*/React.createElement("footer", {
  className: "footer"
}, /*#__PURE__*/React.createElement("a", {
  className: "footer__link",
  href: "#"
}, "careers@solvix.com"), /*#__PURE__*/React.createElement("div", {
  className: "middle-line"
}, /*#__PURE__*/React.createElement("a", {
  href: "/about",
  className: "middle-line__link"
}, "About us"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "middle-line__link"
}, "Careers"), /*#__PURE__*/React.createElement("a", {
  href: "#",
  className: "middle-line__link"
}, "Contact us")), /*#__PURE__*/React.createElement("div", {
  className: "bottom-line"
}, /*#__PURE__*/React.createElement("span", {
  className: "bottom-line__copyright"
}, "\xA92024 - ", new Date().getFullYear(), ". Sovix All rights reserved."), /*#__PURE__*/React.createElement("img", {
  src: "/img/logo.svg",
  alt: "logo",
  className: "bottom-line__image"
})));
headerRoot.render( /*#__PURE__*/React.createElement(Header, null));
footerRoot.render(footer);