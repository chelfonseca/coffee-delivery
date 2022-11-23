import styled from 'styled-components'

export const SelectedContainer = styled.div`
  width: 28rem;
  height: 32rem;
  font-size: 1.32rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    margin: 1rem 0;
  }
`
export const SelectedContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-bottom-left-radius: 10%;
  border-top-right-radius: 10%;

  div {
    width: 23rem;
    height: 5rem;
    border: 2px solid black;
  }

  hr {
    width: 100%;
    margin: 2rem 0;
    border: 1px solid ${(props) => props.theme['base-button']};
  }

  table {
    width: 100%;
    border-spacing: 1rem;

    tbody {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-text']};
    }
    tfoot {
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    td,
    th {
      &:first-child {
        text-align: left;
      }

      &:last-child {
        text-align: right;
      }
    }
  }

  button {
    width: 23rem;
    height: 2.9rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.white};
    margin-top: 2rem;
    border: none;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
    box-shadow: none;
    transition: background-color 0.5s ease-in-out;

    :hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`
