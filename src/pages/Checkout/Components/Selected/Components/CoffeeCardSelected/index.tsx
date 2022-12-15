import {
  Actions,
  CoffeeCardSelectedContainer,
  Details,
  InfoContainer,
  Remove,
} from './styles'

import { Trash } from 'phosphor-react'

import { Counter } from '../../../../../../components/Counter'

import { useContext } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContext'

interface CoffeeCardSelectedProps {
  id: string
  // name?: string
  // coffeeImage?: string
  // price?: number
  // itemQuantity: number
}

export function CoffeeCardSelected({
  id,
}: // name,
// coffeeImage,
// price,
// itemQuantity,
CoffeeCardSelectedProps) {
  const { coffees, cart, removeAllOrder } = useContext(OrderContext)

  const item = cart.find((item) => item.id === id)
  const coffee = coffees.find((coffee) => coffee.id === id)

  return (
    <CoffeeCardSelectedContainer>
      <InfoContainer>
        <img src={coffee?.coffeeImage} alt="" />
        <Details>
          <p>{coffee?.name}</p>
          <Actions>
            <Counter
              id={id}
              itemQuantity={item ? item.quantity : 0}
              upDateCart
            />
            <Remove onClick={() => removeAllOrder(id)}>
              <Trash size={20} />
              <p>Remover</p>
            </Remove>
          </Actions>
        </Details>
      </InfoContainer>
      <span>R$ {coffee?.price.toFixed(2)}</span>
    </CoffeeCardSelectedContainer>
  )
}
