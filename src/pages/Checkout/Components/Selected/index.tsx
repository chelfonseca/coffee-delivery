import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles'
// import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Selected() {
  const { cart } = useContext(OrderContext)
  // const navigate = useNavigate()

  const totalOrder = cart.reduce(
    (acc, item) => acc + (item ? item.price * item.quantity : 0),
    0,
  )

  // useEffect(() => navigate('/success'), [adress, payment])

  const deliveryFee = 3.5

  // const isAbleTofinish = adress !== undefined && payment !== undefined

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
        <PurchaseButton type="submit" form="adressForm">
          Confirmar Pedido
        </PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
