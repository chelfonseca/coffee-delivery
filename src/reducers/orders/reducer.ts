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
export interface Order {
  id: string
  cart: Item[]
  adress?: DeliveryInfo
}

export function orderReducer(state: Order, action: any) {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      // {
      //     const itemQuantity = () => (action.paylod.quantity >= 0 ? action.paylod.quantity : 0)
      //     const items = state.cart.map((item) => {
      //         if (item.id === action.payload.idProduct) {
      //             return {
      //               ...item,
      //               quantity: itemQuantity(),
      //             }
      //           } else {
      //             return {
      //               ...item,
      //             }
      //           }
      //         })
      //         const hasItem = items.find((item) => item.id === idProduct)
      //         if (hasItem) {
      //           setCart(() => [...items])
      //         } else {
      //           const itemCoffee = coffees.find((coffee) => coffee.id === idProduct)
      //           if (itemCoffee) {
      //             const newItem: Item = { ...itemCoffee, quantity: itemQuantity() }
      //             setCart(() => [...items, newItem])
      //           }
      //         }
      //   return {
      //  cart
      // }
      break

    case ActionTypes.REMOVE_FROM_CART:
      // {
      //   return {
      //     const itemsUpdated = cart.filter((item) => item.id !== idProduct)
      // setCart(() => [...itemsUpdated])
      //  }
      break

    case ActionTypes.CREATE_NEW_ADRESS:
      // {
      //   return {
      //     setAdress(data)
      //     setLoad(true)
      //   }
      // }
      //   default:
      return state
    // }
  }
}
