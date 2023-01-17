import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../fetchAPI";
import { ItemDetail } from "./ItemDetail";
import { Spinner } from "./Spinner";
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {

  const { itemId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  console.log(typeof(itemId));

  useEffect(() => {
    setIsLoading(true);
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
      <ItemDetail movie={movie} />
    </div>
    
  )
}

export default ItemDetailContainer