import { connect } from 'react-redux'
import { closeModal,
  showModal
} from 'transactions-interface-state'

export const LogoutLink = connect(({ setup: { api: { signPath } } }) =>
  ({ signPath }), { closeModal, showModal })
