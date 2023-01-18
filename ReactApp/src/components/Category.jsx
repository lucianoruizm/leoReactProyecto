import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { getMoviesGenre } from "../fetchAPI";
import CartWidget from "./CartWidget";
import { Item } from "./Item";
import './Category.css';
import { Spinner } from "./Spinner";


const Category = () => {

  const {
    addProduct,
    setAddProduct,
  } = useContext(CartContext);

  const [isLoading, setIsLoading] = useState(true);
  const [moviesGenre, setMoviesGenre] = useState([]);
  
  const { categoryId } = useParams();

  useEffect(() => {
      getMoviesGenre(categoryId).then(data => {
        setMoviesGenre(data.results);
        setIsLoading(false);
        });
  }, [categoryId]);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='item-list'>
      <CartWidget addProduct={addProduct} />
      <div className="moviesGrid">
          {moviesGenre.map((movie)=>{
              let {id, title, poster_path} = movie;
              return(
                  <Item key={id} id={id} title={title} poster_path={poster_path} addProduct={addProduct} setAddProduct={setAddProduct} />
              )
              })}
      </div>
    </div>
  )
}

export default Category