import styled from 'styled-components'

export const CounterContainer = styled.div`
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
