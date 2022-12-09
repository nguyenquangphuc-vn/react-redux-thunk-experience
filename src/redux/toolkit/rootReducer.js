import { combineReducers } from "redux";
import { counterSlice } from "./counter";

export const rootReducer = combineReducers(
  {
    counter: counterSlice.reducer
  }
)