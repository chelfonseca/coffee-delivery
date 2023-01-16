import { NewAdressFormData } from '../../pages/Checkout/Components/Order/Components/FormAdress'
// import { Coffee, Item, Order, DeliveryInfo } from './reducer'

export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  CREATE_NEW_ADRESS = 'CREATE_NEW_ADRESS',
}

export function updateCartAction(idProduct: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      idProduct,
      quantity,
    },
  }
}

export function removeFromCartAction(idProduct: string) {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: {
      idProduct,
    },
  }
}

export function createNewAdressAction(dataForm: NewAdressFormData) {
  return {
    type: ActionTypes.CREATE_NEW_ADRESS,
    payload: {
      dataForm,
    },
  }
}
