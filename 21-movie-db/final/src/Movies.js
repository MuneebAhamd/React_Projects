// import React from 'react'
// import { useGlobalContext } from './context'
// import { Link } from 'react-router-dom'
// const url =
//   'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

// const Movies = () => {
//   const { movies, isLoading, query } = useGlobalContext()

//   if (isLoading) {
//     return <div className='loading'></div>
//   }

//   return (
//     { query && movies.length > 0 ? (
//       <section className='movies'>
//         {movies.map((movie) => {
//           const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

//           return (
//             <Link to={`/movies/${id}`} key={id} className='movie'>
//               <article>
//                 <img src={poster === 'N/A' ? url : poster} alt={title} />
//                 <div className='movie-info'>
//                   <h4 className='title'>{title}</h4>
//                   <p>{year}</p>
//                 </div>
//               </article>
//             </Link>
//           );
//         })}
//       </section>
//     ) : (
//       <div className='loading'>Loading...</div>
//     )}

//     )
//   }
// }

// export default Movies






import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading, query } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'>Loading...</div>
  }

  return (
    <section className='movies'>
      {query && movies.length > 0 ? (
        movies.map((movie) => {
          const { imdbID: id, Poster: poster, Title: title, Year: year } = movie;

          return (
            <Link to={`/movies/${id}`} key={id} className='movie'>
              <article>
                <img src={poster === 'N/A' ? url : poster} alt={title} />
                <div className='movie-info'>
                  <h4 className='title'>{title}</h4>
                  <p>{year}</p>
                </div>
              </article>
            </Link>
          );
        })
      ) : (
        <div className='no-movies'>No movies found</div>
      )}
    </section>
  )
}

export default Movies
