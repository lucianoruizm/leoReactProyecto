import { BsCartFill } from 'react-icons/bs';
import './CartWidget.css';

const CartWidget = ({addProduct}) => {

  console.log(addProduct)

  return (
    <div className='cart-icon-container'>
        <BsCartFill className='cart-icon' />
        <div className='number-items'>{addProduct}</div>
    </div>
  )
}

export default CartWidget