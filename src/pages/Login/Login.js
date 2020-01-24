import React from "react";
import { Link } from "react-router-dom";
import "./sass/Login.css";
import { IconButton, FilledInput, InputLabel, InputAdornment, FormControl, TextField, Button } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className="container">
      <div className="title_login">
        Bienvenide a <br /> Healthy Dev App
      </div>
      <div className="login_form">
        <form action="">
          <div className="email_input">
            <TextField id="filled-size-normal" label="Email" variant="filled" />
            <p className="assistive_text" id="assistive_id">
              Assistive text
            </p>
          </div>
          <FormControl className="password_input" variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
            <FilledInput
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              id="filled-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
            />
            <p className="assistive_text">Assistive text</p>
          </FormControl>
          <Button className="btn_submit" variant="contained">
            LOGIN
          </Button>
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
};

export default Login;
