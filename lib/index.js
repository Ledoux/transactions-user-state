'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./reducers/user');

var user = _interopRequireWildcard(_user);

var _user2 = require('./sagas/user');

var userSaga = _interopRequireWildcard(_user2);

var _conditions = require('./utils/conditions');

var conditions = _interopRequireWildcard(_conditions);

var _redirection = require('./utils/redirection');

var redirection = _interopRequireWildcard(_redirection);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var transactionsUserState = Object.assign({ userSaga: userSaga
}, conditions, redirection, user);

exports.default = transactionsUserState;