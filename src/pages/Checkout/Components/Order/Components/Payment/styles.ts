import styled from 'styled-components'

export const PaymentContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 13rem;
  background-color: ${(props) => props.theme['base-card']};
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 8px;
  font-size: 1.32rem;
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
