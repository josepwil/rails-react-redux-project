import { combineReducers } from "redux";
import { thingReducer } from "./thingReducer";
import { scoreReducer } from "./scoreReducer";

const reducers = combineReducers({
  allThings: thingReducer,
  scoreReducer: scoreReducer,
});

export default reducers;