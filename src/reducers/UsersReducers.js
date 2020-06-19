import { GET_ALL_USERS, ADD_USER } from "../actions/types";
const initialState = [];

export default function UsersRedusers(state = initialState, action) {
  if (action.type === GET_ALL_USERS) {
    return action.payload;
  }

  if (action.type === ADD_USER) {
    return [...state, action.payload];
  }

  return state;
}
