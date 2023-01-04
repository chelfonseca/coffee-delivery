// import { useContext } from 'react'
// import { OrderContext } from '../../../../../../contexts/OrderContext'
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
import { useFormContext } from 'react-hook-form'
// import { FormProvider, useForm } from 'react-hook-form'
// import * as zod from 'zod'
// import { zodResolver } from '@hookform/resolvers/zod'

// const newAdressFormValidationSchema = zod.object({
//   postCode: zod.string().regex(/^d{5}[-]?d{3}$/, 'Inform PostCode'),
//   street: zod.string().min(1, 'Inform the street'),
//   number: zod.string().min(1, 'Inform the street number '),
//   complement: zod.string(),
//   neighborhood: zod.string().min(1, 'Inform the street'),
//   city: zod.string().min(1, 'Inform the street'),
//   state: zod.string().min(1, 'Inform the street').max(2),
// })

// export type NewAdreesFormData = zod.infer<typeof newAdressFormValidationSchema>

export function FormAdress() {
  // const { createNewAdress } = useContext(OrderContext)

  // const newAdressForm = useForm<NewAdreesFormData>({
  //   resolver: zodResolver(newAdressFormValidationSchema),
  //   defaultValues: {
  //     postCode: '00000-000',
  //     street: ' ',
  //     number: '0',
  //     complement: '',
  //     neighborhood: ' ',
  //     city: ' ',
  //     state: 'SP',
  //   },
  // })

  // const { handleSubmit, reset } = newAdressForm
  // function handleCreateNewAdress(data: NewAdreesFormData) {
  //   console.log(data)
  //   createNewAdress(data)
  //   reset()
  // }
  const { register } = useFormContext()

  return (
    <FormAdressContainer
    // onSubmit={handleSubmit(handleCreateNewAdress)}
    // id="adressForm"
    >
      {/* <FormProvider {...newAdressForm}> */}
      <InputPostCode
        placeholder="00000-000"
        id="postCode"
        {...register('postCode')}
      />
      <InputStreet placeholder="Rua" id="street" {...register('street')} />
      <InputNumber placeholder="Número" id="number" {...register('number')} />
      <InputComplement
        placeholder="Complemento"
        id="complement"
        {...register('complement')}
      />
      <span>Opcional</span>
      <InputNeighborhood
        placeholder="Bairro"
        id="neighborhood"
        {...register('neighborhood')}
      />
      <InputCity placeholder="Cidade" id="city" {...register('city')} />
      <InputState placeholder="UF" id="state" {...register('state')} />
      {/* </FormProvider> */}
      {/* <button type="submit">Teste</button> */}
    </FormAdressContainer>
  )
}
