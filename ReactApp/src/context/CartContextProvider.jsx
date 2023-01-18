import { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [addProduct, setAddProduct] = useState(0)  

  return (
    <CartContext.Provider value={{addProduct, setAddProduct}}>
      <Outlet />
    </CartContext.Provider>
  )
}

export default CartContextProvider;