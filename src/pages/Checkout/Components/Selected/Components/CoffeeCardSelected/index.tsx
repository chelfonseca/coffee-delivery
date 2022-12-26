import { CoffeeCardSelectedContainer, Details, InfoContainer } from './styles'
import { Action } from '../../../../../../components/Action'

import { useContext } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContext'

interface CoffeeCardSelectedProps {
  id: string
}

export function CoffeeCardSelected({ id }: CoffeeCardSelectedProps) {
  const { coffees } = useContext(OrderContext)

  const coffee = coffees.find((coffee) => coffee.id === id)

  return (
    <CoffeeCardSelectedContainer>
      <InfoContainer>
        <img src={coffee?.coffeeImage} alt="" />
        <Details>
          <p>{coffee?.name}</p>
          <Action id={id} actionType={'remove'} />
        </Details>
      </InfoContainer>
      <span>R$ {coffee ? coffee.price.toFixed(2) : 0}</span>
    </CoffeeCardSelectedContainer>
  )
}
