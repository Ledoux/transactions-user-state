import { SET_USER } from './user'

const initialState = { adminUser: null,
  currentTourUser: false,
  users: null
}

export function tour (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        currentTourUser: state.users &&
          state.users.find(({ id }) => id === action.user.id)
      })
  }
  return state
}
