
import React from 'react'
import { IReducer } from './reducer'
import { ICart } from '../cart'
export interface ICartContext {
  cartContext: IUserCart, 
  cartDispatch: React.Dispatch<IReducer>
}

export interface IUserCart { 
  CART: ICart[],
  QUANTITY: number,
  TOTAL: number
}

export const DUserCart: IUserCart = {
  CART: [],
  QUANTITY: 0,
  TOTAL: 0
}

