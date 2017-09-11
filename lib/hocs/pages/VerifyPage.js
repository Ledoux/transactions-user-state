'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerifyPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerifyPage = exports.VerifyPage = function VerifyPage(WrappedComponent) {
  var _VerifyPage = function (_Component) {
    _inherits(_VerifyPage, _Component);

    function _VerifyPage(props) {
      _classCallCheck(this, _VerifyPage);

      var _this = _possibleConstructorReturn(this, (_VerifyPage.__proto__ || Object.getPrototypeOf(_VerifyPage)).call(this, props));

      _this.state = {
        loading: false,
        success: false
      };
      return _this;
    }

    _createClass(_VerifyPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        var _props = this.props,
            api = _props.api,
            setActiveUser = _props.setActiveUser;

        var code = (window.location.search.match(/code=([^&]*)/) || [null, null])[1];
        if (!code) {
          return;
        }
        this.setState({
          code: code,
          loading: true
        });
        (0, _transactionsInterfaceState.apiFetch)(api.signPath + '/activate-account', {
          method: 'post',
          body: JSON.stringify({ code: code })
        }).then(function (_ref) {
          var error = _ref.error,
              user = _ref.user;

          if (error) {
            _this2.setState({
              loading: false,
              error: error
            });
            return;
          }
          _this2.setState({
            loading: false,
            success: true
          });
          setActiveUser();
        }).catch(function (err) {
          _this2.setState({
            loading: false,
            error: err
          });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          state: this.state }));
      }
    }]);

    return _VerifyPage;
  }(_react.Component);

  _VerifyPage.defaultProps = {
    api: { signPath: '/sign' }
  };
  return (0, _reactRedux.connect)(null, { setActiveUser: _transactionsInterfaceState.setActiveUser })(_VerifyPage);
};