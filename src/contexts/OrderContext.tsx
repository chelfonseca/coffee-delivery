import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { NewAdressFormData } from '../pages/Checkout/Components/Order/Components/FormAdress'
import { useNavigate } from 'react-router-dom'

import { coffees } from '../products/products'
import {
  Coffee,
  DeliveryInfo,
  Item,
  orderReducer,
} from '../reducers/orders/reducer'
import {
  createNewAdressAction,
  removeFromCartAction,
  updateCartAction,
} from '../reducers/orders/actions'

// export interface Coffee {
//   id: string
//   name: string
//   coffeeImage: string
//   description: string
//   tags: string[]
//   price: number
// }
// export interface Item extends Coffee {
//   quantity: number
// }

// export interface DeliveryInfo {
//   postCode: string
//   street: string
//   number: string
//   complement?: string
//   neighborhood: string
//   city: string
//   state: string
//   payment: string
// }
// export interface Order {
//   id: string
//   cart: Item[]
//   adress?: DeliveryInfo
// }

export interface OrderContextType {
  coffees: Coffee[]
  cart: Item[]
  // order?: Order
  adress?: DeliveryInfo
  // payment?: string
  // total?: number
  updateCart: (idProduct: string, quantity: number) => void
  removeFromCart: (id: string) => void
  createNewAdress: (data: NewAdressFormData) => void
  // handlePayment: (type: string) => void
  // totalOrder: number
  // deliveryFee: number
}

export const OrderContext = createContext({} as OrderContextType)

// const [orderState, dispatch] = useReducer(orderReducer, {
//   id: Math.random(),
//   cart: [],
//   adress: {},
// })

interface OrderContextProviderProps {
  children: ReactNode
}

const initialState = {
  id: ' ',
  cart: [] as Item[],
  adress: {} as DeliveryInfo,
}
const intialInit = Object.assign(
  initialState,
  (initialState.id = new Date().toString()),
)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  // const [cart, setCart] = useState<Item[]>([] as Item[])
  // const [adress, setAdress] = useState<DeliveryInfo>({} as DeliveryInfo)
  const [load, setLoad] = useState(false)

  const [orderState, dispatch] = useReducer(
    orderReducer,
    initialState,
    () => intialInit,
  )

  const { cart, adress } = orderState

  function updateCart(idProduct: string, quantity: number) {
    dispatch(updateCartAction(idProduct, quantity))
    // dispatch({
    //   type: 'UPDATE_CART',
    //   payload: {
    //     idProduct,
    //     quantity,
    //   },
    // })
  }
  // function updateCart(idProduct: string, quantity: number) {
  //   const itemQuantity = () => (quantity >= 0 ? quantity : 0)
  //   const items = cart.map((item) => {
  //     if (item.id === idProduct) {
  //       return {
  //         ...item,
  //         quantity: itemQuantity(),
  //       }
  //     } else {
  //       return {
  //         ...item,
  //       }
  //     }
  //   })
  //   const hasItem = items.find((item) => item.id === idProduct)

  //   if (hasItem) {
  //     setCart(() => [...items])
  //   } else {
  //     const itemCoffee = coffees.find((coffee) => coffee.id === idProduct)
  //     if (itemCoffee) {
  //       const newItem: Item = { ...itemCoffee, quantity: itemQuantity() }
  //       setCart(() => [...items, newItem])
  //     }
  //   }
  // }

  function removeFromCart(idProduct: string) {
    dispatch(removeFromCartAction(idProduct))
  }
  // function removeFromCart(idProduct: string) {
  //   const itemsUpdated = cart.filter((item) => item.id !== idProduct)
  //   setCart(() => [...itemsUpdated])
  // }

  function createNewAdress(dataForm: NewAdressFormData) {
    dispatch(createNewAdressAction(dataForm))
    setLoad(true)
  }
  // function createNewAdress(data: NewAdressFormData) {
  //   setAdress(data)
  //   setLoad(true)
  // }
  const navigate = useNavigate()
  useEffect(() => {
    if (load) {
      navigate('/success')
    }
  }, [load, navigate])

  // function handlePayment(type: string) {
  //   setPayment(type)
  // }

  return (
    <OrderContext.Provider
      value={{
        coffees,
        cart,
        adress,
        // order,
        updateCart,
        removeFromCart,
        createNewAdress,
        // handlePayment,

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
