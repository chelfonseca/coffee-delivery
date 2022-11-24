import styled from 'styled-components'

export const BuyContainer = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  button {
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.background};
    border: none;
    border-radius: 8px;
    transition: background-color 0.5s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme.purple};
    }
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 1.5rem 0 0.5rem;
  }
`
