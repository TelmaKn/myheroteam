import React from 'react'

import './resultsearch.css'
import Card from '../Card/Card'

const ResultsSearch = (props) => {
  return (
    <div className='container my-5 resultsearch'>
      {props.heroes ? (
        <div className='row my-4 '>
          {props.heroes.map((hero) => (
            <div className='col-12 col-lg-4 d-flex justify-content-center'>
              <Card hero={hero} />
            </div>
          ))}
        </div>
      ) : (
        <div className='d-flex justify-content-center mt-0'>
          <h1 className='fs-2'>No matches found!</h1>
        </div>
      )}
    </div>
  )
}

export default ResultsSearch
