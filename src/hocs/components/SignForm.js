import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { closeModal,
  showModalWarning
} from 'transactions-interface-state'

import { getReturnState } from '../../utils/return'

export const SignForm = WrappedComponent => {
  class _SignForm extends Component {
    constructor () {
      super()
      const { returnMessage, returnTo } = getReturnState()
      // it is important to initialize email and password with empty
      // string to make already the input components as controlled component
      // otherwise you will get this typical 'switched from uncontrolled' to 'controlled'
      // component from React error logs when you type text inside the input
      this.state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        subscription: {
          selector: false,
          reviewer: false,
          editor: false
        },
        returnMessage,
        returnTo
      }
      this.handleChangeValue = this._handleChangeValue.bind(this)
      this.handleClickCheckValue = this._handleClickCheckValue.bind(this)
    }
    _handleChangeValue (event, key) {
      this.setState({[key]: event.target.value})
    }
    _handleClickCheckValue (key, value) {
      const oldContent = this.state[key]
      this.setState({[key]: Object.assign(oldContent, {
        [value]: !oldContent[value]
      })})
    }
    componentDidMount () {
      const { returnMessage } = this.state
      const { push,
        showModalWarning
      } = this.props
      if (returnMessage) {
        showModalWarning('exclamation', returnMessage)
        push(window.location.pathname)
        this.setState({returnMessage: null})
      }
    }
    render () {
      return <WrappedComponent {...this.props} state={this.state} />
    }
  }
  return connect(null, { closeModal,
    showModalWarning,
    push
  })(_SignForm)
}
