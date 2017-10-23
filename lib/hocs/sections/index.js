'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ToursSection = require('./ToursSection');

Object.keys(_ToursSection).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ToursSection[key];
    }
  });
});