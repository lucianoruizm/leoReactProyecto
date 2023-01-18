import { Link } from "react-router-dom"
import "./Item.css"

// Tiene importado Link de React-Router-Dom, de esta forma se puede utilizar Link
// para que el usuario pueda acceder a la ruta espicifica al clickear en el item,
// en este caso lo envia a detalles del item.

export const Item = ({ id, title, poster_path, addProduct, setAddProduct }) => {

  const handleClick = () => {
    setAddProduct(addProduct + 1)
  }

  const imageUrl = "http://image.tmdb.org/t/p/w300" + poster_path;
  return (
    <div key={id} className='movieCard' >
      <Link to={"/item/" + id}>
        <img src={imageUrl} alt={title} className='movieImage' />
      </Link>
      <button className="addToCartBtn" onClick={handleClick} >Agregar a Cart</button>
    </div>
  )
}