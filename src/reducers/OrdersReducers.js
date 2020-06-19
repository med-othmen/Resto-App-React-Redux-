import { GET_ALL_ORDERS,ACCEPT_ORDER } from '../actions/types';
const initialState = [];

export default function OrdersRedusers(state = initialState, action) {
    if (action.type === GET_ALL_ORDERS) {
        return action.payload;
    }
    if (action.type === ACCEPT_ORDER) {
        return action.payload;
      }

    return state;
}