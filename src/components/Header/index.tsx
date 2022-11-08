import { HeaderContainer } from './styles'
import LogoCoffee from '../../assets/Logo-coffee.svg'
import { NavLink } from 'react-router-dom'
import Cart from '../../assets/Cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffee} alt="" />
      </span>
      <nav>
        <input type="text" placeholder="Cidade e estado" />
        <NavLink to="/checkout" title="Checkout">
          <img src={Cart} alt="" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
