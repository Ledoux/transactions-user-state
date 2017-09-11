import { connect } from 'react-redux'

export const SignupPage = WrappedComponent => {
  function mapStateToProps ({ flash }) {
    return { data: flash && flash.signupData,
      message: flash && flash.signupMessage,
    }
  }
  return connect(mapStateToProps)(SignupPage)
}
