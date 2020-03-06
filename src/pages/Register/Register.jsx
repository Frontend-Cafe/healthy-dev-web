import React from "react";
// Hooks
import { useFormik } from "formik";
// Styles
//import "./Register.scss";
// Components
import { Typography, Button, Grid, Container } from "@material-ui/core";

import FormikTextField from "../../components/FormikTextField/FormikTextField";

import RegisterSchema from "./RegisterSchema";

const Register = () => {
  const { handleSubmit, isSubmitting, handleBlur, handleChange, errors, touched, values } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: RegisterSchema,
    handleSubmit(values) {
      console.log(values);
    },
    validateOnChange: false,
  });
  return (
    <Container className="outer-container">
      <form className="inner-container" onSubmit={handleSubmit}>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item className="title-item">
            <Typography variant="h1">Bienvenide a Healthy Dev</Typography>
          </Grid>
          <Grid item className="name-item">
            <FormikTextField
              errorState={errors.name}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="Nombre"
              name="Nombre"
              placeholder="Nombre"
              touchedState={touched.name}
              valueState={values.name}
              variant="filled"
            />
          </Grid>
          <Grid item className="email-item">
            <FormikTextField
              errorState={errors.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="Email"
              name="Email"
              placeholder="Email"
              touchedState={touched.email}
              valueState={values.email}
              variant="filled"
            />
          </Grid>
          <Grid item className="password-item">
            <FormikTextField
              errorState={errors.password}
              handleBlur={handleBlur}
              handleChange={handleChange}
              id="Password"
              name="Password"
              placeholder="Password"
              touchedState={touched.password}
              valueState={values.password}
              variant="filled"
            />
          </Grid>
          <Grid item>
            <Button fullWidth className="button" disabled={isSubmitting} type="submit" variant="outlined">
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
