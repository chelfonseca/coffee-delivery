import styled from 'styled-components'

export const ActionContainer = styled.div`
  width: 100%;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const Counter = styled.div`
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

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 100;
    padding: 0;
    margin: 0 0.5rem;
    text-align: center;
  }

  div {
    :hover {
      color: ${(props) => props.theme['base-title']};
    }
  }
`
export const Add = styled.button`
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
`
export const Remove = styled.button`
  width: 5.7rem;
  height: 2rem;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  gap: 0.2rem;
  padding-left: 0.3rem;

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
`
