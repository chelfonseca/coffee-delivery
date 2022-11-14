import { CoffeeCard } from './Components/CoffeeCard'
import {
  CoffeeFilter,
  CoffeeListContainer,
  CoffeeListHeader,
  CoffeeListItems,
} from './styles'

const coffees = [
  {
    id: '012',
    name: 'havaiano',
    coffeeImage: '../../coffeeImages/havaiano.svg',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
  },
  {
    id: '012',
    name: 'havaiano',
    coffeeImage: '../../coffeeImages/havaiano.svg',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial', 'tradicional', 'gelado'],
    price: 9.9,
  },
]

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
