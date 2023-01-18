import CartWidget from './CartWidget';
import './ItemDetail.css';

export const ItemDetail = ({ movie, addProduct, setAddProduct }) => {
  const imageUrl = "http://image.tmdb.org/t/p/w500" + movie.poster_path;

  const handleClick = () => {
    setAddProduct(addProduct + 1)
  }
    return (
      <>
          <CartWidget addProduct={addProduct} />
          <img src={imageUrl} alt={movie.title} className="col movieImage"/>
          <div className="col movieDetails">
            <h3 className="titleDetail">{movie.title}</h3>
            <p><strong>Descripción: </strong>{movie.overview}</p>
            <p><strong>Género: </strong>: {movie.genres?.map(genre => genre.name).join(", ")}</p>
            <button className="btnDetail" onClick={handleClick} >Agregar a Cart</button>
          </div>
      </>
    )
}