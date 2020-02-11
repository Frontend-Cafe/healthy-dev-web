import React from "react";
import { useFormik } from "formik";
import { Typography, Button, Grid, TextField, Container, FormHelperText } from "@material-ui/core";

//Styles
import "./Register.scss";
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
  console.log(formik);
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
              error={formik.touched.name && formik.errors.name}
              id="name"
              name="name"
              placeholder="Nombre"
              value={formik.values.name}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.touched.name && formik.errors.name} variant="filled">
              {formik.touched.name && formik.errors.name}
            </FormHelperText>
          </Grid>
          <Grid item className="email-item">
            <TextField
              fullWidth
              required
              aria-describedby="Email"
              error={formik.touched.email && formik.errors.email}
              id="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.touched.email && formik.errors.email} variant="filled">
              {formik.touched.email && formik.errors.email}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Crear Password"
              error={formik.touched.password && formik.errors.password}
              id="password"
              name="password"
              placeholder="Crear Password"
              type="password"
              value={formik.values.password}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.touched.password && formik.errors.password} variant="filled">
              {formik.touched.password && formik.errors.password}
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
