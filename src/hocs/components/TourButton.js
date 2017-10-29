import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiFetch } from 'transactions-interface-state'

export const TourButton = WrappedComponent => {
  class _TourButton extends Component {
    constructor () {
      super ()
      this.onTourClick = this._onTourClick.bind(this)
    }
    _onTourClick () {
      const { email,
        modeName,
        path,
        returnTo
      } = this.props
      apiFetch(path, {
        method: 'POST',
        body: JSON.stringify({ email,
          returnTo: `${returnTo}?tutorialName=${modeName}&partIndex=0&helperIndex=0`
        })
      }).then(result => console.log(result))
    }
    render () {
      return <WrappedComponent {...this.props}
        onTourClick={this.onTourClick} />
    }
  }
  _TourButton.defaultProps = { returnTo: '/dashboard',
    text: 'Take a tour'
  }
  function mapStateToProps({ user: { email } }) {
    return { userEmail: email }
  }
  return connect(mapStateToProps)(_TourButton)
}
