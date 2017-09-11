import { connect } from 'react-redux'
import { closeModal,
  showModal
} from 'transactions-interface-state'

export const LogoutLink = WrappedComponent => {
  return connect(null, { closeModal,
    showModal
  })(WrappedComponent)
}
