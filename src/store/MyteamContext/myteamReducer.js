import * as actionTypes from './myteamConstans'

const initialState = {
  myTeamHeroes: [],
  teamPWS: {
    intelligence: 0,
    strength: 0,
    speed: 0,
    durability: 0,
    power: 0,
    combat: 0,
  },
  teamAverageWeight: 0,
  teamAverageHeight: 0,
}

const myTeamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_TEAM:
      console.log(state.teamAverageHeight, state.teamAverageWeight)

      console.log(parseInt(action.payload.appearance.height[1]))
      console.log(state.myTeamHeroes.length)
      return {
        ...state,
        myTeamHeroes: [...state.myTeamHeroes, action.payload],

        teamAverageWeight:
          (state.teamAverageWeight +
            parseInt(action.payload.appearance.weight[1])) /
          (state.myTeamHeroes.length + 1),

        teamAverageHeight:
          (state.teamAverageHeight +
            parseInt(action.payload.appearance.height[1])) /
          (state.myTeamHeroes.length + 1),
      }

    case actionTypes.REMOVE_FROM_TEAM:
      console.log(state.teamAverageHeight, state.teamAverageWeight)

      console.log(parseInt(action.payload.appearance.height[1]))
      console.log(state.myTeamHeroes.length)
      return {
        ...state,
        myTeamHeroes: state.myTeamHeroes.filter(
          (hero) => hero.id !== action.payload.id
        ),
      }

    default:
      return state
  }
}

export default myTeamReducer
