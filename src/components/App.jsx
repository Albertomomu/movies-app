import { useState } from 'react'

import { MoviesGrid } from './moviesGrid'

export const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [movies, setMovies] = useState(null)
  const getInputValue = (event) => {
    setInputValue(event.target.value)
  }
  const searchMovies = async (event) => {
    event.preventDefault()
    const mov = await fetch(`https://www.omdbapi.com/?apikey=9c088b33&s=${inputValue}`)
    const result = await mov.json()
    setMovies(result)
  }
  return (
    <>
      <h1 className='searcher'>Film searcher</h1>
      <form onSubmit={searchMovies}>
        <div className='app'>
          <div className='form'>
            <input className='inputSearch' value={inputValue} onChange={getInputValue} />
            <button className='buttonSearch'>Search</button>
          </div>
          {inputValue.length < 3
            ? <p>Write at least 3 characters</p>
            : (movies && movies.Search && movies.Search.length > 0
              ? <MoviesGrid movies={movies} />
              : <p>No films found</p>)}
        </div>
      </form>
    </>
  )
}
