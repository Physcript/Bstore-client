
import React, { useState, useContext } from 'react'

import { CartContext } from '../context/cart/context'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

interface IProduct {
  _id: string,
  name: string,
  image: string,
  category: string[],
  createdAt: string,
  updatedAt: string,
  description: string,
  quantity: number
}

export function ProductPage () {
  const { id } = useParams()
  const cartContext = useContext(CartContext)

  const [ product,setProduct ] = useState<IProduct>({
    _id: "",
    name: "",
    image: "",
    category: [""],
    createdAt: "",
    updatedAt:"",
    description: "",
    quantity: ""
  })
  const [ error,setError ] = useState(null)
  const [ pending,setPending ] = useState(true)
  const _body = { id } 

  let body = JSON.stringify(_body)
 
  if( id === '' || product._id !== ""  )
    {

    }
  else 
    {
      fetch('http://localhost:1337/api/b/books', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body
      })
      .then((val) => {
        if(val.status === 200) 
          {
            val.json().then((res) => {
              console.log(res)
              setProduct(res.book)
            })
          }
        else
          {
            val.json().then((res) => {
              console.log(res)
            })
          }
      })
      .catch((err) => {

      })
      .finally(() => {
        setPending(false)
      })
    }

  if(pending || error !== null)
    {
      return (
        <>
          <Container>
          Loading...
          </Container>
        </>
      )
    }

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const _book = {
      book: product,
      quantity: 1
    }
    cartContext.cartDispatch({ TYPE: 'ADD', PAYLOAD: { BOOK: _book } })
    
  }
  
  return (
    <>
      <Container>
        <div class="product-page d-flex">
          <div class="product-image flex-1" >
            <img src = { product.image } />
          </div>
          <div class="product-info flex-1">
            <label className="title">{ product.name }</label>
            <p className="description">{ product.description }</p>
            <p><b>Price: ${ product.price }</b></p>
            <button onClick = { addToCart }>Add to cart</button>
          </div>
        </div>
      </Container>
    </>
  )
}
