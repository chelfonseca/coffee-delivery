import { VARIANT_COLOR, VariantColorProps } from '../../../../styles/variants'

import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 40rem;
  height: 37rem;
  display: flex;
  flex-direction: column;
  font-size: 1.32rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0;
  }
`
export const OrderContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
`
export const BasicHeader = styled.div<VariantColorProps>`
  width: 35rem;
  height: 2.75rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme[VARIANT_COLOR[props.variantColor]]};
  font-size: 1.32rem;

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentContainer = styled(OrderContainerMain)`
  height: 13rem;
  margin-top: 1rem;
`
export const PaymentButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  button {
    width: 11.18rem;
    height: 3.2rem;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 0.5rem;
    padding-left: 0.7rem;

    transition: background-color 0.5s ease-in-out;

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 0.75rem;
      text-transform: uppercase;
    }

    :hover {
      background-color: ${(props) => props.theme['base-hover']};
    }
    :focus {
      background-color: ${(props) => props.theme['purple-light']};
      box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
    }
  }
`
