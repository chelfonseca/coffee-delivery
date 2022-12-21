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

  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        {cart.map((item) => {
          // const coffee = coffees.find((coffee) => coffee.id === item.id)

          // const isAble = !!coffee

          return (
            <div key={item.id}>
              <CoffeeCardSelected
                id={item.id}
                // name={coffee?.name}
                // coffeeImage={coffee?.coffeeImage}
                // price={coffee?.price}
                // itemQuantity={item.quantity}
              ></CoffeeCardSelected>
              <hr />
            </div>

            // isAble && (
            //   <div key={item.id}>
            //     <CoffeeCardSelected
            //       id={item.id}
            //       name={coffee.name}
            //       coffeeImage={coffee.coffeeImage}
            //       price={coffee.price}
            //       itemQuantity={item.quantity}
            //     ></CoffeeCardSelected>
            //     <hr />
            //   </div>
          )
        })}
        <table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              {/* <td>R$ {totalOrder.toFixed(2)}</td> */}
            </tr>
            <tr>
              <td>Entrega</td>
              {/* <td>R$ {deliveryFee.toFixed(2)}</td> */}
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              {/* <th>R$ {(totalOrder + deliveryFee).toFixed(2)}</th> */}
            </tr>
          </tfoot>
        </table>
        <PurchaseButton>Confirmar Pedido</PurchaseButton>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
