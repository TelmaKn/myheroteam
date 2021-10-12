import axios from 'axios'

export function signUp(email, password) {
  const postData = {
    email,
    password,
  }

  return axios.post('http://challenge-react.alkemy.org/', postData)
}

export function login(email, password) {
  const postData = {
    email,
    password,
  }

  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    postData
  )
}
export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
    case 'EMAIL_EXISTS':
      return 'Email already exists'
    case 'EMAIL_NOT_FOUND':
      return 'Email not found'
    case 'INVALID_PASSWORD':
      return 'Invalid Password'
    case 'USER_DISABLED':
      return 'User Disabled'

    default:
      return ''
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  localStorage.setItem('userDetails', JSON.stringify(tokenDetails))
}
