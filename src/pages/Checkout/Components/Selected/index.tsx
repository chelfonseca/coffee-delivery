import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles'

import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Selected() {
  const { cart } = useContext(OrderContext)

  const totalOrder = cart.reduce(
    (acc, item) => acc + (item ? item.price * item.quantity : 0),
    0,
  )

  const deliveryFee = 3.5
  // useEffect(() => {
  //   if (cartAllInfo) {
  //     const total = cartAllInfo.reduce(
  //       (acc, item) => acc + (item ? item.price : 0),
  //       0,
  //     )
  //   }
  //   setTotalOrder((state) => state + 1)
  // }, [cartAllInfo])

  // useEffect(() => {
  //   const cartAllInfo = cart.map((item) =>
  //     coffees.find((coffee) => coffee.id === item.id),
  //   )
  //   if (cartAllInfo) {
  //     const total = cartAllInfo.reduce(
  //       (acc, item) => acc + (item ? item.price : 0),
  //       0,
  //     )
  //   }
  //   setTotalOrder(total)
  // }, [cart, coffees])

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
        <PurchaseButton>Confirmar Pedido</PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
