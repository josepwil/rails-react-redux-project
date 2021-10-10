import { actionTypes } from '../constants/actionTypes'

export const getThingsSuccess = (things) => {
  console.log(things)
  return {
    type: actionTypes.GET_THINGS_SUCCESS,
    payload: things
  }
}