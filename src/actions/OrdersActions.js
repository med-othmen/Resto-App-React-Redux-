import { GET_ALL_ORDERS, ADD_ORDER, DELETE_ORDER, ACCEPT_ORDER } from "./types";
import Axios from "axios";

/* get all orders */

export const getAllOrders = (payload) => ({
  type: GET_ALL_ORDERS,
  payload,
});

export function getOrdersFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/Orders").then((res) =>
      dispatch(getAllOrders(res.data))
    );
}

// add  order 

export const addOrder = (payload) => ({
  type: ADD_ORDER,
  payload,
});

export function postOrderInApi(order) {
  return (dispatch) =>
    Axios.post("http://localhost:3000/Orders", order).then((res) => {
      dispatch(addOrder(res.data));
      window.location.reload();
    });
}

// delete order

export const deleteOrder = (payload) => ({
  type: DELETE_ORDER,
  payload,
});

export function DeleteORderfromApi(id) {
  return (dispatch) => {
    Axios.delete("http://localhost:3000/Orders/" + id).then((res) => {
      console.log(res.data);
    });
    window.location.reload();
  };
}

// ACCEPT ORDER

export const acceptOrder = (payload) => ({
  type: ACCEPT_ORDER,
  payload,
});

export function EditStatusOfOrderInApi(order, id) {
  return (dispatch) =>
    Axios.patch(`http://localhost:3000/Orders/${id}`, order).then((res) => {
      console.log("voila ", res.data);
      window.location.reload();
    });
}
