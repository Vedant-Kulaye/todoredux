import { createStore } from "redux";
import rootreducers from "./CombineReducers";

const Store=createStore(rootreducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

export default Store 


