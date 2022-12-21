import { Action } from '../../../../../../../../components/Action'
import { BuyContainer } from './styles'

interface BuyProps {
  id: string
  price: number
}

export function Buy({ id, price }: BuyProps) {
  return (
    <BuyContainer>
      <p>R$</p>
      <span>{price.toFixed(2)}</span>
      <Action id={id} actionType={'buy'} />
    </BuyContainer>
  )
}
