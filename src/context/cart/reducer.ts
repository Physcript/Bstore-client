import { useContext } from 'react'
import { IUserCart } from '../../interface/cart/context'
import { IReducer } from '../../interface/cart/reducer'
import { ICart } from '../../interface/cart'


export function reducer (state: IUserCart,action:IReducer): state {
  

  const book = action.PAYLOAD.BOOK ?? null
  const list = state.CART   

  switch (action.TYPE) {
    case 'ADD':     

      const cart:ICart = {
        book,
        quantity: 1
      }

      let currentBook = list.find( b => book.book._id == b.book.book._id )
      
      if(currentBook === undefined )
        {
          state.CART.push(cart)
        }
      else
        {
          let currentIndex = list.findIndex( x => book.book._id == x.book.book._id )
          list[currentIndex].quantity += 1
        }

      return {
        CART: state.CART,
        QUANTITY: getQuantity(),
        TOTAL: getTotal()
      }


  }

    function getQuantity () {
        let count = 0
        list.forEach((list,index) => {
          count += list.quantity
        })
        return count
      }

      function getTotal() {
        let total = 0
        list.forEach((list,index) => {
          total += list.book.book.price * list.quantity
        })
        return total
      }


}
