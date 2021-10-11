const initialState = {
  teamOne: 0, 
  teamTwo: 0
}

export const scoreReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case "INCREMENT_SCORE":
      if (action.payload === "teamOne") {
        return {...state, teamOne: state.teamOne + 1}
      } else {
        return {...state, teamTwo: state.teamTwo + 1}
      }
    default:
      return state
  }
}