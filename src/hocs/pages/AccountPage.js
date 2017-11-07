import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiFetch,
  showModalWarning
} from 'transactions-interface-state'
import { request } from 'transactions-redux-react'

export const AccountPage = WrappedComponent => {
  class _AccountPage extends Component {
    constructor () {
      super ()
      this.state = { isUpload: false }
    }
    render () {
      return <WrappedComponent {...this.props}
        state={this.state} />
    }
  }
  _AccountPage.defaultProps = { api: { signPath: '/sign' },
    fields: [
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
  const mapStateToProps = ({ user: {
    active,
    email,
    firstName,
    id,
    imageUrl,
    lastName
  }}) => {
    return { active,
      email,
      firstName,
      id,
      imageUrl,
      lastName
    }
  }
  return connect(mapStateToProps, { request,
    showModalWarning
  })(_AccountPage)
}
