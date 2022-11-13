import {
  IntroImage,
  IntroInfoList,
  IntroInfo,
  IntroInfoListItem,
  IntroInfoText,
  IntroContainer,
} from './styles'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import IntroCoffee from '../../../../assets/IntroCoffee.svg'

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <IntroInfoText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe o seu café onde estiver, a qualquer
            hora
          </p>
        </IntroInfoText>
        <IntroInfoList>
          <div>
            <IntroInfoListItem variantColor="yellow-dark">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </IntroInfoListItem>
            <IntroInfoListItem variantColor="yellow">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </IntroInfoListItem>
          </div>
          <div>
            <IntroInfoListItem variantColor="base-text">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </IntroInfoListItem>
            <IntroInfoListItem variantColor="purple">
              <div>
                <Coffee size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </IntroInfoListItem>
          </div>
        </IntroInfoList>
      </IntroInfo>
      <IntroImage>
        <img src={IntroCoffee} alt="" />
      </IntroImage>
    </IntroContainer>
  )
}
