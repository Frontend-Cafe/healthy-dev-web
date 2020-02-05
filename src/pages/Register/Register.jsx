import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { Typography, Button, Grid, TextField, Container, FormHelperText } from "@material-ui/core";
//Styles
import "./Register.scss";

const Register = ({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => {
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
              error={touched.name && errors.name}
              id="name"
              name="name"
              placeholder="Nombre"
              value={values.name}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={touched.name && errors.name} variant="filled">
              {touched.name && errors.name}
            </FormHelperText>
          </Grid>
          <Grid item className="email-item">
            <TextField
              fullWidth
              required
              aria-describedby="Email"
              error={touched.email && errors.email}
              id="email"
              name="email"
              placeholder="Email"
              value={values.email}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={touched.email && errors.email} variant="filled">
              {touched.email && errors.email}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Crear Password"
              error={touched.password && errors.password}
              id="password"
              name="password"
              placeholder="Crear Password"
              type="password"
              value={values.password}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={touched.password && errors.password} variant="filled">
              {touched.password && errors.password}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              className="button"
              color="secondary"
              disabled={isSubmitting}
              type="submit"
              variant="outlined"
            >
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
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Por favor ingrese un nombre")
      .min(3, "Mínimo 3 caracteres."),
    email: Yup.string()
      .email("Ingrese un email válido.")
      .required("Campo obligatorio."),
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres.")
      .required("Campo obligatorio."),
  }),
  handleSubmit(values) {
    console.log(values);
  },
})(Register);

export default FormikRegister;
