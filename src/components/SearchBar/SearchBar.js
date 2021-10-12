import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ResultsSearch from '../ResultsSearch/ResultsSearch'
import { fetchHeroes } from '../../store/SearchContext/searchActions'

const SearchBar = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  const onChange = (e) => {
    dispatch(fetchHeroes(e.target.value))
  }
  console.log(state.heroesRootReducer.heroes)
  return (
    <div className='container'>
      <div className='row justify-content-center my-5'>
        <div className='col-12 col-md-6 mb-5'>
          <form>
            <h3 className='fw-bolder l-spacing-2 mb-2 color-text-2 fs-6 d-flex justify-content-center'>
              SEARCH YOUR FAVORITES HEROES AND ADD THEM TO YOUR TEAM!
            </h3>
            <div class='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Search'
                onChange={onChange}
              />
              <button className='btn btn-default' type='submit'>
                <i className='bi bi-search ' />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <ResultsSearch heroes={state.heroesRootReducer.heroes} />
      </div>
    </div>
  )
}

export default SearchBar
