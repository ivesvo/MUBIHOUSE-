import React from 'react'
import{ Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
// import Youtube from './components/Modal'
import Modal from 'react-bootstrap/Modal'

export default function MovieCard(props) {
    let movie = props.movie;
    let genre = props.genreFromMovieList;
    let modal = props.modalOpenFromList;
    // let openModal= props.openModal
    return (
        <Card className="moviecard" style={{ width: '25rem'}}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
                <Card.Body>
                 
                  <Card.Title> {props.movie.original_title}</Card.Title>
                  <Card.Text>
                    {/* {props.movie.overview} */}
                  </Card.Text>
                 
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
                {/* <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
              </Card>
    )
}
