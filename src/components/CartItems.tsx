
import React, { useContext }  from 'react'
import { CartContext } from '../context/cart/context'

import { ICart } from '../interface/cart'


export function CartItems(props: ICart){
  
  const cartContext = useContext(CartContext)

  const addHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const _book: ICart = {
      book: props.book.book,
      quantity: 1
    }
    cartContext.cartDispatch({ TYPE: 'ADD', PAYLOAD: { BOOK: _book }})
  }

  const subHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    const _book: ICart = {
      book: props.book.book,
      quantity: 1
    }
    cartContext.cartDispatch({ TYPE: 'SUB', PAYLOAD: { BOOK: _book } })
  }

  return (
    <>
      <div className=""
        style= {{
          display: 'flex',
          gap: '10px'
        }}
      >
        <img src={ props.book.book.image }
          style = {{
            height: '100%',
            width: '100px'
          }}
        />
        <div className=""
          style= {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '10px'
          }}
        >
          <label style={{ textTransform: 'uppercase' }}><b>{ props.book.book.name ?? 'Loading..'} </b></label>
          <div style={{
            
          }}>
          <button className="bacart"
            onClick={addHandler}
          >+</button>{ props.quantity }<button className="bmcart"
            onClick={subHandler}
          >-</button>
          </div>
          <label>Price: <b>${ props.book.book.price * props.quantity }</b></label>
        </div>
      </div>
    </>
  )
}
