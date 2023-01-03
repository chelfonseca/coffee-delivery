import { Order } from './Components/Order'
import { Selected } from './Components/Selected'
import { CheckoutContainer } from './styles'

import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'

const newAdressFormValidationSchema = zod.object({
  postCode: zod.string().regex(/^d{5}[-]?d{3}$/, 'Inform PostCode'),
  street: zod.string().min(1, 'Inform the street'),
  number: zod.string().min(1, 'Inform the street number '),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Inform the street'),
  city: zod.string().min(1, 'Inform the street'),
  state: zod.string().min(1, 'Inform the street').max(2),
})

export type NewAdreesFormData = zod.infer<typeof newAdressFormValidationSchema>

export function Checkout() {
  const { createNewAdress } = useContext(OrderContext)

  const newAdressForm = useForm<NewAdreesFormData>({
    resolver: zodResolver(newAdressFormValidationSchema),
    defaultValues: {
      postCode: '00000-000',
      street: ' ',
      number: '0',
      complement: '',
      neighborhood: ' ',
      city: ' ',
      state: 'SP',
    },
  })

  const { handleSubmit, reset } = newAdressForm
  function handleCreateNewAdress(data: NewAdreesFormData) {
    console.log(data)
    createNewAdress(data)
    reset()
  }
  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewAdress)} id="adressForm">
        <FormProvider {...newAdressForm}>
          <Order />
          <Selected />
        </FormProvider>
        <button type="submit">Teste</button>
      </form>
    </CheckoutContainer>
  )
}
