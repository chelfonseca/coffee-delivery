import { BasicHeader } from '../../styles'
import {
  PaymentButton,
  PaymentButtonsContainer,
  PaymentContainer,
} from './styles'

import {
  CurrencyDollar,
  // ,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

import { useState } from 'react'

export function Payment() {
  const { register } = useFormContext()

  const [buttonChecked, setButtonChecked] = useState('credit card')

  function handleChange(payment: string) {
    setButtonChecked(payment)
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
        <PaymentButton
          htmlFor="credit card"
          checked={buttonChecked === 'credit card'}
        >
          <CreditCard size={22} />
          <p>Cartão de crédito</p>
          <input
            type="radio"
            id="credit card"
            value="credit card"
            {...register('payment')}
            name="payment"
            onChange={() => handleChange('credit card')}
          />
        </PaymentButton>

        <PaymentButton
          htmlFor="debit card"
          checked={buttonChecked === 'debit card'}
        >
          <Bank size={22} />
          <p>Cartão de débito</p>
          <input
            type="radio"
            id="debit card"
            value="debit card"
            {...register('payment')}
            onChange={() => handleChange('debit card')}
            name="payment"
          />
        </PaymentButton>
        <PaymentButton htmlFor="money" checked={buttonChecked === 'money'}>
          <Money size={22} />
          <p>Dinheiro</p>
          <input
            type="radio"
            id="money"
            value="money"
            {...register('payment')}
            onChange={() => handleChange('money')}
            name="payment"
          />
        </PaymentButton>
      </PaymentButtonsContainer>
    </PaymentContainer>
  )
}
