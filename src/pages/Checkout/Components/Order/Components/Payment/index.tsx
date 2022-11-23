import { BasicHeader } from '../../styles'

import { PaymentButtonsContainer, PaymentContainer } from './styles'

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
export function Payment() {
  return (
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
  )
}
