import React from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { registerwithEmailPassword } from "../../actions/auth";

const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const Message = useSelector((state) => state.ui.msgError);
 

  const { username, email, password, password2 } = formValues;

  const isFormValid = () => {
    if (username.trim() === "") {
      dispatch(setError("Username is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is invalid"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("Passwords do not match"));
      return false;
    } else if (password.trim() === "" || password.length < 6) {
      dispatch(setError("Password must be at least 5 characters"));
      return false;
    }

    dispatch(removeError());
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(registerwithEmailPassword( email, password, username));
    }
  };

  return (
    <div className="animate__animated animate__fadeInLeftBig animate__fast 	">
      {Message && <p className="Error">{Message}</p>}
      <form onSubmit={handleRegister} className="login__form  " action="">
        <div className="input__container">
          <input
            value={username}
            type="text"
            name="username"
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Username"
          />
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="input__container">
          <input
            value={email}
            type="email"
            name="email"
            autoComplete="off"
            autoCorrect="off"
            onChange={handleInputChange}
            placeholder="Email"
          />
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div className="input__container">
          <input
            value={password}
            onChange={handleInputChange}
            type="password"
            autoComplete="off"
            name="password"
            placeholder="Password"
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <div className="input__container">
          <input
            value={password2}
            autoComplete="off"
            type="password"
            name="password2"
            placeholder="Confirm password"
            onChange={handleInputChange}
          />
          <i className="fa-solid fa-lock"></i>
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterScreen;
