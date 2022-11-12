import { HomeContainer } from './styles'

import { Intro } from './Components/Intro'
import { CoffeeList } from './Components/CoffeeList'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <CoffeeList />
    </HomeContainer>
  )
}
