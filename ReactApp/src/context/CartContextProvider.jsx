import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';


export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [count, setCount] = useState(0)  

  return (
    <CartContext.Provider value={{count, setCount}}>
      <Outlet />
    </CartContext.Provider>
  )
}

export default CartContextProvider;