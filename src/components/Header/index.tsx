import { HeaderContainer, LocationInput } from './styles'
import LogoCoffeeDelivery from '../../assets/LogoCoffeeDelivery.svg'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={LogoCoffeeDelivery} alt="" />
      </span>
      <nav>
        <LocationInput>
          <MapPin size={24} weight="fill" />
          <input type="text" placeholder="São Paulo, SP" list="states" />
        </LocationInput>

        <datalist id="states">
          <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
          <option value="Curitiba, PR">Curitiba, PR</option>
          <option value="Porto Alegre, RS"></option>
          <option value="São Paulo, SP">São Paulo, SP</option>
        </datalist>

        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={20} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
