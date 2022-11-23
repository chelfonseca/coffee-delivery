import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const OrderContainer = styled.div`
  width: 40rem;
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
  padding: 2.5rem;
  border-radius: 8px;
`
export const SelectedContainer = styled.div`
  width: 28rem;
  height: 32rem;
`
export const OrderHeader = styled.div`
  width: 35rem;
  height: 2.75rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 1.32rem;

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }
  p {
    color: ${(props) => props.theme['base-text']};
  }
`
export const FormAdress = styled.form`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: 2.625rem 2.625rem 2.625rem 2.625rem;
  grid-template-areas:
    'inputPostCode . .'
    'inputStreet inputStreet inputStreet'
    'inputNumber inputComplement inputComplement'
    'inputNeighborhood inputCity inputState';
  grid-gap: 1rem;
  justify-content: center;

  span {
    position: relative;
    top: 8rem;
    left: 18rem;
    font-size: 0.875rem;
    font-style: italic;
  }
`
const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  padding-left: 0.5rem;
  border: none;
  border-radius: 8px;
`
export const InputPostCode = styled(Input)`
  grid-area: inputPostCode;
`

export const InputStreet = styled(Input)`
  grid-area: inputStreet;
`
export const InputNumber = styled(Input)`
  grid-area: inputNumber;
`
export const InputComplement = styled(Input)`
  grid-area: inputComplement;

  :focus + span {
    display: none;
  }
`
export const InputNeighborhood = styled(Input)`
  grid-area: inputNeighborhood;
`
export const InputCity = styled(Input)`
  grid-area: inputCity;
`
export const InputState = styled(Input)`
  grid-area: inputState;
`
export const PaymentContainer = styled(OrderContainerMain)`
  height: 13rem;
  margin-top: 1rem;
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

    p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 0.75rem;
      text-transform: uppercase;
    }
  }
`
