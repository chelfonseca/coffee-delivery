import { CoffeeCardContainer, Description, Tags, Tag } from './styles'
import { Buy } from './Components/Buy'

interface CoffeeCardProps {
  id: string
  name: string
  coffeeImage: string
  description: string
  tags: string[]
  price: number
  itemQuantity: number
}

export function CoffeeCard({
  id,
  coffeeImage,
  description,
  name,
  price,
  tags,
  itemQuantity,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImage} alt="" />
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag + id}>{tag}</Tag>
        ))}
      </Tags>
      <h3>{name}</h3>
      <Description>{description}</Description>
      <Buy id={id} itemQuantity={itemQuantity} price={price} />
    </CoffeeCardContainer>
  )
}
