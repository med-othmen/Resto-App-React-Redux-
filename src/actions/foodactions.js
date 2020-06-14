import { GET_ALL_FOODS, ADD_FOOD, EDIT_FOOD } from './types';
import Axios from 'axios';

/* get all FOODS */

export const getAllFoods = (payload) => ({
  type: GET_ALL_FOODS,
  payload,
});

export function getFoodsFromApi() {
  return (dispatch) =>
    Axios.get('http://localhost:3000/foods').then((res) =>
      dispatch(getAllFoods(res.data))
    );
}

/* add  food */
export const addFood = (payload) => ({
  type: ADD_FOOD,
  payload,

});

export function postFoodInApi(food) {
  return (dispatch) => {
    Axios.post('http://localhost:3000/foods', food)
      .then((res) => {
        dispatch(addFood(food));
      }
      );
    window.location.reload(false)
  }
}

/* delete  food */
export const deleteFood = (payload) => ({
  type: ADD_FOOD,
  payload,

});

export function DeletefromAPI(id) {
  return (dispatch) => {
    Axios.delete('http://localhost:3000/foods/' + id)
      .then((res) => {
      }
      );
    window.location.reload(false)
  }
}

/* edit food */
export const editFood = (payload) => ({
  type: EDIT_FOOD,
  payload,

});

export function editInApi(el, id) {
  return (dispatch) =>
    Axios.put(`http://localhost:3000/foods/${id}`, el)
      .then((res) => {
        console.log(res.data)
        window.location.reload()
      }
      );
}


