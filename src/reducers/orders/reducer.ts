// import { NewAdressFormData } from '../../pages/Checkout/Components/Order/Components/FormAdress'
import { coffees } from '../../products/products'
import { ActionTypes } from './actions'

export interface Coffee {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: number
}
export interface Item extends Coffee {
  quantity: number
}

export interface DeliveryInfo {
  postCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  payment: string
}
export interface OrderState {
  id: string
  cart: Item[]
  adress?: DeliveryInfo
}
// interface ActionsTypes {
//   type: string
//   payload: {
//     idProduct: string
//     quantity?: number
//     dataForm?: NewAdressFormData
//   }
// }

export function orderReducer(state: OrderState, action: any): OrderState {
  // #ToFix: OrderState => Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      {
        const idProduct = action.payload.idProduct
        const itemQuantity = () =>
          action.payload.quantity >= 0 ? action.payload.quantity : 0
        const items = state.cart.map((item) => {
          if (item.id === idProduct) {
            return {
              ...item,
              quantity: itemQuantity(),
            }
          } else {
            return {
              ...item,
            }
          }
        })
        const hasItem = items.find((item) => item.id === idProduct)
        if (hasItem) {
          return { ...state, cart: items }
        } else {
          const itemCoffee = coffees.find((coffee) => coffee.id === idProduct)
          if (itemCoffee) {
            const newItem: Item = { ...itemCoffee, quantity: itemQuantity() }

            return { ...state, cart: [...items, newItem] }
          }
        }
      }
      break

    case ActionTypes.REMOVE_FROM_CART: {
      const itemsUpdated = state.cart.filter(
        (item) => item.id !== action.payload.idProduct,
      )

      return {
        ...state,
        cart: itemsUpdated,
      }
    }

    case ActionTypes.CREATE_NEW_ADRESS: {
      return {
        ...state,
        adress: action.payload.dataForm,
      }
    }

    default:
      return state
  }
}
