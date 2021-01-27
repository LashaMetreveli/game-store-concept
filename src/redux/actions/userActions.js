import * as type from "../types/user-types";
import { startLoading, finishLoading } from "./commonActions";
import { auth } from "../../firebase";

export const detError = (error) => ({
  type: type.DET_ERROR,
  payload: error,
});

export const signIn = (credentials) => ({
  type: type.LOG_IN,
  payload: credentials,
});

export const signUp = (credentials) => ({
  type: type.SIGN_UP,
  payload: credentials,
});

export const logOut = () => ({
  type: type.LOG_OUT,
});

export const logInAsync = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(signIn(userCredential));
        dispatch(finishLoading());
        dispatch(detError(null));
      })
      .catch((error) => {
        dispatch(detError(error.message));
        dispatch(finishLoading());
      });
  };
};

export const signupAsync = (email, password, username) => {
  return (dispatch) => {
    dispatch(startLoading());
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        dispatch(signUp(authUser));
        dispatch(finishLoading());
        dispatch(detError(null));
        authUser.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => {
        dispatch(detError(error.message));
        dispatch(finishLoading());
      });
  };
};

export const logOutAsync = () => {
  return (dispatch) => {
    return auth.signOut().then(() => {
      dispatch(logOut());
    });
  };
};
