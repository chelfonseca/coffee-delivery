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
  name?: string
  coffeeImage?: string
  price?: number
  itemQuantity: number
}

export function CoffeeCardSelected({
  id,
  name,
  coffeeImage,
  price,
  itemQuantity,
}: CoffeeCardSelectedProps) {
  const { removeAllOrder } = useContext(OrderContext)
  return (
    <CoffeeCardSelectedContainer>
      <InfoContainer>
        <img src={coffeeImage} alt="" />
        <Details>
          <p>{name}</p>
          <Actions>
            <Counter id={id} itemQuantity={itemQuantity} upDateCart />
            <Remove onClick={() => removeAllOrder(id)}>
              <Trash size={20} />
              <p>Remover</p>
            </Remove>
          </Actions>
        </Details>
      </InfoContainer>
      <span>R$ {price?.toFixed(2)}</span>
    </CoffeeCardSelectedContainer>
  )
}
