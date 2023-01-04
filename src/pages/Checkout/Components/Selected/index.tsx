import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Selected() {
  const { cart } = useContext(OrderContext)
  const navigate = useNavigate()

  const totalOrder = cart.reduce(
    (acc, item) => acc + (item ? item.price * item.quantity : 0),
    0,
  )

  const deliveryFee = 3.5

  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          return (
            <div key={item.id}>
              <CoffeeCardSelected id={item.id}></CoffeeCardSelected>
              <hr />
            </div>
          )
        })}
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ {totalOrder.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ {deliveryFee.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>R$ {(totalOrder + deliveryFee).toFixed(2)}</th>
            </tr>
          </tfoot>
        </table>
        <PurchaseButton
          type="submit"
          form="adressForm"
          onClick={() => navigate('/success')}
        >
          Confirmar Pedido
        </PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
