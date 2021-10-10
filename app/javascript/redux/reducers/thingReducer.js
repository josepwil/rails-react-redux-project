const initialState = {
  things: [
    {
      name: "test",
      guid: "123"
    }
  ]
}

export const thingReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case "GET_THINGS_SUCCESS":
      return {...state, things: action.payload.things }
    default:
      return state
  }
}