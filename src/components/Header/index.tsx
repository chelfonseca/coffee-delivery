import { HeaderContainer, LocationInput } from './styles'
import LogoCoffee from '../../assets/Logo-coffee.svg'
import { NavLink } from 'react-router-dom'
import Cart from '../../assets/Cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffee} alt="" />
      </span>
      <nav>
        <LocationInput>
          <FontAwesomeIcon icon={faLocationDot} />
          <input type="text" placeholder="City" list="states" />
        </LocationInput>

        <datalist id="states">
          <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
          <option value="Curitiba, PR">Curitiba, PR</option>
          <option value="Porto Alegre, RS"></option>
          <option value="São Paulo, SP">São Paulo, SP</option>
        </datalist>

        <NavLink to="/checkout" title="Checkout">
          <img src={Cart} alt="" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
