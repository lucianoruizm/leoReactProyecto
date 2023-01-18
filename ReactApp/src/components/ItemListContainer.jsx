import { ItemList } from './ItemList';
import './ItemListContainer.css'
import { Search } from './Search';
import CartWidget from './CartWidget'
import { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';

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
