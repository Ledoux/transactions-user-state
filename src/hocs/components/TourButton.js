import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { apiFetch,
  getUpdatedSearchString
} from 'transactions-interface-state'

export const TourButton = WrappedComponent => {
  class _TourButton extends Component {
    constructor () {
      super ()
      this.handleTourRequest = this._handleTourRequest.bind(this)
      this.onTourClick = this._onTourClick.bind(this)
    }
    _handleTourRequest () {
      const { email,
        helpersCollectionName,
        push,
        userEmail
      } = this.props
      if (email === userEmail) {
        push({
          search: getUpdatedSearchString({
            helpersCollectionName
          })
        })
      }
    }
    _onTourClick () {
      const { email,
        path
      } = this.props
      apiFetch(path, {
        method: 'POST',
        body: JSON.stringify({
          email
        })
      }).then(result => console.log(result))
    }
    componentDidMount () {
      this.handleTourRequest()
    }
    componentDidUpdate () {
      this.handleTourRequest()
    }
    render () {
      return <WrappedComponent {...this.props}
        onTourClick={this.onTourClick} />
    }
  }
  _TourButton.defaultProps = {
    text: 'Take a tour'
  }
  function mapStateToProps({ user: { email } }) {
    return { userEmail: email }
  }
  return connect(mapStateToProps, { push })(_TourButton)
}
