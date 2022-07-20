import { IBook } from './book'

export interface ICart {
  cart: IBook,
  quantity: number
}

export interface IModalCart {
  isOpen: boolean
}
