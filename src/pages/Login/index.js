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
  FormControl,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons"
import { spacing } from "@material-ui/system";

import "./index.css";

const LoginMaterial = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
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
      <Grid
        container
        direction="column"
        justify="center"
        spacing={0}
        style={{
          minHeight: "100vh",
          background: "#112045",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          color: "#fff"
        }}
      >
        <Grid item xs={12}>
          <Box mb={2} mt={2}>
            <img
              alt=""
              src="https://i.pinimg.com/originals/eb/4f/36/eb4f36bdc51ec00a2efec3f065bf986b.jpg"
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography
            component="h2"
            style={{ color: "#FFF" }}
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
              helperText="Assistive text"
              id="filled-password-input"
              label="Email"
              style={{ width: "100%" }}
              type="email"
              variant="filled"
            />

            <FormControl
              style={{ width: "100%", marginTop: "0.5rem" }}
              variant="filled"
            >
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
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                id="filled-adornment-password"
                style={{ background: "#FFF" }}
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
              />
              <FormHelperText
                id="filled-weight-helper-text"
                style={{ color: "gray" }}
              >
                Assistive Text
              </FormHelperText>
            </FormControl>
          </Box>
        </Grid>

        <Grid item style={{ textAlign: "center" }} xs={12}>
          <Box mt={3}>
            <Button
              color="primary"
              style={{
                background: "#26B0A1",
                borderRadius: "1rem",
                width: "100%"
              }}
              variant="contained"
              width="100%"
            >
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
      </Grid>
    </>
  );
};

export default LoginMaterial;
