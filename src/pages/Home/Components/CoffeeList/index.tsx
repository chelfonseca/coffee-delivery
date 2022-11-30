import { CoffeeCard } from './Components/CoffeeCard'
import {
  CoffeeFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListItems,
} from './styles'

import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'

export function CoffeeList() {
  const { coffees } = useContext(OrderContext)
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
