'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutLink = undefined;

var _reactRedux = require('react-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

var LogoutLink = exports.LogoutLink = function LogoutLink(WrappedComponent) {
  return (0, _reactRedux.connect)(null, { closeModal: _transactionsInterfaceState.closeModal,
    showModal: _transactionsInterfaceState.showModal
  })(WrappedComponent);
};