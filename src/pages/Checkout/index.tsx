import { Order } from './Components/Order'
import { Selected } from './Components/Selected'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Order />
      <Selected />
    </CheckoutContainer>
  )
}
