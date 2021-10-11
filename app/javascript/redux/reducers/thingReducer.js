const initialState = {
  things: [
    {
      name: "test",
      guid: "123"
    }
  ],
  word: '',
}

export const thingReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return {...state, things: action.payload.things}
    case "GET_WORD_REQUEST":
      return {...state, word: action.payload}
    default:
      return state
  }
}