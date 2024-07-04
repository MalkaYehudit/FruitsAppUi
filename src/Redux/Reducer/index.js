import { combineReducers } from "redux";
// import { productReducer } from "./ProductReduce";
import { userReducer } from "./reducer";

export const allReducers = combineReducers({
    useReducer: userReducer
    // productReducer: productReducer
})
