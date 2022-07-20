import React, { useContext } from 'react'
import { CartContext } from '../context/cart/context'

import { Offcanvas,Stack } from 'react-bootstrap'

import { isOpen } from '../interface/cart'

import { CartItems } from './CartItems'

export function Cart ( { isOpen,closeCart } ) {

  const cartContext = useContext(CartContext)

  return (
    <Offcanvas show={ isOpen } onHide={ closeCart }  placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          { 
            cartContext.cartContext.CART.map((c,i) => {
              return (
                <CartItems key={i} book={c.book} quantity={c.quantity}/>
              )
          })
          }
          <label><b>Total: ${ cartContext.cartContext.TOTAL } </b></label>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
