import { combineReducers } from 'redux';
import foodsReducer from './foodsReducers';
import UsersRedusers from './UsersReducers'
import OrdersRedusers from './OrdersReducers'

const allReducers = combineReducers({
  foods: foodsReducer,
  users:UsersRedusers,
  orders:OrdersRedusers
});

export default allReducers;
