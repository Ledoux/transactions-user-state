'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninPage = undefined;

var _reactRedux = require('react-redux');

var SigninPage = exports.SigninPage = function SigninPage(WrappedComponent) {
  function mapStateToProps(_ref) {
    var flash = _ref.flash;

    return { data: flash && flash.signinData,
      message: flash && flash.signinMessage
    };
  }
  return (0, _reactRedux.connect)(mapStateToProps)(WrappedComponent);
};