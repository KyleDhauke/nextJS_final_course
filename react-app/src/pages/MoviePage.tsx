import { useState, useEffect } from "react"
import SearchIcon from '../styles/search.svg'
import MovieCard from "../components/MovieCard"

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}


// Please register for a free key at https://omdbapi.com/
// and replace 'import.meta.env.VITE_OMDb_Key' with the 
// provided key.
const OMDB_KEY = import.meta.env.VITE_OMDb_Key
const API_URL = `http://www.omdbapi.com?apikey=${OMDB_KEY}`


export const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title: string) => {
    const response = await (fetch(`${API_URL}&s=${title}`))
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('');
  }, [])

  if (!OMDB_KEY) {
    return <p>Please register for a free Open Movie Database API key at https://omdbapi.com/</p>
  }
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter" ) {
              e.preventDefault();
              e.stopPropagation();
              searchMovies(searchTerm); 
            }
          } }
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => { searchMovies(searchTerm)}}
        />
      </div>

      {
        (movies?.length > 0)
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard Movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }

    </div>
  )
}