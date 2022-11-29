import { CoffeeCard } from './Components/CoffeeCard'
import {
  CoffeeFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListItems,
} from './styles'

import { coffees } from '../../../../products/products'

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
      <CoffeeListItems>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard
              key={coffee.id}
              id={coffee.id}
              name={coffee.name}
              coffeeImage={coffee.coffeeImage}
              description={coffee.description}
              tags={coffee.tags}
              price={coffee.price}
            />
          )
        })}
      </CoffeeListItems>
    </CoffeeListContainer>
  )
}
