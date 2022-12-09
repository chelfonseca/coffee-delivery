import { createContext, ReactNode, useState } from 'react'

import { coffees } from '../products/products'

export interface Coffee {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: 9.9
}
export interface Item {
  id: string
  quantity: number
}

// export interface Cart {
//   items: Item[]
// }

export interface AdressInfo {
  postCode: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  stateCode: string
}
export interface Order {
  id: string
  cart: Item[]
  adress?: AdressInfo
  payment?: string
  total?: number
}

export interface OrderContextType {
  coffees: Coffee[]
  cart: Item[]
  order?: Order
  adress?: AdressInfo
  payment?: string
  total?: number
  addNewOrder: (id: string) => void
  removeOrder: (id: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([] as Item[])
  // const [order, setOrder] = useState<Order>({} as Order)
  // const [adress, setAdress] = useState<AdressInfo>({} as AdressInfo)
  // const [payment, setPayment] = useState<string>('')
  // const [total, setTotal] = useState<number>(0)

  function addNewOrder(IdProduct: string) {
    const cartCopy = cart
    const item = cartCopy.find((item) => item.id === IdProduct)

    if (!item) {
      cartCopy.push({
        id: IdProduct,
        quantity: 1,
      })
    } else {
      item.quantity += 1
    }
    setCart(cartCopy)
    console.log(cart)
  }

  function removeOrder(IdProduct: string) {
    const cartCopy = cart
    const item = cartCopy.find((item) => item.id === IdProduct)

    if (item && item.quantity >= 1) {
      item.quantity -= 1
    }

    setCart(cartCopy)
    console.log(cart)
  }

  return (
    <OrderContext.Provider
      value={{
        coffees,
        cart,
        // order,
        // adress,
        // payment,
        // total,
        addNewOrder,
        removeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
