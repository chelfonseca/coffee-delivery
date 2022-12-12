import { BuyContainer } from './styles'
import { Counter } from '../../../../../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'

import { useContext } from 'react'
import { OrderContext } from '../../../../../../../../contexts/OrderContext'

interface BuyProps {
  id: string
  itemQuantity: number
}

export function Buy({ id, itemQuantity }: BuyProps) {
  const { handleUpdateCart } = useContext(OrderContext)

  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <Counter id={id} itemQuantity={itemQuantity} />
      <button onClick={() => handleUpdateCart()}>
        <ShoppingCart size={22} weight="fill" />
      </button>
    </BuyContainer>
  )
}
