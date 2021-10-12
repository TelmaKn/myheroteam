import * as actionTypes from './searchConstants'
import axios from 'axios'

export const fetchHeroes = (text) => (dispatch) => {
  axios
    .get(`https://www.superheroapi.com/api.php/4737343382966253/search/${text}`)
    .then((response) =>
      dispatch({
        type: actionTypes.FETCH_HEROES,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err))
}
