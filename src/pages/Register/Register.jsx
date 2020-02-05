import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { useTheme } from "@material-ui/core";
import { Typography, Button, Grid, TextField, FormHelperText, Container } from "@material-ui/core";
//Styles
import "./Register.scss";

const Register = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Container className="outer-container">
      <Form className="inner-container">
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item className="title-item">
            <Typography variant="h1">Bienvenide a Healthy Dev</Typography>
          </Grid>
          <Grid item className="name-item">
            <TextField
              fullWidth
              required
              aria-describedby="Nombre"
              id="name"
              name="name"
              placeholder="Nombre"
              value={values.name}
              variant="filled"
            />
          </Grid>
          <Grid item className="email-item">
            <TextField
              fullWidth
              required
              aria-describedby="Email"
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              variant="filled"
            />
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Crear Password"
              id="password"
              name="password"
              placeholder="Crear Password"
              type="password"
              value={values.password}
              variant="filled"
            />
          </Grid>
          <Grid item>
            <Button fullWidth className="button" color="secondary" type="submit" variant="outlined">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Container>
  );
};

const FormikRegister = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
    };
  },
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values);
  },
})(Register);

export default FormikRegister;
