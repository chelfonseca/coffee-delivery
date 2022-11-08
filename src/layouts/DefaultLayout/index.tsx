import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </div>
  )
}
