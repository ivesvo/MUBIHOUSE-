import React from 'react'
import{ Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

export default function MovieCard(props) {
    let movie = props.movie;
    let genre = props.genreFromMovieList
    return (
        <Card className="moviecard" style={{ width: '20rem'}}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`} />
                <Card.Body>
                  <Card.Title> {props.movie.original_title}</Card.Title>
                  <Card.Text>
                    {/* {props.movie.overview} */}
                  </Card.Text>
                 
                </Card.Body>
                <ListGroup className="list-group-flush">
                 <ListGroupItem> <Badge className="moviebadge" variant="dark">{movie.genre_ids.map(id => {return(
                          genre.find(genre=> id === genre.id).name
                 )})}</Badge>
                 </ListGroupItem>
                  <ListGroupItem>{props.movie.release_date}</ListGroupItem>
                  <ListGroupItem>{props.movie.vote_average}</ListGroupItem>
                  
                </ListGroup>
                {/* <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
              </Card>
    )
}
