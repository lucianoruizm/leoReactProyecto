import { ItemList } from './ItemList';
import './ItemListContainer.css'
import { Search } from './Search';
import CartWidget from './CartWidget'
import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';


// Se le importa el estilo desde ItemListContainer.css.
// Es importado para poder usarse en App.
// Tiene importado el componente ItemList al cual le pasa las props.
const ItemListContainer = () => {

  const {
    addProduct,
  } = useContext(CartContext);

  return (
    <div className='item-list'>
      <CartWidget addProduct={addProduct} /> 
      <Search />
      <h2>Listado de peliculas: </h2>
      <ItemList  />
    </div>
  )
}

export default ItemListContainer;
