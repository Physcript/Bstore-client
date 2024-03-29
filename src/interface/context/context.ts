
import React from 'react'
import { IUser,DUser } from '../user'
import { IReducer } from './reduer'

export interface IAuthContext {
  userState: IUserContext,
  userDispatch: React.Dispatch<IReducer> 
}

export interface IUserContext {
  USER: IUser,
  TOKEN: string,
  STATUS: boolean
}

export const DUserContext:IUserContext = {
  USER: DUser,
  TOKEN: '',
  STATUS: false
}
