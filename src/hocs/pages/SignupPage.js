import { connect } from 'react-redux'

export const SignupPage = connect(({ flash, setup: { api: { signPath }} }) =>
  ({
    data: flash && flash.signupData,
    message: flash && flash.signupMessage,
    signPath
  }))
