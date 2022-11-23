import { Order } from './Components/Order'
import { CheckoutContainer, SelectedContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Order />
      <SelectedContainer>Cafés selecionados</SelectedContainer>
    </CheckoutContainer>
  )
}
