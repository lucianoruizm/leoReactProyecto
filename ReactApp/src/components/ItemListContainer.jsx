import { ItemList } from './ItemList';
import './ItemListContainer.css'

// Se le importa el estilo desde ItemListContainer.css.
// Es importado para poder usarse en App.
// Tiene importado el componente ItemList al cual le pasa las props.
const ItemListContainer = () => {

  return (
    <div className='item-list'> 
      <h2>Listado de peliculas: </h2>
      <ItemList />
    </div>
  )
}

export default ItemListContainer;
