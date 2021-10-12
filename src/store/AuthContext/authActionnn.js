import * as actionTypes from './authConstants'

import {
  formatError,
  signUp,
  saveTokenInLocalStorage,
} from '../../services/authService'

export function signupAction(email, password) {
  return (dispatch) => {
    signUp(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data)
        dispatch(confirmedSignup(response.data))
      })
      .catch((error) => {
        const errorMessage = formatError(error.response.data)
        dispatch(signupFailedAction(errorMessage))
      })
  }
}

export function confirmedSignup(payload) {
  return {
    type: actionTypes.SIGNUP_CONFIRMED_ACTION,
    payload,
  }
}
export function signupFailedAction(message) {
  return {
    type: actionTypes.SIGNUP_FAILED_ACTION,
    payload: message,
  }
}
