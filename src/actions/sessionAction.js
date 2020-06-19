import { ADD_SESSION, GET_ALL_SESSION } from "./types";
import Axios from "axios";

/* add  session */

export const addSession = (payload) => ({
  type: ADD_SESSION,
  payload,
});

export function postSessionInApi(session) {
  return (dispatch) => {
    Axios.post("http://localhost:3000/sessions", session).then((res) => {
      dispatch(addSession(session));
    });
  };
}
// Get all sessions

export const getAllSessions = (payload) => ({
  type: GET_ALL_SESSION,
  payload,
});

export function getSessionsFromApi() {
  return (dispatch) =>
    Axios.get("http://localhost:3000/sessions").then((res) =>
      dispatch(getAllSessions(res.data))
    );
}
