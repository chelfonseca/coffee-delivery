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
  BasicHeader,
  PaymentButtonsContainer,
  PaymentContainer,
  SelectedContainer,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderContainer>
        <h3>Complete seu pedido</h3>
        <OrderContainerMain>
          <BasicHeader variantColor="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h4>Endereço de entrega</h4>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </BasicHeader>
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
        <PaymentContainer>
          <BasicHeader variantColor="purple">
            <CurrencyDollar />
            <div>
              <h4>Pagamento</h4>
              <p>O pagamento é feito na entrega</p>
            </div>
          </BasicHeader>
          <PaymentButtonsContainer>
            <button>
              <CreditCard size={22} />
              <p>Cartão de crédito</p>
            </button>
            <button>
              <Bank size={22} />
              <p>Cartão de débito</p>
            </button>
            <button>
              <Money size={22} />
              <p>Dinheiro</p>
            </button>
          </PaymentButtonsContainer>
        </PaymentContainer>
      </OrderContainer>
      <SelectedContainer>Cafés selecionados</SelectedContainer>
    </CheckoutContainer>
  )
}
