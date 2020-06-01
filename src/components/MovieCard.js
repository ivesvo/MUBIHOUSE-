import React from 'react'
import{ Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
// import Youtube from './components/Modal'
import Modal from 'react-bootstrap/Modal'
// import { MDBView, MDBMask } from "mdbreact";

export default function MovieCard(props) {
    let movie = props.movie;
    let genre = props.genreFromMovieList;
    let modal = props.modalOpenFromList;

    return (
        <Card className="moviecard" style={{ width: '25rem'}}>
            <div className="image-container">
            <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
                <Card.ImgOverlay>
                  <Card.Text className="card-content">
                    {props.movie.overview}
                  </Card.Text>
                </Card.ImgOverlay>

            </div>
                {/* <Card.Img className="card-image" variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
                <Card.ImgOverlay>
                  <Card.Text className="card-content">
                    {props.movie.overview}
                  </Card.Text>
                </Card.ImgOverlay> */}
                    <div>
                <Card.Body>
                  
                  <Card.Title><h4>{props.movie.original_title}</h4> </Card.Title>
              
                  
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem> {movie.genre_ids.map(id => {return(
                          <span className="moviebadge badge badge-dark">{genre.find(genre=> id === genre.id).name}</span>
                  )})}
                  </ListGroupItem>
                  <ListGroupItem>◉  {props.movie.release_date}</ListGroupItem>
                  <ListGroupItem>★  {props.movie.vote_average}</ListGroupItem>
                  <ListGroupItem> <Card.Link onClick={()=>modal(movie.id)}>Trailer</Card.Link></ListGroupItem>
                </ListGroup>
                 
                
                 
               
     

                  </div>
          </Card>
                
    )
}
