import {
  FormAdressContainer,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputPostCode,
  InputState,
  InputStreet,
} from './styles'

export function FormAdress() {
  return (
    <FormAdressContainer>
      <InputPostCode placeholder="CEP" />
      <InputStreet placeholder="Rua" />
      <InputNumber placeholder="Número" />
      <InputComplement placeholder="Complemento" />
      <span>Opcional</span>
      <InputNeighborhood placeholder="Bairro" />
      <InputCity placeholder="Cidade" />
      <InputState placeholder="UF" />
    </FormAdressContainer>
  )
}
