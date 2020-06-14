import { GET_ALL_ORDERS} from '../actions/types';
const initialState = [];

export default function OrdersRedusers(state = initialState, action) {
    if (action.type === GET_ALL_ORDERS) {
        return action.payload;
    }
   

    return state;
}