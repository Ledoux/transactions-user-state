'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignupPage = undefined;

var _reactRedux = require('react-redux');

var SignupPage = exports.SignupPage = (0, _reactRedux.connect)(function (_ref) {
  var flash = _ref.flash,
      signPath = _ref.setup.api.signPath;
  return {
    data: flash && flash.signupData,
    message: flash && flash.signupMessage,
    signPath: signPath
  };
});