
export const MoviesGrid = ({ movies }) => {
  const recMovies = movies.Search
  console.log(recMovies)
  return (
    <div className='movies-container'>
      {recMovies.map(movie => (
        <div className='movie' key={movie.imdbID}>
          <img src={movie.Poster} alt='' />
          <p>{movie.Title}</p>

        </div>
      ))}
    </div>
  )
}
