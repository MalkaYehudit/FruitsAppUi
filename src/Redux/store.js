import { applyMiddleware, createStore } from "redux";
import { allReducers } from "./Reducer";

const store = createStore (
    allReducers

)
store.getState();
export default store
