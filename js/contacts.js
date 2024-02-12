function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
import Input from './input.js';
var ContactForm = /*#__PURE__*/function (_React$Component) {
  _inherits(ContactForm, _React$Component);
  function ContactForm(props) {
    var _this;
    _classCallCheck(this, ContactForm);
    _this = _callSuper(this, ContactForm, [props]);
    _defineProperty(_assertThisInitialized(_this), "Submit", function (event) {
      var selectedType = _this.state.selectedType;
      var url = _this.props.url;
      var items = [];
      switch (selectedType) {
        case 'job':
        case 'internship':
          items = ["name", "surname", "email", "phone", "office", "linkedin", "file", "comments", "consentForFutureVacancies", "consentForRecruitmentProcess", "consentForCompanyNews"];
          break;
        case 'cooperation':
          items = ["name", "surname", "email", "phone", "company", "fileInput", "comments", "privacyPolicyAgreement"];
          break;
      }
      if (_this.isFormValid(items)) {
        var form = new FormData();
        items.forEach(function (item) {
          var inputObj = JSON.parse(sessionStorage.getItem(selectedType + '-' + item));
          if (inputObj.type == undefined || inputObj.type != 'file') {
            form.append(selectedType + '-' + item, inputObj.value);
          } else if (inputObj.type == 'file' && inputObj.value != '') {
            form.append(selectedType + '-' + item, document.querySelector('#' + selectedType + '-' + item).files[0]);
          }
        });
        fetch(url, {
          method: 'post',
          body: form
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleTypeChange", function (event) {
      _this.setState({
        selectedType: event.target.value
      });
    });
    _defineProperty(_assertThisInitialized(_this), "renderInputsByType", function () {
      var selectedType = _this.state.selectedType;
      var offices = ["Mogilev", "Minsk", "New-York", "Tokio"];
      switch (selectedType) {
        case 'job':
        case 'internship':
          return [/*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-name",
            key: "name",
            placeholder: "Name*",
            required: true
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-surname",
            key: "surname",
            placeholder: "Surname*",
            required: true
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-email",
            key: "email",
            placeholder: "Email*",
            warning: "format: example@site.com",
            required: true,
            regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-phone",
            key: "phone",
            placeholder: "Phone",
            warning: "format: +375xxxxxxxxx",
            regex: /^(\+\d{1,4})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,9}$/
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-office",
            key: "office",
            placeholder: "Office",
            type: "combo",
            variants: offices,
            required: true
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-linkedin",
            key: "linkedin",
            placeholder: "Linkedin",
            warning: "format: https://www.linkedin.com/in/",
            regex: /^(http|https):\/\/(www\.)?linkedin\.com\/in\/[A-Za-z]+/
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-file",
            key: "file",
            placeholder: "Resume*",
            type: "file"
          })];
        case 'cooperation':
          return [/*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-name",
            key: "kname",
            placeholder: "Name*",
            required: true
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-surname",
            key: "ksurname",
            placeholder: "Surname*",
            required: true
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-email",
            key: "kemail",
            placeholder: "Email*",
            warning: "format: example@site.com",
            required: true,
            regex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-phone",
            key: "kphone",
            placeholder: "Phone",
            warning: "format: +375xxxxxxxxx",
            regex: /^(\+\d{1,4})?[\s\-]?\(?\d{1,4}\)?[\s\-]?\d{1,9}$/
          }), /*#__PURE__*/React.createElement(Input, {
            id: selectedType + "-company",
            key: "company",
            placeholder: "Company",
            required: true
          })];
        default:
          return null;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "renderAdditionalInfoBlock", function () {
      var _this$state = _this.state,
        selectedType = _this$state.selectedType,
        consentForRecruitmentProcess = _this$state.consentForRecruitmentProcess;
      if (selectedType === 'cooperation') {
        return /*#__PURE__*/React.createElement("div", {
          className: "additional-info"
        }, /*#__PURE__*/React.createElement("span", {
          className: "additional-info__title title"
        }, "Additional Info"), /*#__PURE__*/React.createElement(Input, {
          id: selectedType + "-fileInput",
          type: "file",
          value: '',
          placeholder: "File"
        }), /*#__PURE__*/React.createElement(Input, {
          id: selectedType + "-comments",
          value: _this.state.comments,
          placeholder: "Comments..."
        }), /*#__PURE__*/React.createElement(Input, {
          placeholder: "I have read and agree to the Privacy Policy",
          id: selectedType + "-privacyPolicyAgreement",
          type: "checkbox",
          checked: _this.state.privacyPolicyAgreement
        }));
      } else if (selectedType === 'job' || selectedType === 'internship') {
        return /*#__PURE__*/React.createElement("div", {
          className: "additional-info"
        }, /*#__PURE__*/React.createElement("span", {
          className: "additional-info__title title"
        }, "Additional Info"), /*#__PURE__*/React.createElement(Input, {
          id: selectedType + "-comments",
          value: _this.state.comments,
          placeholder: "Comments...",
          onChange: function onChange(e) {
            return _this.setState({
              comments: e.target.value
            });
          }
        }), /*#__PURE__*/React.createElement("p", {
          className: "description",
          style: {
            paddingBottom: "16px"
          }
        }, "Please review the Privacy Policy before submitting the form and agree to have your resume reviewed."), /*#__PURE__*/React.createElement(Input, {
          placeholder: "I agree to the storage and processing of my personal data for consideration of my candidacy for future vacancies.",
          id: selectedType + "-consentForFutureVacancies",
          type: "checkbox",
          checked: _this.state.consentForFutureVacancies
        }), /*#__PURE__*/React.createElement(Input, {
          placeholder: "I agree to the processing of my personal data for the consideration of my resume and participation in the recruitment process. *",
          id: selectedType + "-consentForRecruitmentProcess",
          type: "checkbox",
          required: true,
          checked: _this.state.consentForRecruitmentProcess
        }), /*#__PURE__*/React.createElement(Input, {
          placeholder: "I agree to receive information about company news and events.",
          id: selectedType + "-consentForCompanyNews",
          type: "checkbox",
          checked: _this.state.consentForCompanyNews
        }));
      }
      return null;
    });
    _this.state = {
      selectedType: '',
      formSubmitted: false
    };
    return _this;
  }
  _createClass(ContactForm, [{
    key: "isFormValid",
    value: function isFormValid(items) {
      var selectedType = this.state.selectedType;
      if (items.length === 0) {
        return false;
      }
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          if (!JSON.parse(sessionStorage.getItem(selectedType + '-' + item)).isValid) {
            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var selectedType = this.state.selectedType;
      return /*#__PURE__*/React.createElement("div", {
        className: "form"
      }, /*#__PURE__*/React.createElement("div", {
        className: "label"
      }, "I wanna"), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("input", {
        id: "type-1",
        type: "radio",
        className: "input-type",
        name: "type",
        value: "job",
        checked: selectedType === 'job',
        onChange: this.handleTypeChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "type",
        htmlFor: "type-1"
      }, "Get a job"), /*#__PURE__*/React.createElement("input", {
        id: "type-2",
        type: "radio",
        className: "input-type",
        name: "type",
        value: "internship",
        checked: selectedType === 'internship',
        onChange: this.handleTypeChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "type",
        htmlFor: "type-2"
      }, "Get an internship"), /*#__PURE__*/React.createElement("input", {
        id: "type-3",
        type: "radio",
        className: "input-type",
        name: "type",
        value: "cooperation",
        checked: selectedType === 'cooperation',
        onChange: this.handleTypeChange
      }), /*#__PURE__*/React.createElement("label", {
        className: "type",
        htmlFor: "type-3"
      }, "Offer cooperation")), /*#__PURE__*/React.createElement("div", {
        className: "inputs"
      }, this.renderInputsByType()), /*#__PURE__*/React.createElement("div", {
        className: "additional-block"
      }, this.renderAdditionalInfoBlock(), /*#__PURE__*/React.createElement("a", {
        className: "button-link form-button",
        onClick: this.Submit
      }, /*#__PURE__*/React.createElement("button", null, "Submit"))));
    }
  }]);
  return ContactForm;
}(React.Component);
ReactDOM.createRoot(document.querySelector('.right-column_form')).render( /*#__PURE__*/React.createElement(ContactForm, {
  url: "https://google.com"
}));