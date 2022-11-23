import { OrderContainer, OrderContainerMain, BasicHeader } from './styles'

import { MapPinLine } from 'phosphor-react'
import { FormAdress } from './Components/FormAdress'
import { Payment } from './Components/Payment'

export function Order() {
  return (
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
        <FormAdress />
      </OrderContainerMain>
      <Payment />
    </OrderContainer>
  )
}
