import React, { Component } from 'react'
import { connect } from 'react-redux'

import { showModalWarning } from 'transactions-interface-state'
import { request } from 'transactions-redux-react'

export const AccountPage = WrappedComponent => {
  class _AccountPage extends Component {
    constructor () {
      super()
      this.state = { isUpload: false }
    }
    render () {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }
  _AccountPage.defaultProps = { fields: [
      {
        key: 'firstName',
        name: 'First Name'
      },
      {
        key: 'lastName',
        name: 'Last Name'
      },
      {
        key: 'email',
        name: 'Email'
      }
    ]
  }
  return connect(({ user: {
    active,
    email,
    firstName,
    id,
    imageUrl,
    lastName
  }}) => ({ active,
    email,
    firstName,
    id,
    imageUrl,
    lastName
  }), { request,
    showModalWarning
  })(_AccountPage)
}
