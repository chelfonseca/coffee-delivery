import {
  Actions,
  CoffeeCardSelectedContainer,
  Details,
  InfoContainer,
  Remove,
} from './styles'

import { Trash } from 'phosphor-react'

import { Counter } from '../../../../../../components/Counter'

import havaiano from '../../../../../../assets/coffeeImages/havaiano.svg'

export function CoffeeCardSelected() {
  return (
    <CoffeeCardSelectedContainer>
      <InfoContainer>
        <img src={havaiano} alt="" />
        <Details>
          <p>Havaiano</p>
          <Actions>
            <Counter />
            <Remove>
              <Trash size={20} />
              <p>Remover</p>
            </Remove>
          </Actions>
        </Details>
      </InfoContainer>
      <span>R$ 9,90</span>
    </CoffeeCardSelectedContainer>
  )
}
