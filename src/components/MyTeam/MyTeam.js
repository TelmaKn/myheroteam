import { useSelector } from 'react-redux'

import Card from '../Card/Card'

const MyTeam = () => {
  const state = useSelector((state) => state)
  const team = state.myTeamRootReducer.myTeamHeroes

  return (
    <div className='container mt-5'>
      {team.length >= 1 ? (
        <div className='row my-4 '>
          {team.map((hero) => (
            <div className='col-12 col-lg-4 d-flex justify-content-center'>
              <Card hero={hero} />
            </div>
          ))}
        </div>
      ) : (
        <div className='d-flex justify-content-center '>
          <h1 className='fs-2 mt-3 mb-5'>Add heroes to your team!</h1>
        </div>
      )}
    </div>
  )
}

export default MyTeam
