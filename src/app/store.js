import { createStore, combineReducers} from "redux";
import pizzaReducer from "./PizzaReducer";

const appCombineReducer = combineReducers({
    reducer : pizzaReducer
})

const store = createStore(appCombineReducer);

export default store;

