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
          <input className='inputSearch' value={inputValue} onChange={getInputValue} />
          {movies && movies.Search && <MoviesGrid movies={movies} />}
        </div>
      </form>
    </>
  )
}
