import { Plus, Minus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <div>
        <Minus size={13} />
      </div>
      <span>1</span>
      <div>
        <Plus size={13} />
      </div>
    </CounterContainer>
  )
}
