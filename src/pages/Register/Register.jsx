import React from "react";
import { withFormik, Form } from "formik";
import * as Yup from "yup";
import { useTheme } from "@material-ui/core";
import { Typography, Button, Grid, FormControl, TextField, FormHelperText, Box, Container } from "@material-ui/core";
//Styles

const Register = ({ values, errors, touched, isSubmitting }) => {
  const theme = useTheme();
  return (
    <Container>
      <Form>
        <Grid container alignItems="center" direction="column" justify="center" spacing={4}>
          <Grid item>
            <Typography>Register</Typography>
          </Grid>
          <Grid item>
            <TextField required aria-describedby="Nombre" id="name" name="name" value={values.name} />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </Grid>
          <Grid item>
            <TextField required aria-describedby="Email" id="email" name="email" value={values.email} />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </Grid>
          <Grid>
            <TextField
              required
              aria-describedby="Password"
              id="password"
              name="password"
              type="password"
              value={values.password}
            />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained">
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
