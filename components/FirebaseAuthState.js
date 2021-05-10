import React, { useEffect, useContext } from "react";
import firebase from "../firebase";
import { UserContext } from "../context/user/index";
import { userTypes } from "../context/types";

const FirebaseAuthState = ({ children }) => {
  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        dispatch({
          type: userTypes.LOGOUT,
        });
      } else {
        const { token } = await user.getIdTokenResult()
        console.log(token)
        // send this token to backend
        // backend will check if this token is valid (using firebase admin tool)
        // if it's verified, you get the same user info in the backend too
        // then you can decide to either save this user in your db or update the existing user
        // then send the user info back to client
/*         dispatch({
          type: userTypes.LOGIN,
          payload: user,
        }); */
      }
    });
  }, []);

  return <>{children}</>;
};

export default FirebaseAuthState;
