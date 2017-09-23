'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tour = tour;

var _user = require('./user');

var initialState = { adminUser: null,
  currentTourUser: false,
  users: null
};

function tour() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _user.SET_USER:
      return Object.assign({}, state, {
        currentTourUser: state.users && state.users.find(function (_ref) {
          var id = _ref.id;
          return id === action.user.id;
        })
      });
  }
  return state;
}