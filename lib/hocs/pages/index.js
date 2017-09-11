'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AccountPage = require('./AccountPage');

Object.keys(_AccountPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _AccountPage[key];
    }
  });
});

var _SigninPage = require('./SigninPage');

Object.keys(_SigninPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SigninPage[key];
    }
  });
});

var _SignupPage = require('./SignupPage');

Object.keys(_SignupPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SignupPage[key];
    }
  });
});

var _VerifyPage = require('./VerifyPage');

Object.keys(_VerifyPage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _VerifyPage[key];
    }
  });
});