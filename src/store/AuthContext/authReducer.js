import * as actionTypes from './authConstants'

const initialState = {
  auth: {
    token: '',
  },
  errorMessage: '',
  isAuth: false,
  successMessage: '',
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SIGNUP_CONFIRMED_ACTION:
      return {
        ...state,
        auth: action.payload,
        errorMessage: '',
        successMessage: 'Signup Successfully Completed',
        isAuth: true,
      }

    case actionTypes.SIGNUP_FAILED_ACTION:
      return {
        ...state,
        errorMessage: action.payload,
        successMessage: '',
      }

    default:
      return state
  }
}
