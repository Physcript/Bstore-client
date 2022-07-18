
import { ICart } from '../cart'

export interface IReducer {
  TYPE: 'ADD' | 'SUB' | 'REMOVE',
  PAYLOAD: {
    BOOK?: ICart ,
  }
}
