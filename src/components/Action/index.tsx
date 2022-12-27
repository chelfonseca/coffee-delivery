import { Plus, Minus, ShoppingCart, Trash } from 'phosphor-react'
import { ActionContainer, Counter, Add, Remove } from './styles'

import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface CounterProps {
  id: string
  actionType: string
}

export function Action({ id, actionType }: CounterProps) {
  const { cart, updateCart, removeFromCart } = useContext(OrderContext)
  const [quantity, setQuantity] = useState(0)
  const item = cart.find((item) => item.id === id)

  function handleSetQuantity(type: string) {
    switch (type) {
      case 'add':
        setQuantity((quantity) => (quantity >= 0 ? quantity + 1 : 0))
        break

      case 'sub':
        setQuantity((quantity) => (quantity >= 1 ? quantity - 1 : 0))
        break

      default:
        setQuantity(0)
    }
  }

  return (
    <ActionContainer>
      <Counter>
        <div
          onClick={() =>
            actionType === 'buy'
              ? handleSetQuantity('sub')
              : updateCart(id, item ? item.quantity - 1 : 0)
          }
        >
          <Minus size={13} />
        </div>
        <p>{actionType === 'buy' ? quantity : item?.quantity}</p>
        <div
          onClick={() =>
            actionType === 'buy'
              ? handleSetQuantity('add')
              : updateCart(id, item ? item.quantity + 1 : 0)
          }
        >
          <Plus size={13} />
        </div>
      </Counter>
      {actionType === 'buy' && (
        <Add onClick={() => updateCart(id, quantity)}>
          <ShoppingCart size={22} weight="fill" />
        </Add>
      )}
      {actionType === 'remove' && (
        <Remove onClick={() => removeFromCart(id)}>
          <Trash size={20} />
          <p>Remover</p>
        </Remove>
      )}
    </ActionContainer>
  )
}
