import { createContext, ReactNode, useEffect, useState } from 'react'

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
  temporaryCart: Item[]
  cart: Item[]
  order?: Order
  adress?: AdressInfo
  payment?: string
  total?: number
  addNewOrder: (id: string) => void
  removeOrder: (id: string) => void
  handleUpdateCart: () => void
  removeAllOrder: (id: string) => void
  totalOrder: number
  deliveryFee: number
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [cart, setCart] = useState<Item[]>([] as Item[])
  const [temporaryCart, setTemporaryCart] = useState<Item[]>([] as Item[])
  // const [order, setOrder] = useState<Order>({} as Order)
  // const [adress, setAdress] = useState<AdressInfo>({} as AdressInfo)
  // const [payment, setPayment] = useState<string>('')
  const [totalOrder, setTotal] = useState<number>(0)
  const [deliveryFee, SetDeliveryFee] = useState<number>(3.5)

  function addNewOrder(idProduct: string) {
    const items = temporaryCart.map((item) => {
      if (item.id === idProduct) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      } else {
        return {
          ...item,
        }
      }
    })
    const hasItem = items.find((item) => item.id === idProduct)

    if (hasItem) {
      setTemporaryCart(() => [...items])
    } else {
      const newItem: Item = { id: idProduct, quantity: 1 }
      setTemporaryCart(() => [...items, newItem])
    }
  }

  function removeOrder(idProduct: string) {
    const items = temporaryCart.map((item) => {
      if (item.id === idProduct && item.quantity >= 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        }
      } else {
        return {
          ...item,
        }
      }
    })
    const hasItem = items.find((item) => item.id === idProduct)

    if (hasItem && hasItem.quantity !== 0) {
      setTemporaryCart(() => [...items])
    } else {
      removeAllOrder(idProduct)
      // const itemsUpdated = temporaryCart.filter((item) => item.id !== idProduct)
      // setTemporaryCart([...itemsUpdated])
    }

    // const item = temporaryCart.find((item) => item.id === idProduct)
    // if (item && item.quantity >= 1) {
    //   const itemUpdated = {
    //     id: idProduct,
    //     quantity: item.quantity - 1,
    //   }
    //   const itemsWithoutItem = temporaryCart.filter(
    //     (item) => item.id !== idProduct,
    //   )
    //   setTemporaryCart((items) => [...itemsWithoutItem, itemUpdated])
    // }
  }

  function handleUpdateCart() {
    // const itemsSorted = temporaryCart.sort(
    //   (a, b) => Number(a.id) - Number(b.id),
    // )
    setCart(() => [...temporaryCart])
  }

  function removeAllOrder(idProduct: string) {
    const itemsUpdated = temporaryCart.filter((item) => item.id !== idProduct)
    setTemporaryCart(() => [...itemsUpdated])
    handleUpdateCart()
    // const item = temporaryCart.find((item) => item.id === idProduct)

    // if (item) {
    //   const itemsWithoutItem = temporaryCart.filter(
    //     (item) => item.id !== idProduct,
    //   )
    //   setTemporaryCart(() => [...itemsWithoutItem])
    // }
  }

  useEffect(() => {
    SetDeliveryFee(3.5)
    const cartAllInfo = cart.map((item) =>
      coffees.find((coffee) => (coffee.id = item.id)),
    )
    if (cartAllInfo) {
      const totalOrder = cartAllInfo.reduce((acc, item) => acc + item.price, 0)
      setTotal((total) => totalOrder)
    }
  }, [cart])

  return (
    <OrderContext.Provider
      value={{
        coffees,
        temporaryCart,
        cart,
        // order,
        // adress,
        // payment,
        // total,
        addNewOrder,
        removeOrder,
        handleUpdateCart,
        removeAllOrder,
        totalOrder,
        deliveryFee,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
