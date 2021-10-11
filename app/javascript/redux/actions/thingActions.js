import { actionTypes } from '../constants/actionTypes'

export const getThingsSuccess = (things) => {
  console.log(things)
  return {
    type: actionTypes.GET_THINGS_SUCCESS,
    payload: things
  }
}

export const getWordRequest = (word) => {
  return {
    type: actionTypes.GET_WORD_REQUEST,
    payload: word
  }
}

export const incrementScoreAction = (team) => {
  return {
    type: actionTypes.INCREMENT_SCORE,
    payload: team
  }
}