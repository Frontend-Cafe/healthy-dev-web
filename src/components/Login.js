import React from "react";
import { Link } from "react-router-dom";
import "../utils/styles/Login.css";
import { FilledInput } from "@material-ui/core";

function Login() {
  return (
    <div className="container">
      <div className="title_login">
        Bienvenide a <br /> Healthy Dev App
      </div>
      <div className="login_form">
        <form action="">
          <input className="input__info" placeholder="Email" type="email" />
          <p className="assistive_text">Assistive text</p>
          <input
            className="input__info"
            placeholder="Password"
            type="password"
          />
          <p className="assistive_text">Assistive text</p>
          <input className="btn_submit" type="submit" value="LOGIN" />
          <Link className="forgot_pass" to={"/"}>
            ¿Olvidaste tu Password?
          </Link>{" "}
          <br />
          <Link className="signup" to={"/"}>
            CREAR CUENTA
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
