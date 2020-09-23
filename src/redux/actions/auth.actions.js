import { authTypes } from "../types";
import { auth, provider } from "../../firebase";
import db from "../../firebase";
// import { dispatch } from "../store";

export const signInWithGoogle = (dispatch) => {
  dispatch({ type: authTypes.SIGN_IN_REQUEST });
  //   dispatch(authTypes.SIGN_IN_REQUEST)
  auth
    .signInWithPopup(provider)
    .then((result) => {
      let user = result.user.providerData[0];
      db.collection("users")
        .doc(user.uid)
        .set({ ...user, isOnline: true })
        .then(() => {
          localStorage.setItem("user", JSON.stringify(user))
          dispatch({ type: authTypes.SIGN_IN_SUCCESS, payload: {user: user} });
        })
        .catch((e) => alert(e));
    }).catch((error) => {
        dispatch({type: authTypes.SIGN_IN_FAILURE, payload: {error}})
    });
};


export const signout = (uid) => async (dispatch) => {
    db.collection("users")
      .doc(uid)
      .update({ isOnline: false })
      .then(() => {
        auth
          .signOut()
          .then(function () {
            // Sign-out successful.
  
            dispatch({ type: "LOGOUT_SUCCESS" });
            localStorage.clear();
          });
      })
      .catch((error) => {
        // localStorage.clear();
        console.log(error)
        dispatch({
          type: "LOGOUT_ERROR",
          payload: { error },
        });
      });
  };