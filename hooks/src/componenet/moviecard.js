import React from 'react';
import {Card} from 'react-bootstrap'
import RateMovie from './rate';

export default function MovieCard({movie}) {
  return (
    <div className='cardContainer'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.description}
         <RateMovie rates={movie.rate} />
        </Card.Text>
        
       
      </Card.Body>
    </Card>
    </div>
  )
}
