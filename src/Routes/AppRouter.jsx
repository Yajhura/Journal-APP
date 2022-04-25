import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import JournalScreen from "../Components/JournalScreen";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        dispatch(startLoadingNotes(user.uid));

        setIsLogged(true);
      } else {
        setIsLogged(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <h1>loading...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isLogged={isLogged}
            path="/auth"
            component={AuthRouter}
          />

          <PrivateRoute
            exact
            isLogged={isLogged}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
