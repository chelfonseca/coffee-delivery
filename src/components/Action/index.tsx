import { Plus, Minus, ShoppingCart, Trash } from 'phosphor-react'
import { ActionContainer, Counter, Add, Remove } from './styles'

import { useContext, useState } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

interface CounterProps {
  id: string
  actionType: string
}

export function Action({ id, actionType }: CounterProps) {
  const { cart, addToCart, removeFromCart } = useContext(OrderContext)
  const [quantity, setQuantity] = useState(0)
  const item = cart.find((item) => item.id === id)

  function handleSetQuantity(type: string) {
    switch (type) {
      case 'add':
        setQuantity((quantity) => quantity + 1)
        break

      case 'sub':
        setQuantity((quantity) => quantity - 1)
        break

      default:
        setQuantity(0)
    }
  }

  return (
    <ActionContainer>
      <Counter>
        <div onClick={() => handleSetQuantity('sub')}>
          <Minus size={13} />
        </div>
        <p>{actionType === 'buy' ? quantity : item?.quantity}</p>
        <div onClick={() => handleSetQuantity('add')}>
          <Plus size={13} />
        </div>
      </Counter>
      {actionType === 'buy' && (
        <Add onClick={() => addToCart(id, quantity)}>
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
