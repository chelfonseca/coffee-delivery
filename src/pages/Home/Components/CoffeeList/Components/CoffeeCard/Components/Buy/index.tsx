import { BuyContainer } from './styles'
import { Counter } from '../../../../../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'
interface BuyProps {
  id: string
  itemQuantity: number
}

export function Buy({ id, itemQuantity }: BuyProps) {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <Counter id={id} itemQuantity={itemQuantity} />
      <button>
        <ShoppingCart size={22} weight="fill" />
      </button>
    </BuyContainer>
  )
}
