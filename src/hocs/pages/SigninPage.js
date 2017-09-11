import { connect } from 'react-redux'

export const SigninPage = WrappedComponent => {
  function mapStateToProps ({ flash }) {
    return { data: flash && flash.signinData,
      message: flash && flash.signinMessage,
    }
  }
  return connect(mapStateToProps)(WrappedComponent)
}
