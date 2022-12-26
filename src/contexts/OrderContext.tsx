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
export interface Item extends Coffee {
  quantity: number
}

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
  updateCart: (idProduct: string, quantity: number) => void
  removeFromCart: (id: string) => void
  // totalOrder: number
  // deliveryFee: number
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([] as Item[])
  // const [temporaryCart, setTemporaryCart] = useState<Item[]>([] as Item[])
  // const [order, setOrder] = useState<Order>({} as Order)
  // const [adress, setAdress] = useState<AdressInfo>({} as AdressInfo)
  // const [payment, setPayment] = useState<string>('')
  // const [totalOrder, setTotal] = useState<number>(0)
  // const [deliveryFee, setDeliveryFee] = useState<number>(3.5)

  function updateCart(idProduct: string, quantity: number) {
    const items = cart.map((item) => {
      if (item.id === idProduct) {
        return {
          ...item,
          quantity,
        }
      } else {
        return {
          ...item,
        }
      }
    })
    const hasItem = items.find((item) => item.id === idProduct)

    if (hasItem) {
      setCart(() => [...items])
    } else {
      const itemCoffee = coffees.find((coffee) => coffee.id === idProduct)
      if (itemCoffee) {
        const newItem: Item = { ...itemCoffee, quantity }
        setCart(() => [...items, newItem])
      }
    }
  }

  function removeFromCart(idProduct: string) {
    const itemsUpdated = cart.filter((item) => item.id !== idProduct)
    setCart(() => [...itemsUpdated])
  }

  // useEffect(() => {
  //   setDeliveryFee(3.5)
  //   const cartAllInfo = cart.map((item) =>
  //     coffees.find((coffee) => coffee.id === item.id),
  //   )
  //   if (cartAllInfo) {
  //     const totalOrder = cartAllInfo.reduce(
  //       (acc, item) => acc + (item ? item.price : 0),
  //       0,
  //     )
  //     setTotal(totalOrder)
  //   }
  // }, [cart, setCart])

  return (
    <OrderContext.Provider
      value={{
        coffees,
        cart,
        updateCart,
        removeFromCart,

        // order,
        // adress,
        // payment,
        // total,
        // addNewOrder,
        // removeOrder,
        // handleUpdateCart,
        // removeAllOrder,
        // totalOrder,
        // deliveryFee,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
