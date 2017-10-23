'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccountPage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var _transactionsReduxRequest = require('transactions-redux-request');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccountPage = exports.AccountPage = function AccountPage(WrappedComponent) {
  var _AccountPage = function (_Component) {
    _inherits(_AccountPage, _Component);

    function _AccountPage() {
      _classCallCheck(this, _AccountPage);

      var _this = _possibleConstructorReturn(this, (_AccountPage.__proto__ || Object.getPrototypeOf(_AccountPage)).call(this));

      _this.state = { isUpload: false };
      return _this;
    }

    _createClass(_AccountPage, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          state: this.state }));
      }
    }]);

    return _AccountPage;
  }(_react.Component);

  _AccountPage.defaultProps = { api: { signPath: '/sign' },
    fields: [{
      key: 'firstName',
      name: 'First Name'
    }, {
      key: 'lastName',
      name: 'Last Name'
    }, {
      key: 'email',
      name: 'Email'
    }]
  };
  var mapStateToProps = function mapStateToProps(_ref) {
    var _ref$user = _ref.user,
        active = _ref$user.active,
        email = _ref$user.email,
        firstName = _ref$user.firstName,
        id = _ref$user.id,
        imageUrl = _ref$user.imageUrl,
        lastName = _ref$user.lastName;

    return { active: active,
      email: email,
      firstName: firstName,
      id: id,
      imageUrl: imageUrl,
      lastName: lastName
    };
  };
  return (0, _reactRedux.connect)(mapStateToProps, { request: _transactionsReduxRequest.request,
    showModalWarning: _transactionsInterfaceState.showModalWarning
  })(_AccountPage);
};