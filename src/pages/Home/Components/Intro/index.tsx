import {
  IntroImage,
  IntroInfoList,
  IntroInfo,
  IntroInfoListItem,
  IntroInfoText,
  IntroContainer,
} from './styles'

import ItemCart from '../../../../assets/ItemCart.svg'
import ItemDelivery from '../../../../assets/ItemDelivery.svg'
import ItemPackage from '../../../../assets/ItemPackage.svg'
import ItemCoffee from '../../../../assets/ItemCoffee.svg'
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
            <IntroInfoListItem>
              <img src={ItemCart} alt="" />
              <p>Compra simples e segura</p>
            </IntroInfoListItem>
            <IntroInfoListItem>
              <img src={ItemDelivery} alt="" />
              <p>Entrega rápida e rastreada</p>
            </IntroInfoListItem>
          </div>
          <div>
            <IntroInfoListItem>
              <img src={ItemPackage} alt="" />
              <p>Embalagem mantém o café intacto</p>
            </IntroInfoListItem>
            <IntroInfoListItem>
              <img src={ItemCoffee} alt="" />
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
