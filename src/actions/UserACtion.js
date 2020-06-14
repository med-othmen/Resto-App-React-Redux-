import { GET_ALL_USERS,ADD_USER,DELETE_USER } from './types';
import Axios from 'axios';

/* get all USERS */

export const getAllUsers = (payload) => ({
    type: GET_ALL_USERS,
    payload,
});

export function getUsersFromApi() {
    return (dispatch) =>
        Axios.get('http://localhost:3000/Users').then((res) =>
            dispatch(getAllUsers(res.data))
        );
}
/* user  food */
export const addUser = (payload) => ({
    type: ADD_USER,
    payload,
    
  });
  
  export function postUserInApi(user) {
    return (dispatch) =>
   { Axios.post('http://localhost:3000/Users',user)
    .then((res) =>
     { dispatch(addUser(user));
      }
    );
    window.location.reload(false)}
  }
  
  /* delete  user */
export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,

});

export function DeleteUserAPI(id) {
  return (dispatch) => {
    Axios.delete('http://localhost:3000/Users/' + id)
      .then((res) => {
      }
      );
    window.location.reload(false)
  }
}
