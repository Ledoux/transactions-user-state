import React, { Component } from 'react'
import { connect } from 'react-redux'
import { apiFetch,
  setActiveUser
} from 'transactions-interface-state'

export const VerifyPage = WrappedComponent => {
  class _VerifyPage extends Component {
    constructor (props) {
      super(props)
      this.state = {
        loading: false,
        success: false
      }
    }
    componentDidMount () {
      const { api,
        setActiveUser
      } = this.props
      const code = (window.location.search.match(/code=([^&]*)/) || [null, null])[1]
      if (!code) {
        return
      }
      this.setState({
        code,
        loading: true
      })
      apiFetch(`${api.signPath}/activate-account`, {
        method: 'post',
        body: JSON.stringify({code})
      })
      .then(({error, user}) => {
        if (error) {
          this.setState({
            loading: false,
            error
          })
          return
        }
        this.setState({
          loading: false,
          success: true
        })
        setActiveUser()
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        })
      })
    }
    render () {
      return <WrappedComponent {...this.props}
        state={this.state} />
    }
  }
  _VerifyPage.defaultProps = {
    api: { signPath: '/sign' }
  }
  return connect(null, { setActiveUser })(_VerifyPage)
}
