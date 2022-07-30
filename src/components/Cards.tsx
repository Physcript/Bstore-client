

import { useContext } from 'react'
import { IBook } from '../interface/book'
import { CartContext } from '../context/cart/context'

import { useNavigate } from 'react-router-dom'

import { ICart } from '../interface/cart'

export function Cards(book: IBook) {
    
  const cartContext = useContext(CartContext)
  const navigate = useNavigate() 
  const addHandler = (e: react.MouseEvent<HTMLButtonElement>) => {
    const _book:ICart = {
      book,
      quantity: 1
    }
  
  cartContext.cartDispatch({ TYPE: 'ADD', PAYLOAD: { BOOK: _book } })
    
  }
  
  const productHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate(`/product/${book._id}`)
  }

  return (
    <div className="Card"
    >
      <div className="Card-Image"
        onClick = { productHandler }
      >
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
