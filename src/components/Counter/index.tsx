import { Plus, Minus } from 'phosphor-react'
import { CounterContainer } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface CounterProps {
  id: string
  itemQuantity: number
  upDateCart?: boolean
}

export function Counter({
  id,
  itemQuantity,
  upDateCart = false,
}: CounterProps) {
  const { addNewOrder, removeOrder, handleUpdateCart } =
    useContext(OrderContext)

  function removeOrderAndUpdateCart(id: string) {
    removeOrder(id)
    handleUpdateCart()
  }
  function addNewOrderAndUpdateCart(id: string) {
    addNewOrder(id)
    handleUpdateCart()
  }

  return (
    <CounterContainer>
      <div
        onClick={() =>
          upDateCart ? removeOrderAndUpdateCart(id) : removeOrder(id)
        }
      >
        <Minus size={13} />
      </div>
      <p>{itemQuantity}</p>
      <div
        onClick={() =>
          upDateCart ? addNewOrderAndUpdateCart(id) : addNewOrder(id)
        }
      >
        <Plus size={13} />
      </div>
    </CounterContainer>
  )
}
