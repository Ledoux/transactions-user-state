'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutLink = undefined;

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var LogoutLink = exports.LogoutLink = (0, _reactRedux.connect)(function (_ref) {
  var signPath = _ref.setup.api.signPath;
  return { signPath: signPath };
}, { closeModal: _transactionsInterfaceState.closeModal, showModal: _transactionsInterfaceState.showModal });