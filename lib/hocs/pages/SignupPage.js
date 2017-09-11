'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupPage = undefined;

var _reactRedux = require('react-redux');

var SignupPage = exports.SignupPage = function SignupPage(WrappedComponent) {
  function mapStateToProps(_ref) {
    var flash = _ref.flash;

    return { data: flash && flash.signupData,
      message: flash && flash.signupMessage
    };
  }
  return (0, _reactRedux.connect)(mapStateToProps)(SignupPage);
};