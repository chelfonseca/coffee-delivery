import { AddButton, BuyContainer } from './styles'
import { Plus, Minus, ShoppingCart } from 'phosphor-react'

export function Buy() {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>9,90</span>
      <AddButton>
        <div>
          <Minus size={13} />
        </div>
        <span>1</span>
        <div>
          <Plus size={13} />
        </div>
      </AddButton>
      <button>
        <ShoppingCart size={22} weight="fill" />
      </button>
    </BuyContainer>
  )
}
