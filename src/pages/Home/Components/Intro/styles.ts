import styled from 'styled-components'
import { VARIANT_COLOR, VariantColorProps } from '../../../../styles/variants'

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 34rem;
  padding: 5.75rem 0 5.75rem 0;
  margin: 0;
`

export const IntroInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`
export const IntroImage = styled.div`
  display: flex;
  margin: 0;
  padding: 0;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`
export const IntroInfoText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 36.75rem;
  margin: 0;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    margin: 0;
  }
  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const IntroInfoList = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 5.25rem;

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const IntroInfoListItem = styled.span<VariantColorProps>`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1rem;
  width: 18rem;

  div {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[VARIANT_COLOR[props.variantColor]]};
    color: ${(props) => props.theme.background};
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
