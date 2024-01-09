export const MoviesGrid = ({ movies }) => {
  const recMovies = movies.Search
  return (
    <div className='movies-container'>
      {recMovies && recMovies.map(movie => (
        <div className='movie' key={movie.imdbID}>
          <img src={movie.Poster} alt='' />
          <p>{movie.Title}</p>

        </div>
      ))}
    </div>
  )
}
