import React from "react";
import { NavLink,Switch, Route, Redirect } from "react-router-dom";

import LoginScreen from "../Components/Auth/LoginScreen";
import RegisterScreen from "../Components/Auth/RegisterScreen";


export const AuthRouter = () => {
 

  return (
    <div className="auth__main ">
      <div className="auth__card ">
        <div className="aut__directions">
          <NavLink activeClassName="active" to={"/auth/login"}>
            Login
          </NavLink>

          <NavLink activeClassName="active" to={"/auth/register"}>
            Register
          </NavLink>
        </div>

        <div className="container__form">
          <Switch>
            <Route path="/auth/login" component={LoginScreen} />

            <Route path="/auth/register" component={RegisterScreen} />

            <Redirect to="/auth/register" />
          </Switch>
        </div>
      </div>
    </div>
  );
};
