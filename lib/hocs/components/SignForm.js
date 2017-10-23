'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _return = require('../../utils/return');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignForm = exports.SignForm = function SignForm(WrappedComponent) {
  var _SignForm = function (_Component) {
    _inherits(_SignForm, _Component);

    function _SignForm(props) {
      _classCallCheck(this, _SignForm);

      var _this = _possibleConstructorReturn(this, (_SignForm.__proto__ || Object.getPrototypeOf(_SignForm)).call(this, props));

      var _getReturnState = (0, _return.getReturnState)(props),
          returnMessage = _getReturnState.returnMessage,
          returnTo = _getReturnState.returnTo;
      // it is important to initialize email and password with empty
      // string to make already the input components as controlled component
      // otherwise you will get this typical 'switched from uncontrolled' to 'controlled'
      // component from React error logs when you type text inside the input


      _this.state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        returnMessage: returnMessage,
        returnTo: returnTo
      };
      _this.handleChangeValue = _this._handleChangeValue.bind(_this);
      _this.handleClickCheckValue = _this._handleClickCheckValue.bind(_this);
      return _this;
    }

    _createClass(_SignForm, [{
      key: '_handleChangeValue',
      value: function _handleChangeValue(event, key) {
        this.setState(_defineProperty({}, key, event.target.value));
      }
    }, {
      key: '_handleClickCheckValue',
      value: function _handleClickCheckValue(key, value) {
        var oldContent = this.state[key];
        this.setState(_defineProperty({}, key, Object.assign(oldContent, _defineProperty({}, value, !oldContent[value]))));
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var returnMessage = this.state.returnMessage;
        var _props = this.props,
            push = _props.push,
            showModalWarning = _props.showModalWarning;

        if (returnMessage) {
          showModalWarning('exclamation', returnMessage);
          push(window.location.pathname);
          this.setState({ returnMessage: null });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          handleChangeValue: this.handleChangeValue,
          handleClickCheckValue: this.handleClickCheckValue
        }, this.state));
      }
    }]);

    return _SignForm;
  }(_react.Component);

  return (0, _reactRedux.connect)(null, { closeModal: _transactionsInterfaceState.closeModal,
    showModalWarning: _transactionsInterfaceState.showModalWarning,
    push: _reactRouterRedux.push
  })(_SignForm);
};