import { userTypes } from "../types";
import { auth, provider } from "../../firebase";
import db from "../../firebase";


export const getRealTimeUsers = (dispatch) => {

    const uid =  JSON.parse(localStorage.getItem("user")).uid;
  
    dispatch({ type: userTypes.GET_REALTIME_USERS_REQUEST });
  
    const unsubscribe = db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.map((doc) => {
        if (doc.id !== uid) {
          users.push(doc.data());
        }
      });
      dispatch({
        type: userTypes.GET_REALTIME_USERS_SUCCESS,
        payload: { users },
      });
    });
    return unsubscribe;
  };

  export const sendMessage = (msgObj, roomID) => async (dispatch) => {
    db.collection("rooms").doc(roomID).collection("messages").add(msgObj).then(
        () => {
            dispatch({type: userTypes.SEND_MESSAGE_SUCCESS})
        }
    ).catch(error => dispatch({type: userTypes.SEND_MESSAGE_FAILURE, payload: {error}}))
  }