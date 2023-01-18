import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../fetchAPI";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "./Spinner";
import './ItemDetailContainer.css';
import { CartContext } from "../context/CartContextProvider";

const ItemDetailContainer = () => {

  const {
    addProduct,
    setAddProduct,
  } = useContext(CartContext);

  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovies("/movie/" + itemId).then(data => {
      setMovie(data);
      setIsLoading(false);
    })
  }, [itemId])

  if (isLoading) {
    return <Spinner />
  }

  return ( 
    <div className="detailsContainer">
      <ItemDetail movie={movie} addProduct={addProduct} setAddProduct={setAddProduct} />
    </div>
    
  )
}

export default ItemDetailContainer