import { connect } from 'react-redux'

export const SigninPage = connect(({ flash, setup: { api: { signPath }} }) =>
  ({
    data: flash && flash.signinData,
    message: flash && flash.signinMessage,
    signPath
  }))
