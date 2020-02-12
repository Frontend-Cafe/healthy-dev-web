import React from "react";
// Hooks
import { useFormik } from "formik";
// Styles
import "./Register.scss";
// Components
import { Typography, Button, Grid, TextField, Container, FormHelperText } from "@material-ui/core";

import RegisterSchema from "./RegisterSchema";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    initialErrors: {
      name: false,
      email: false,
      password: false,
    },
    initialTouched: {
      name: false,
      email: false,
      password: false,
    },
    validationSchema: RegisterSchema,
    handleSubmit(values) {
      console.log(values);
    },
  });
  return (
    <Container className="outer-container">
      <form className="inner-container" onSubmit={formik.handleSubmit}>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item className="title-item">
            <Typography variant="h1">Bienvenide a Healthy Dev</Typography>
          </Grid>
          <Grid item className="name-item">
            <TextField
              fullWidth
              required
              aria-describedby="Nombre"
              error={formik.errors.name && formik.touched.name}
              id="name"
              name="name"
              placeholder="Nombre"
              value={formik.values.name}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.errors.name && formik.touched.name} variant="filled">
              {formik.errors.name && formik.touched.name}
            </FormHelperText>
          </Grid>
          <Grid item className="email-item">
            <TextField
              fullWidth
              required
              aria-describedby="Email"
              error={formik.errors.email && formik.touched.email}
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.errors.email && formik.touched.email} variant="filled">
              {formik.errors.email && formik.touched.email}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Crear Password"
              error={formik.errors.password && formik.touched.password}
              id="password"
              name="password"
              placeholder="Crear Password"
              type="password"
              value={formik.values.password}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.errors.password && formik.touched.password} variant="filled">
              {formik.errors.password && formik.touched.password}
            </FormHelperText>
          </Grid>
          <Grid item>
            <Button
              fullWidth
              className="button"
              color="secondary"
              disabled={formik.isSubmitting}
              type="submit"
              variant="outlined"
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Register;
