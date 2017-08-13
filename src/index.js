import * as user from './reducers/user'
import * as userSaga from './sagas/user'
import * as condition from './utils/condition'
import * as redirection from './utils/redirection'

const transactionsUserState = Object.assign({ userSaga
},
  condition,
  redirection,
  user
)

export default transactionsUserState
