import React, {useEffect,useState} from 'react';
import './App.css';
import MovieList from './components/MovieList'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Button, Col, Form, FormControl,Carousel, Card, Accordion, eventKey} from 'react-bootstrap';
import'./fonts/Korolev-Medium.otf'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';



import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css"; //for css
// import ReactBootstrapSlider from 'react-bootstrap-slider';



import {Navbar, Nav, Collapse, NavDropdown} from 'react-bootstrap';

// const apiKey = process.env.REACT_APP
const apiKey = process.env.REACT_APP_APIKEY;

function App() {
  
  let [movieList, setMovieList] = useState(null);
  let [movieGenre, setMovieGenre] = useState(null)
  let [pageNumber, setPageNumber] = useState(1)
  let [total,setTotalPage]=useState(null)
  let [currentGenres,setCurrentGenres]=useState(null)
  let [originalList, setOriginalList] = useState(null)
  // let [currentKeyword, setCurrentKeyword] = useState(null)

  
  const getNowShowingMovie = async(pageNum,genres) =>{
    // setCurrentKeyword ()
    setCurrentGenres(genres)
    let url=""
    
    if(currentGenres!==null)
    {
    
      let genresID=movieGenre.find(item => item.name==genres).id
      url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}&with_genres=${genresID}`
      console.log(url,"day la url khi chuyen category")
    }
    else{
      url =`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`
    }
  
    
    let data = await fetch (url)
    let result = await data.json();
    console.log(url,"URLLLLLLLLLLLLLLL")
    setMovieList(result.results)
    setOriginalList(result.results)
    console.log(result,"dataaaaaaaaaaaaaa")
    setTotalPage(result.total_pages)

  };
console.log(total)

  const getMovieGenre = async() =>{
    let url =`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
    console.log("genre", url)
    let data = await fetch(url)
    let result = await data.json();
    getNowShowingMovie(1,null)
    setMovieGenre(result.genres)
    console.log("genre", result)

  
  }
  

  let keyword = ''
  const searchByKeyword = (e) =>{
    e.preventDefault()
    console.log("hihifsdfdsgdff")
    searchTheKeyword(keyword);
  }
  const searchTheKeyword = (keyword) =>{
    console.log("gsearch search search", keyword)
    if (keyword === ''){
      setMovieList(originalList)
      return;
    }
    let filteredList = movieList.filter(movie => movie.title.toLowerCase().includes(keyword.toLowerCase()))
    setMovieList(filteredList)

  }



  useEffect(() => {
    // getNowShowingMovie();
    getMovieGenre();
    // getMovieGenre();
  }, []);

  if(movieList == null || movieGenre == null ){
      return <div>Loadin</div>
    }
  let changeCurrentPage=(pageNum)=>{
        getNowShowingMovie(pageNum,currentGenres)
        setPageNumber(pageNum)
    }

    function splitUp(arr, n) {
      if(arr.length===0 || arr.length%2 !== 0)
      {
        return;
      }
      var rest = arr.length % n, // how much to divide
          restUsed = rest, // to keep track of the division over the elements
          partLength = Math.floor(arr.length / n),
          result = [];
  
      for(var i = 0; i < arr.length; i += partLength) {
          var end = partLength + i,
              add = false;
  
          if(rest !== 0 && restUsed) { // should add one element for the division
              end++;
              restUsed--; // we've used one division element now
              add = true;
          }
  
          result.push(arr.slice(i, end)); // part of the array
  
          if(add) {
              i++; // also increment i in the case we added an extra element for division
          }
      }
      
    
  
      return result;
  }
  
  let sliderArray2=[]
  let sliderArray1=[]

  if(movieList.length!==0)
  {
    let newArray=splitUp(movieList,2)
    sliderArray1=splitUp(newArray[0],2)
    sliderArray2=splitUp(newArray[1],2)
  }
   
  return (
    <div className="App">
      
      <Navbar className="nav2 ticker-wrap" bg="light" expand="sm" fixed="top">
        <div className="ticker">
        Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ Now showing ✴  기생충 ✴  Now showing ✴  기생충✴  Now showing ✴  기생충 ✴ 
        </div>
      </Navbar>
      <Navbar className="nav" bg="light" expand="sm" fixed="top">
        
        

              <div className="logo" href="#home">MUBIHAUS</div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
        
  
                  <NavDropdown className="genre" title="Genre" id="basic-nav-dropdown">
                    {movieGenre.map(item =>{
                      return item.name
                    }).map( genresItem =>{
                        return(
                        <div className="overlay-content">
                          
                        
                        <NavDropdown.Item href="#action/3.2"onClick={()=>getNowShowingMovie(1,genresItem)}>{genresItem}</NavDropdown.Item>
                        </div>
                        ) 
                    })

                    }
                      

                    
                  </NavDropdown>
          </Nav>
          <Form className="form" inline onSubmit={(e)=>searchByKeyword(e)}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>keyword=e.target.value}/>
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <Button variant="dark" type="submit">Search</Button>
        </Navbar.Collapse>
        
      </Navbar>
  
   

      <div className="container-fluid movie">
          <Carousel
          animationSpeed={1500}
          autoPlay={3000}
          stopAutoPlayOnHover>
            {
              sliderArray1.map(arr=>{
                return(
            <Carousel.Item>
            <MovieList movieList = {arr} genreFromApp = {movieGenre}/>
            </Carousel.Item>
                )
              })
            }

              
            </Carousel>

            <Carousel>
            {
              sliderArray2.map(arr=>{
                return(
            <Carousel.Item>
            <MovieList movieList = {arr} genreFromApp = {movieGenre}/>
            </Carousel.Item>
                )
              })
            }

              
            </Carousel>
        </div>
      
      <Navbar className="nav3" bg="light" expand="sm" fixed="bottom">
      <Pagination className="page"
            currentPage={pageNumber}
            totalPages={total}
            changeCurrentPage={changeCurrentPage}
            theme="fixed-bottom-border"
          /> 

      </Navbar>

      
     
       
  </div>
  );
}

export default App;
