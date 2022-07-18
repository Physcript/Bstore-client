

export interface IReducer {
  TYPE: 'LOGIN' | 'LOGOUT' | 'AUTH',
  PAYLOAD: {
    user?: IUser,
    token?: string
  }
}
