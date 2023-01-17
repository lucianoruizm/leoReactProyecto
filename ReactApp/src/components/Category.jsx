import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesGenre } from "../fetchAPI";
import { Item } from "./Item";


const Category = () => {

  const [moviesGenre, setMoviesGenre] = useState([]);
  
  const { categoryId } = useParams();
  console.log(categoryId);

  useEffect(() => {
      getMoviesGenre(categoryId).then(data => {
        setMoviesGenre(data.results);
        });
  }, [categoryId]);

  return (
    <div className="moviesGrid">
        {moviesGenre.map((movie)=>{
            let {id, title, poster_path} = movie;
            return(
                <Item key={id} id={id} title={title} poster_path={poster_path} />
            )
            })}
    </div>
  )
}

export default Category