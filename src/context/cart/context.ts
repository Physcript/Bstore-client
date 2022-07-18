
import { createContext } from 'react'
import { ICartContext,DUserCart } from '../../interface/cart/context'


export const CartContext = createContext<ICartContext>({
  cartContext: DUserCart,
  cartDispatch: () =>{}
})

export const CartContextProvider = CartContext.Provider
export const CartContextConsumer = CartContext.Consumer


