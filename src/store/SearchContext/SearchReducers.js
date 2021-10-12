import * as actionTypes from './searchConstants'

const initialState = {
  text: '',
  heroes: [],
}
const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_HEROES: {
      return {
        ...state,
        heroes: action.payload.results.map((element) => ({
          ...element,
          isinTeam: false,
        })),
      }
    }

    default:
      return state
  }
}

export default searchReducer
