
import { useContext } from 'react'
import { IBook } from '../interface/book'
import { CartContext } from '../context/cart/context'

import { ICart } from '../interface/cart'

export function Cards(book: IBook) {
    
  const cartContext = useContext(CartContext)
  
  const addHandler = (e: react.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const _book:ICart = {
      book,
      quantity: 1
    }
  
  cartContext.cartDispatch({ TYPE: 'ADD', PAYLOAD: { BOOK: _book } })
    
  } 
  return (
    <div className="Card tred">
      <div className="Card-Image">
        <img src={ book.image } />
      </div>
      <div className="Card-Info">
        <label>{ book.name }</label>
        <label>$ { book.price }</label>
        <button
          onClick = { addHandler } 
        >Add to cart</button>
      </div>
    </div>
  )
}
