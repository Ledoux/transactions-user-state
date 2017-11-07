'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SigninPage = undefined;

var _reactRedux = require('react-redux');

var SigninPage = exports.SigninPage = (0, _reactRedux.connect)(function (_ref) {
  var flash = _ref.flash,
      signPath = _ref.setup.api.signPath;
  return {
    data: flash && flash.signinData,
    message: flash && flash.signinMessage,
    signPath: signPath
  };
});