import { combineReducers } from "redux";
import { positionReducer } from "./postions/positions-reducer";
import { filterReducer } from "./filters/filters-reducer";

export const rootReducer = combineReducers({
  positions: positionReducer,
  filters: filterReducer
});