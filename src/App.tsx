import { useState,useReducer } from 'react'
import { Routes,Route } from 'react-router-dom'

import { AuthContextProvider } from './context/auth/context'


import { CartContextProvider } from './context/cart/context'
import { DUserCart } from './interface/cart/context'
import { DUserContext } from './interface/context/context'
import { reducer as cartReducer } from './context/cart/reducer'

import { route } from './route'
import { reducer } from './context/auth/reducer'

import { Navbar } from './components/Navbar'

function App() {
  const [ userState,userDispatch ] = useReducer(reducer,DUserContext) 
  const [ cartContext,cartDispatch ] = useReducer(cartReducer, DUserCart)
  const CartContextValue = { cartContext,cartDispatch }
  const AuthContextValue = { userState,userDispatch }
  return (
    <AuthContextProvider value = { AuthContextValue }>
      <CartContextProvider value = { CartContextValue }> 
      <Navbar />
      <Routes>
        {
          route.map((r,i) => {
            return (
              <Route 
                key = { i }
                element = { <r.element /> }
                path = { r.path }
                auth = { r.auth }
              />
            )
          })
        }
      </Routes>
      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default App
