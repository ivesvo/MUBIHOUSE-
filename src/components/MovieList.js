import React from "react";
import MovieCard from "./MovieCard";
import {Row, Col, Container, Navbar,Button,Form, FormControl} from 'react-bootstrap';

export default function MovieList(props) {
  if (props.MovieList === null) {
    return <div>loading</div>;
  }
  return (
      <div className="movielistrow">
           {props.movieList.map((item) => {
                return <MovieCard movie={item} genreFromMovieList={props.genreFromApp} />;
            })}>

      </div>
    
               
            
   
  );
}