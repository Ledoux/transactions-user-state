import { SET_USER } from './user'

const intialState = { adminUser: null,
  currentTourUser: false,
  users: null
}

export function tour (state = intialState, action) {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {
        currentTourUser: state.users && state.users.find(({ id }) => id === action.user.id)
      })
  }
  return state
}
