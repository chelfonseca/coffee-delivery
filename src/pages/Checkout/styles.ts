import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid ${(props) => props.theme['purple-dark']};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const OrderContainer = styled.div`
  width: 40rem;
  height: 37rem;
  border: 2px solid ${(props) => props.theme.purple};
  display: flex;
  flex-direction: column;
  div {
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme['base-card']};
  }
`
export const SelectedContainer = styled.div`
  width: 28rem;
  height: 32rem;
  border: 2px solid ${(props) => props.theme.purple};
`
export const OrderHeader = styled.div`
  width: 100%;
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
`
const Input = styled.input`
  background-color: ${(props) => props.theme['base-input']};
`
export const InputPostCode = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputPostCode;
`

export const InputStreet = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputStreet;
`
export const InputNumber = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputNumber;
`
export const InputComplement = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputComplement;
`
export const InputNeighborhood = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputNeighborhood;
`
export const InputCity = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputCity;
`
export const InputState = styled(Input)`
  border: 2px solid ${(props) => props.theme['base-text']};
  grid-area: inputState;
`
