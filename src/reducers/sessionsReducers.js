import { GET_ALL_SESSION } from "../actions/types";
const initialState = [];

export default function SessionsRedusers(state = initialState, action) {
  if (action.type === GET_ALL_SESSION) {
    return action.payload;
  }

  return state;
}
