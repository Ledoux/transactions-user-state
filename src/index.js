import * as user from './reducers/user'
import * as userSaga from './sagas/user'
import * as conditions from './utils/conditions'
import * as redirection from './utils/redirection'

const transactionsUserState = Object.assign({ userSaga
},
  conditions,
  redirection,
  user
)

export default transactionsUserState
