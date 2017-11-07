'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToursSection = undefined;

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _transactionsReduxReact = require('transactions-redux-react');

var ToursSection = exports.ToursSection = (0, _redux.compose)((0, _reactRedux.connect)(function (_ref) {
  var IS_DEVELOPMENT = _ref.setup.context.IS_DEVELOPMENT;
  return { IS_DEVELOPMENT: IS_DEVELOPMENT };
}), (0, _transactionsReduxReact.withComputedProps)({
  slides: function slides(_ref2) {
    var users = _ref2.users;
    return users && users.sort(function (a, b) {
      return a.sortIndex - b.sortIndex;
    });
  }
}));