import { CoffeeCardContainer } from './styles'

import havaiano from '../../coffeeImages/havaiano.svg'

interface CoffeeCardProps {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeCard({
  id,
  coffeeImage,
  description,
  name,
  price,
  tags,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={havaiano} alt="" />
      <div>
        {tags.map((tag) => (
          <span key={id}>{tag}</span>
        ))}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Buy</p>
    </CoffeeCardContainer>
  )
}
