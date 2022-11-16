import {
  CheckoutContainer,
  FormAdress,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputPostCode,
  InputState,
  InputStreet,
  OrderContainer,
  OrderHeader,
  SelectedContainer,
} from './styles'

import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <div>
          <OrderHeader>
            <MapPinLine />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber o seu pedido</p>{' '}
            </div>
          </OrderHeader>
          <FormAdress>
            <InputPostCode placeholder="CEP" />
            <InputStreet placeholder="Rua" />
            <InputNumber placeholder="Número" />
            <InputComplement placeholder="Complemento" />
            <InputNeighborhood placeholder="Bairro" />
            <InputCity placeholder="Cidade" />
            <InputState placeholder="UF" />
          </FormAdress>
        </div>
      </OrderContainer>
      <SelectedContainer>Cafés selecionados</SelectedContainer>
    </CheckoutContainer>
  )
}
