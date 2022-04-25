import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

function LoginScreen() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "asto@hot.com",
    password: "yajhura12",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(email, password));
  };

  const handleLoginGoogle = () => {
    dispatch(startGoogleLogin());
  };

  return (
    <div className="animate__animated  animate__fadeInRightBig  animate__fast	">
      <form
        onSubmit={handleLogin}
        className="login__form login__content"
        action=""
      >
        <div className="login__content">
          <div className="input__container">
            <input
              name="email"
              value={email}
              autoComplete="off"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
            />
            <i className="fa-solid fa-user"></i>
          </div>

          <div className="input__container">
            <input
              name="password"
              value={password}
              onChange={handleInputChange}
              type="password"
              autoComplete="off"
              placeholder="password"
            />
            <i className="fa-solid fa-lock"></i>
          </div>

          <button type="submit" className="btn" disabled={loading}>
            Ingresar
          </button>

          <p>or</p>
          <div onClick={handleLoginGoogle} className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginScreen;
