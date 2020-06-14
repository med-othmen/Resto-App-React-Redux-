import { GET_ALL_FOODS,ADD_FOOD,DELETE_FOOD,EDIT_FOOD } from '../actions/types';
const initialState = [];

export default function foodsReducers(state = initialState, action) {
    if (action.type === GET_ALL_FOODS) {
        return action.payload;
    }
    if (action.type === ADD_FOOD) {
        return [...state,action.payload];
      }

      if (action.type === DELETE_FOOD) {
        return state.filter((food) => food.id !== action.payload);
      }

      if (action.type === EDIT_FOOD) {
        return action.payload;
      }

    return state;
}
