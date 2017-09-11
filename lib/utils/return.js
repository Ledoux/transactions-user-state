"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getReturnState = getReturnState;
function getReturnState() {
  var returnTo = void 0;
  var returnMessage = void 0;
  var search = window.location.search;
  returnTo = (search.match(/returnTo=([^&]*)/) || [null, null])[1];
  returnMessage = (search.match(/returnMessage=([^&]*)/) || [null, null])[1];
  if (returnMessage) {
    returnMessage = decodeURIComponent(returnMessage);
  }
  return {
    returnTo: returnTo,
    returnMessage: returnMessage
  };
}