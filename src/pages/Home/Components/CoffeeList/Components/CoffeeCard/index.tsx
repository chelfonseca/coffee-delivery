import { CoffeeCardContainer, Description, Tags, Tag } from './styles'

import havaiano from '../../coffeeImages/havaiano.svg'
import { Buy } from './Components/Buy'

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
      <Tags>
        {tags.map((tag) => (
          <Tag key={id}>{tag}</Tag>
        ))}
      </Tags>
      <h3>{name}</h3>
      <Description>{description}</Description>
      <Buy />
    </CoffeeCardContainer>
  )
}
