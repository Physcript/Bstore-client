
import { Navbar as NavbarBs,Container,Nav,Button } from 'react-bootstrap' 
import { NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.ts'

import React , { useContext,useState, useEffect } from 'react'
import { CartContext } from '../context/cart/context'
import { AuthContext } from '../context/auth/context'

import { Cart } from './Cart'

export function Navbar () {
  
  let authContext = useContext(AuthContext)
  let cartContext = useContext(CartContext)

  let [ isOpen,setIsOpen ] = useState<boolean>(false)
  let [ token, setToken ]  = useState<string>(localStorage.getItem('user') ?? '')

  const cartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsOpen(true)
  }
  
  const closeCart = () => {
    console.log('asd')
    setIsOpen(false)
  }
  
  if(localStorage.getItem('user') !== '' && authContext.userState.STATUS === false ) 
    {
      fetch('http://localhost:1337/api/u/auth', {
      method: 'POST',
      headers: { "Content-type": "application.json",
        "token": localStorage.getItem('user') 
      }
    }).then((res)=> {
      if(res.status === 200)
        {
          res.json().then((response) => {
            const USER = response.message.user
            const TOKEN = USER!.token
            authContext.userDispatch({ TYPE: 'LOGIN', PAYLOAD: { USER,TOKEN } })
          })
        }
      else 
        {
          res.json().then((response) => {
            console.log(response.error)
          })
        }
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
    })

    }

  const logoutHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const body = JSON.stringify({ uid: authContext.userState.USER.uid })
    console.log(body)
    fetch('http://localhost:1337/api/u/logout', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body
    })
    .then((val) => {
      if(val.status === 200)
      {
        val.json().then((res) => {
          window.location.reload()
        })
      }
      else
        {
        val.json().then((res) => {
        })
        }
    })
    .catch((err) => {

    })
    .finally(() => {

    })
  }


  return (
    <>
      <NavbarBs className = "bg-white shadow-sm mb-3">
        <Container>
          <Nav className = "me-auto">
            <Nav.Link as = { NavLink } to = "/">Home</Nav.Link>
            <Nav.Link as = { NavLink } to = "/">Store</Nav.Link>
            <Nav.Link as = { NavLink } to = "/">About</Nav.Link>
            { authContext.userState.STATUS ? (
              <>
              <Nav.Link as = { NavLink } to ="/profile">{ authContext.userState.USER.lastName }</Nav.Link>
              <Nav.Link as = { NavLink } to ="/" onClick = { logoutHandler }>Logout</Nav.Link>
              </>
            ): (
              <Nav.Link as = { NavLink } to ="/login">Login</Nav.Link>
            )}
          </Nav>
          <Button 
            style = {{ width: '3rem',height: '3rem',position: 'relative' }}
            variant = "outline-primary"
            className = "rounded-circle"
            onClick = { cartHandler }
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            <div
              className = "rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style = {{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%,25%)"
              }}
            >
            { cartContext.cartContext.QUANTITY ?? 0 }
            </div>
          </Button>
        </Container>
      </NavbarBs>
      <Cart isOpen = { isOpen } closeCart = { closeCart } />
    </>
  )
}
