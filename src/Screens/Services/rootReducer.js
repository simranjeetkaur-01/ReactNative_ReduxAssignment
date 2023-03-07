import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "./Cart/reducer";

const store = createStore(cartReducer, applyMiddleware(thunk));

export default store;
