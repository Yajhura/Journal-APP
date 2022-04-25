import Swal from "sweetalert2";
import { googleAuthProvider, firebase } from "../firebase/firebase-config";
import { types } from "../types/AuthTypes";
import { notesLogout } from "./notes";
import { removeLoading, setLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(setLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (user) => {
        await dispatch(login(user.user.uid, user.user.displayName));

        dispatch(removeLoading());
      })
      .catch((error) => {
        dispatch(removeLoading());
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          customClass: "swal-wide",
        });
      });
  };
};

export const registerwithEmailPassword = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          customClass: "swal-wide",
        });
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        const { displayName, uid } = user;
        dispatch(login(uid, displayName));
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
          customClass: "swal-wide",
        });
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.LOGGIN,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: types.LOGOUT,
});
