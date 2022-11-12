import {
  CoffeeFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListItems,
} from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListHeader>
        <h2>Nossos cafés</h2>
        <CoffeeFilter>
          <button>TRADICIONAL</button>
          <button>ESPECIAL</button>
          <button>COM LEITE</button>
          <button>ALCOÓLICO</button>
          <button>GELADO</button>
        </CoffeeFilter>
      </CoffeeListHeader>
      <CoffeeListItems> </CoffeeListItems>
    </CoffeeListContainer>
  )
}
