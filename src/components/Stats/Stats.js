import React from 'react'
import { useSelector } from 'react-redux'
import './stats.css'

const Stats = () => {
  const state = useSelector((state) => state)
  const teamPWS = state.myTeamRootReducer.teamPWS
  const teamAverageWeight = state.myTeamRootReducer.teamAverageWeight
  const teamAverageHeight = state.myTeamRootReducer.teamAverageHeight

  return (
    <div className='container  '>
      <div className='row d-flex justify-content-center '>
        <div className='col-12 col-md-8 d-flex justify-content-center  mt-5 '>
          <h5 className='fw-bolder l-spacing-2  mt-3 mb-0 color-text-2 fs-6'>
            MY TEAM POWER STATS
          </h5>
        </div>

        <div className='container p-3 pb-0 my-2 mb-3'>
          <div className='row  d-flex justify-content-center align-items-center'>
            <div className='col-12  justify-content-around fs-6 statsrow'>
              <div className='col-2 d-flex flex-column align-items-center stat-1'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'>Intelligence</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.intelligence}</p>
                </div>
              </div>

              <div className='col-2 d-flex flex-column align-items-center stat-2'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'>Strength</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.strength}</p>
                </div>
              </div>

              <div className='col-2 d-flex flex-column align-items-center stat-3'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'>Speed</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.speed}</p>
                </div>
              </div>

              <div className='col-2 d-flex flex-column align-items-center stat-4'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'>Durability</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.durability}</p>
                </div>
              </div>

              <div className='col-2 d-flex flex-column align-items-center stat-5'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'> Power</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.power}</p>
                </div>
              </div>

              <div className='col-2 d-flex flex-column align-items-center stat-6'>
                <div className='bck-stats bkc-1'>
                  <h6 className='l-spacing-1'>Combat</h6>
                  <p className='fw-bold fs-4 mb-0'>{teamPWS.combat}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-6 d-flex justify-content-around mt-2  text-white-50'>
            <p className='l-spacing-1 fst-italic averages color-text-3'>
              *Average height: {teamAverageHeight} cm
            </p>
            <p className='l-spacing-1 fst-italic averages color-text-3'>
              *Average weight: {teamAverageWeight} kg
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
