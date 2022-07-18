


import React,{ createContext } from 'react'
import { IAuthContext,DUserContext } from '../../interface/context/context'


export const AuthContext = createContext<IAuthContext>({
  userState: DUserContext,
  userDispatch: () => {}
})

export const AuthContextProvider = AuthContext.Provider
export const AuthContextConsumer = AuthContext.Consumer
