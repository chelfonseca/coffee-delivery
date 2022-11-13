import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['base-card']};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 0 1rem;
  text-align: center;

  img {
    position: relative;
    top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      border-radius: 2rem;
      padding: 0.35rem 0.5rem;
      font-size: 0.625rem;
      font-weight: 700;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      text-transform: uppercase;
      position: relative;
      top: -1rem;
    }
  }
  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    text-transform: capitalize;
  }
  p {
    font-size: 0.875rem;
    margin-top: 0.5rem;
    line-height: 130%;
  }
`
