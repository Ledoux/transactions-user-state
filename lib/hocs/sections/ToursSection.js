'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToursSection = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _transactionsInterfaceState = require('transactions-interface-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToursSection = exports.ToursSection = function ToursSection(WrappedComponent) {
  return (0, _transactionsInterfaceState.withComputedProps)({
    slides: function slides(_ref) {
      var users = _ref.users;
      return users && users.sort(function (a, b) {
        return a.sortIndex - b.sortIndex;
      });
    }
  })(WrappedComponent);
};