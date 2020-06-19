import { combineReducers } from "redux";
import foodsReducer from "./foodsReducers";
import UsersRedusers from "./UsersReducers";
import OrdersRedusers from "./OrdersReducers";
import SessionsReducers from "./sessionsReducers";

const allReducers = combineReducers({
  foods: foodsReducer,
  users: UsersRedusers,
  orders: OrdersRedusers,
  sessions: SessionsReducers,
});

export default allReducers;
