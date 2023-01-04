import { BasicHeader } from '../../styles'
import { PaymentButtonsContainer, PaymentContainer } from './styles'

import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'

import { useContext } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContext'
export function Payment() {
  const { handlePayment } = useContext(OrderContext)

  function handlePaymentType(type: string) {
    handlePayment(type)
  }
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
        <button onClick={() => handlePaymentType('credit card')}>
          <CreditCard size={22} />
          <p>Cartão de crédito</p>
        </button>
        <button onClick={() => handlePaymentType('debit card')}>
          <Bank size={22} />
          <p>Cartão de débito</p>
        </button>
        <button onClick={() => handlePaymentType('money')}>
          <Money size={22} />
          <p>Dinheiro</p>
        </button>
      </PaymentButtonsContainer>
    </PaymentContainer>
  )
}
