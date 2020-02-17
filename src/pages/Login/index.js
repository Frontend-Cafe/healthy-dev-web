import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  Box,
  IconButton,
  FilledInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { spacing } from "@material-ui/system";

import "./index.css";

const LoginMaterial = () => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <>
      <Grid container direction="column" justify="center" spacing={0}>
        <Box pl={"1rem"} pr={"1rem"}>
          <Grid item xs={12}>
            <Box mb={2} mt={2}>
              <img
                alt=""
                className="img-profile"
                src="https://i.pinimg.com/originals/eb/4f/36/eb4f36bdc51ec00a2efec3f065bf986b.jpg"
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              className="title-name"
              component="h2"
              variant="subtitle1"
            >
              <Box
                fontWeight="fontWeightBold"
                letterSpacing={1}
                textAlign="center"
              >
                Bienvenide a
              </Box>
              <Box fontWeight="fontWeightBold" mb={2.5} textAlign="center">
                Healthy Dev
              </Box>
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box mb={1}>
              <TextField
                autoComplete="current-email"
                className="email-input"
                helperText="Assistive text"
                id="filled-password-input"
                label="Email"
                type="email"
                variant="filled"
              />

              <FormControl className="form-control-input" variant="filled">
                <InputLabel htmlFor="filled-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  id="filled-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                />
                <FormHelperText id="filled-weight-helper-text">
                  Assistive Text
                </FormHelperText>
              </FormControl>
            </Box>
          </Grid>

          <Grid item className="form-bottom-login" xs={12}>
            <Box mt={3}>
              <Button className="login-button" variant="contained" width="100%">
                LOGIN
              </Button>
              <Typography component="h2" variant="caption">
                <Link color="inherit" href="#">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Typography>
              <Box mt={1}>
                <Typography align="center" variant="button">
                  <Link color="inherit" href="#">
                    CREAR CUENTA
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default LoginMaterial;
