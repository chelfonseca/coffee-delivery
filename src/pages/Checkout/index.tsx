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
  OrderContainerMain,
  OrderHeader,
  SelectedContainer,
} from './styles'

import { MapPinLine } from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <OrderContainerMain>
          <OrderHeader>
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber o seu pedido</p>{' '}
            </div>
          </OrderHeader>
          <FormAdress>
            <InputPostCode placeholder="CEP" />
            <InputStreet placeholder="Rua" />
            <InputNumber placeholder="Número" />
            <InputComplement placeholder="Complemento" />
            <span>Opcional</span>
            <InputNeighborhood placeholder="Bairro" />
            <InputCity placeholder="Cidade" />
            <InputState placeholder="UF" />
          </FormAdress>
        </OrderContainerMain>
      </OrderContainer>
      <SelectedContainer>Cafés selecionados</SelectedContainer>
    </CheckoutContainer>
  )
}
