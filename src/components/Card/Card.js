import { useDispatch, useSelector } from 'react-redux'
import {
  AddToTeam,
  RemoveFromTeam,
} from '../../store/MyteamContext/myteamActions'

import './card.css'

const Card = (props) => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const team = useSelector((state) => state.myTeamRootReducer.myTeamHeroes)
  let teamAverageWeight = useSelector(
    (state) => state.myTeamRootReducer.teamAverageWeight
  )
  let teamAverageHeight = useSelector(
    (state) => state.myTeamRootReducer.teamAverageHeight
  )
  const teamPWS = useSelector((state) => state.myTeamRootReducer.teamPWS)

  /////////////////////   ADD HEROES  /////////////////////////////

  const AddHerotoTeam = (newHero) => {
    dispatch(AddToTeam(newHero))
  }

  const sumStats = (hero) => {
    for (const nameTeamPWS in teamPWS) {
      for (const nameHeroPWS in [hero][0].powerstats) {
        if (nameTeamPWS === nameHeroPWS) {
          if (parseInt([hero][0].powerstats[nameHeroPWS])) {
            teamPWS[nameTeamPWS] =
              teamPWS[nameTeamPWS] + parseInt([hero][0].powerstats[nameHeroPWS])
          }
        }
      }
    }
  }

  const heroCan = (newHero) => {
    const team = state.myTeamRootReducer.myTeamHeroes
    const idemAlignment = team.map(
      (heros) => heros.biography.alignment === newHero.biography.alignment
    )
    const areTrue = idemAlignment.filter((value) => value === true)

    if (newHero.biography.alignment !== 'neutral') {
      if (areTrue.length <= 2) {
        AddHerotoTeam(newHero)
        sumStats(newHero)
      } else {
        alert('You can only add up to 3 good or 3 bad heroes.')
        return team
      }
    } else {
      alert(
        'The hero you are trying to add is Neutral. Add only good or bad heroes.'
      )
    }
  }
  const handleClickAdd = (newHero) => {
    heroCan(newHero)
  }

  /////////////////////////  REMOVE HEROES  /////////////////////////////

  const removeHerofromTeam = (hero) => {
    dispatch(RemoveFromTeam(hero))
    resStats(hero)
  }

  const resStats = (hero) => {
    for (const nameTeamPWS in teamPWS) {
      for (const nameHeroPWS in [hero][0].powerstats) {
        if (nameTeamPWS === nameHeroPWS) {
          if (parseInt([hero][0].powerstats[nameHeroPWS])) {
            teamPWS[nameTeamPWS] =
              teamPWS[nameTeamPWS] - parseInt([hero][0].powerstats[nameHeroPWS])
          }
        }
      }
    }
  }

  const handleClickRemove = (hero) => {
    removeHerofromTeam(hero)
  }

  return (
    <div className='card mb-5' style={{ width: '19rem' }}>
      <div className='img-container'>
        {props.hero.image ? (
          <img
            src={props.hero.image.url}
            className='card-img-top'
            alt={`${props.hero.name} Poster`}
          />
        ) : (
          <div>
            <h1>poner imagen en blanco</h1>
          </div>
        )}
      </div>
      <div className='card-body cardBody'>
        <h5 className='card-title fw-bold l-spacing-1'> {props.hero.name} </h5>
        <p className=' fst-italic l-spacing-1'>
          Intelligence: <strong>{props.hero.powerstats.intelligence}</strong>{' '}
          Strength: <strong>{props.hero.powerstats.strength}</strong> Speed:{' '}
          <strong>{props.hero.powerstats.speed}</strong> Durability:{' '}
          <strong>{props.hero.powerstats.durability}</strong> Power:{' '}
          <strong>{props.hero.powerstats.power}</strong> Combat:{' '}
          <strong>{props.hero.powerstats.combat}</strong>
        </p>
      </div>
      <div className='container card-details fst-italic'>
        <p className='mb-1 l-spacing-1  mb-1'>Name: {props.hero.name} </p>

        <div className='aliases mb-1'>
          <p className='mb-1 l-spacing-1 mb-1'>Aliases: </p>
          {props.hero.biography.aliases.map((alias) => (
            <small className='mb-1 l-spacing-1 alias'> {alias} </small>
          ))}
        </div>

        <p className='mb-1 l-spacing-1 mb-1'>
          Weight: {props.hero.appearance.weight[1]}
        </p>
        <p className='mb-1 l-spacing-1 mb-1'>
          Height: {props.hero.appearance.height[1]}
        </p>
        <p className='mb-1 l-spacing-1 mb-1'>
          Eye Color: {props.hero.appearance['eye-color']}
        </p>
        <p className='mb-1 l-spacing-1 mb-1'>
          Hair color: {props.hero.appearance['hair-color']}
        </p>
        <p className='mb-1 l-spacing-1'>Work base: {props.hero.work.base}</p>
      </div>
      <div className='container card-btns'>
        {props.hero.isinTeam ? (
          <button
            type='button'
            className='btn btn-block w-100 remove-button'
            onClick={() => handleClickRemove(props.hero)}
          >
            Remove from my Team
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-block w-100 add-button'
            onClick={() => handleClickAdd(props.hero)}
          >
            Add to my Team
          </button>
        )}
      </div>
    </div>
  )
}
export default Card
