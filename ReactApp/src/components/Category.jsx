import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContextProvider";
import { getMoviesGenre } from "../fetchAPI";
import CartWidget from "./CartWidget";
import { Item } from "./Item";


const Category = () => {

  const {
    addProduct,
    setAddProduct,
  } = useContext(CartContext);

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
      <CartWidget addProduct={addProduct} /> 
        {moviesGenre.map((movie)=>{
            let {id, title, poster_path} = movie;
            return(
                <Item key={id} id={id} title={title} poster_path={poster_path} addProduct={addProduct} setAddProduct={setAddProduct} />
            )
            })}
    </div>
  )
}

export default Category