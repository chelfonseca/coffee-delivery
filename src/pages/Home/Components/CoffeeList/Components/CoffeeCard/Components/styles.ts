import styled, { withTheme } from 'styled-components'

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
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};
    border: none;
    border-radius: 10%;
  }

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin: 0 2rem 0 0.5rem;
  }
`
export const AddButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme.purple};
  border: 2px solid black;
  margin-right: 0.5rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
