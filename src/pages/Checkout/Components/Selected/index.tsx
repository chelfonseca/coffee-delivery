import { CoffeeCardSelected } from './Components/CoffeeCardSelected'
import {
  PurchaseButton,
  SelectedContainer,
  SelectedContainerMain,
} from './styles'

import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function Selected() {
  const { coffees, cart } = useContext(OrderContext)

  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          const coffee = coffees.find((coffee) => coffee.id === item.id)

          return (
            <div key={item.id}>
              <CoffeeCardSelected
                id={item.id}
                name={coffee?.name}
                coffeeImage={coffee?.coffeeImage}
                price={coffee?.price}
                itemQuantity={item.quantity}
              ></CoffeeCardSelected>
              <hr />
            </div>
          )
        })}
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>R$ 29,70</td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>R$ 3,00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>R$ 33,20</th>
            </tr>
          </tfoot>
        </table>
        <PurchaseButton>Confirmar Pedido</PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
