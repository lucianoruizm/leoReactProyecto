import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovies } from "../fetchAPI";
import { Item } from "./Item";
import './ItemList.css';
import { Spinner } from "./Spinner";

export const ItemList = () => {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const [query] = useSearchParams();
  const search = query.get("search");

  useEffect(() => {
      const searchUrl = search 
      ? "/search/movie?query=" + search 
      : "/discover/movie";
      setIsLoading(true);
      getMovies(searchUrl).then(data => {
          setTimeout(() => setMovies(data.results), 2000);
          setIsLoading(false);
        });
  }, [search]);

  if (isLoading) {
      return <Spinner />;
  }

  return (
    <div className="moviesGrid">
        {movies.map((movie)=>{ 
        let {id, title, poster_path} = movie;
        return(
            <Item key={id} id={id} title={title} poster_path={poster_path} />
        )
        })}
    </div>
  )
}