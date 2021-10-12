import * as actionTypes from './myteamConstans'

export const AddToTeam = (hero) => {
  hero.isinTeam = true

  return {
    type: actionTypes.ADD_TO_TEAM,
    payload: hero,
  }
}

export const RemoveFromTeam = (hero) => {
  hero.isinTeam = false

  return {
    type: actionTypes.REMOVE_FROM_TEAM,
    payload: hero,
  }
}
