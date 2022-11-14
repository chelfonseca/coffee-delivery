import { AddButton, BuyContainer } from './styles'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'

export function Buy() {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <AddButton>
        <Plus />
        <span>1</span>
        <Minus />
      </AddButton>
      <button>
        <ShoppingCart size={20} weight="fill" />
      </button>
    </BuyContainer>
  )
}
