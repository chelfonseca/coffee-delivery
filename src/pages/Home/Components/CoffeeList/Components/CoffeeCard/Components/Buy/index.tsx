import { BuyContainer } from './styles'
import { Counter } from '../../../../../../../../components/Counter'
import { ShoppingCart } from 'phosphor-react'

export function Buy() {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <Counter />
      <button>
        <ShoppingCart size={22} weight="fill" />
      </button>
    </BuyContainer>
  )
}
