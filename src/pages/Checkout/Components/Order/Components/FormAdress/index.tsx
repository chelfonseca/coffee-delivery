import { useContext } from 'react'
import { OrderContext } from '../../../../../../contexts/OrderContext'
import {
  FormContainer,
  FormAdressContainer,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputPostCode,
  InputState,
  InputStreet,
} from './styles'

import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Payment } from '../Payment'

// import { Payment } from '../Payment'

const newAdressFormValidationSchema = zod.object({
  // postCode: zod.string().regex(/^d{5}[-]?d{3}$/, 'Inform PostCode'),
  postCode: zod.string().min(1, 'Inform PostCode'),
  street: zod.string().min(1, 'Inform the street'),
  number: zod.string().min(1, 'Inform the street number '),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Inform the street'),
  city: zod.string().min(1, 'Inform the street'),
  state: zod.string().min(1, 'Inform state').max(2),
  payment: zod.string(),
})

export type NewAdressFormData = zod.infer<typeof newAdressFormValidationSchema>

export function FormAdress() {
  const { createNewAdress } = useContext(OrderContext)

  const newAdressForm = useForm<NewAdressFormData>({
    resolver: zodResolver(newAdressFormValidationSchema),
    // defaultValues: {
    //   postCode: '00000-000',
    //   street: ' Avenida Brasil ',
    //   number: '500',
    //   complement: '8',
    //   neighborhood: 'Barra',
    //   city: 'São Paulo ',
    //   state: 'SP',
    // },
  })

  const { handleSubmit, reset, register } = newAdressForm
  function handleCreateNewAdress(data: NewAdressFormData) {
    console.log(data)
    createNewAdress(data)
    reset()
  }

  return (
    <FormContainer
      onSubmit={handleSubmit(handleCreateNewAdress)}
      id="adressForm"
    >
      <FormAdressContainer>
        <InputPostCode
          placeholder="00000-000"
          id="postCode"
          required
          {...register('postCode')}
        />
        <InputStreet
          placeholder="Rua"
          id="street"
          required
          {...register('street')}
        />
        <InputNumber
          placeholder="Número"
          id="number"
          required
          {...register('number')}
        />
        <InputComplement
          placeholder="Complemento"
          id="complement"
          {...register('complement')}
        />
        <span>Opcional</span>
        <InputNeighborhood
          placeholder="Bairro"
          id="neighborhood"
          required
          {...register('neighborhood')}
        />
        <InputCity
          placeholder="Cidade"
          id="city"
          required
          {...register('city')}
        />
        <InputState
          placeholder="UF"
          id="state"
          required
          {...register('state')}
        />
      </FormAdressContainer>

      <FormProvider {...newAdressForm}>
        <Payment />
      </FormProvider>
    </FormContainer>
  )
}
