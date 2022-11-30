import { createContext, ReactNode } from 'react'

import { coffees } from '../products/products'

export interface Coffee {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: 9.9
  selected: boolean
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

export interface OrderContextType {
  coffees: Coffee[]
  adress?: AdressInfo
  payment?: string
  total?: number
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  return (
    <OrderContext.Provider value={{ coffees }}>
      {children}
    </OrderContext.Provider>
  )
}
