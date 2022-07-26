
import { IUserContext } from '../../interface/context/context'
import { IReducer } from '../../interface/context/context'
import { IUser,DUser } from '../../interface/user'

export const reducer = (state: IUserContext,action: IReducer): IUserContext => {
  const USER = action.PAYLOAD.USER ?? DUser
  const TOKEN = action.PAYLOAD.TOKEN ?? ''

  switch(action.TYPE) {
    case 'LOGIN':
      localStorage.setItem('user', TOKEN)
      return {
        USER,
        TOKEN,
        STATUS: true
    }
    default:
      return state
  }
  
}
