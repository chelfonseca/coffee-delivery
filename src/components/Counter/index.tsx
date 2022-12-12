import { Plus, Minus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface CounterProps {
  id: string
  itemQuantity: number
}

export function Counter({ id, itemQuantity }: CounterProps) {
  const { addNewOrder, removeOrder } = useContext(OrderContext)

  return (
    <CounterContainer>
      <div onClick={() => removeOrder(id)}>
        <Minus size={13} />
      </div>
      <p>{itemQuantity}</p>
      <div onClick={() => addNewOrder(id)}>
        <Plus size={13} />
      </div>
    </CounterContainer>
  )
}
