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
export const AddButton = styled.div`
  width: 4.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  margin-right: 0.5rem;
  border-radius: 8px;
  transition: background-color 0.5s ease-in-out;

  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    padding: 0;
    margin: 0 0.5rem;
  }

  div {
    :hover {
      color: ${(props) => props.theme['base-title']};
    }
  }
`
