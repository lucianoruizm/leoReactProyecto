import { BsCartFill } from 'react-icons/bs';

// CardWidget contiene el icono del cart importado desde el paquete instalado React-icons y también contiene 
// un número fijado para simular la función de add to cart.
// Es importado para poder usarse en el componente de NavBar.
const CartWidget = () => {

  return (
    <div className='cart-icon-container'>
        <BsCartFill className='cart-icon' />
        <div className='number-items'>0</div>
    </div>
  )
}

export default CartWidget