import { AddButton, BuyContainer } from './styles'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'

export function Buy() {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <AddButton>
        <Minus size={13} />
        <span>1</span>
        <Plus size={13} />
      </AddButton>
      <button>
        <ShoppingCart size={22} weight="fill" />
      </button>
    </BuyContainer>
  )
}
