import React from 'react'
import MovieCard from './moviecard'

export default function MovieList({movieList}) {
  return (
    <div>
      <div className='movieList'>
        {movieList.map((el,key) => <MovieCard key={el.id} movie={el} />
  )}
      </div>
    </div>
  )
}
