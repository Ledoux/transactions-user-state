'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TourButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterRedux = require('react-router-redux');

var _transactionsInterfaceState = require('transactions-interface-state');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TourButton = exports.TourButton = function TourButton(WrappedComponent) {
  var _TourButton = function (_Component) {
    _inherits(_TourButton, _Component);

    function _TourButton() {
      _classCallCheck(this, _TourButton);

      var _this = _possibleConstructorReturn(this, (_TourButton.__proto__ || Object.getPrototypeOf(_TourButton)).call(this));

      _this.handleTourRequest = _this._handleTourRequest.bind(_this);
      _this.onTourClick = _this._onTourClick.bind(_this);
      return _this;
    }

    _createClass(_TourButton, [{
      key: '_handleTourRequest',
      value: function _handleTourRequest() {
        var _props = this.props,
            email = _props.email,
            helpersCollectionName = _props.helpersCollectionName,
            push = _props.push,
            userEmail = _props.userEmail;

        if (email === userEmail) {
          push({
            search: (0, _transactionsInterfaceState.getUpdatedSearchString)({
              helpersCollectionName: helpersCollectionName
            })
          });
        }
      }
    }, {
      key: '_onTourClick',
      value: function _onTourClick() {
        var _props2 = this.props,
            email = _props2.email,
            path = _props2.path,
            returnTo = _props2.returnTo;

        (0, _transactionsInterfaceState.apiFetch)(path, {
          method: 'POST',
          body: JSON.stringify({ email: email,
            returnTo: returnTo
          })
        }).then(function (result) {
          return console.log(result);
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.handleTourRequest();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.handleTourRequest();
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
          onTourClick: this.onTourClick }));
      }
    }]);

    return _TourButton;
  }(_react.Component);

  _TourButton.defaultProps = { returnTo: '/dashboard',
    text: 'Take a tour'
  };
  function mapStateToProps(_ref) {
    var email = _ref.user.email;

    return { userEmail: email };
  }
  return (0, _reactRedux.connect)(mapStateToProps, { push: _reactRouterRedux.push })(_TourButton);
};