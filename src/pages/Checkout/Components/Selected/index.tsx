import { SelectedContainer, SelectedContainerMain } from './styles'

export function Selected() {
  return (
    <SelectedContainer>
      <h3>Cafés selecionados</h3>
      <SelectedContainerMain>
        <div>CoffeeCard</div>
        <hr />
        <div>CoffeeCard</div>
        <hr />
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
        <button>Confirmar Pedido</button>
      </SelectedContainerMain>
    </SelectedContainer>
  )
}
