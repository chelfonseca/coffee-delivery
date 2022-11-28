import {
  IllustrationContainer,
  ItemIconLocal,
  ItemIconPayment,
  ItemIconTime,
  ItemText,
  OrderInfoContainer,
  OrderInfoContent,
  OrderInfoItem,
  SuccessBody,
  SuccessContainer,
  SuccessHeader,
} from './styles'

import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

import SuccessIllustration from '../../assets/SuccessIllustration.svg'
export function Success() {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h2>uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>
      <SuccessBody>
        <OrderInfoContainer>
          <OrderInfoContent>
            <OrderInfoItem>
              <ItemIconLocal>
                <MapPin size={16} weight="fill" />
              </ItemIconLocal>
              <ItemText>
                <p>
                  Entrega em <b>Rua João Daniel Martinelli, 102</b>
                </p>
                <p>Farrapos - Porto Alegre, RS</p>
              </ItemText>
            </OrderInfoItem>
            <OrderInfoItem>
              <ItemIconTime>
                <Timer size={16} weight="fill" />
              </ItemIconTime>
              <ItemText>
                <p>Previsão de entrega</p>
                <p>
                  <b>20 min - 30 min</b>
                </p>
              </ItemText>
            </OrderInfoItem>
            <OrderInfoItem>
              <ItemIconPayment>
                <CurrencyDollar size={16} weight="fill" />
              </ItemIconPayment>
              <ItemText>
                <p>Pagamento na entrega</p>
                <p>
                  <b>Cartão de crédito</b>
                </p>
              </ItemText>
            </OrderInfoItem>
          </OrderInfoContent>
        </OrderInfoContainer>
        <IllustrationContainer src={SuccessIllustration} />
      </SuccessBody>
    </SuccessContainer>
  )
}
