import { React, useState } from 'react';
import './App.css';
import AddMovie from './componenet/add';
import Filter from './componenet/filter';
import MovieList from './componenet/movielist';
import Navbaar from './componenet/navbar';
import {movies} from './componenet/movies';

function App() {
  const [movieList, setMovielist] = useState(movies)
  const addHandler =(newMovie)=>{
     setMovielist(
      [...movieList, newMovie]
     )
  }

  return (
    <div className="App">
    <Navbaar />
    <Filter />
    <AddMovie  addHandler={addHandler}  />
    <MovieList movieList={movieList}/>

    </div>
  );
}

export default App;
