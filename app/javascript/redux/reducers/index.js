import { combineReducers } from "redux";
import { thingReducer } from "./thingReducer";

const reducers = combineReducers({
  allThings: thingReducer,
});

export default reducers;