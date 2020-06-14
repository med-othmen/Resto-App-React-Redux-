import { GET_ALL_ORDERS, ADD_ORDER } from './types';
import Axios from 'axios';

/* get all USERS */

export const getAllOrders = (payload) => ({
    type: GET_ALL_ORDERS,
    payload,
});

export function getOrdersFromApi() {
    return (dispatch) =>
        Axios.get('http://localhost:3000/Orders').then((res) =>
            dispatch(getAllOrders(res.data))
        );
}


/* add  order */
export const addOrder = (payload) => ({
    type: ADD_ORDER,
    payload,

});

export function postOrderInApi(order) {
    return (dispatch) =>
        Axios.post('http://localhost:3000/Orders',order).then((res) => {
            dispatch(addOrder(res.data));
           window.location.reload()
        }
        );

}