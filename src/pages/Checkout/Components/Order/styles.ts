import { VARIANT_COLOR, VariantColorProps } from '../../../../styles/variants'

import styled from 'styled-components'

export const OrderContainer = styled.div`
  width: 40.5rem;
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
  padding: 2.5rem 0 0;
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
