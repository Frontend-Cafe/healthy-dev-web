import React from "react";
import { useFormik } from "formik";
import { useTheme } from "@material-ui/core";
import { Typography, Button, Container, FormControl, Input, FormHelperText, Box } from "@material-ui/core";

const Register = () => {
  const validateEmail = value => {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validateEmail,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container>
      <Typography>Register</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Box>
          <FormControl>
            <Input
              required
              aria-describedby="Nombre"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              required
              aria-describedby="Email"
              id="email"
              name="email"
              validate={formik.validateEmail}
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </FormControl>
          <FormControl>
            <Input
              required
              aria-describedby="Password"
              id="password"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FormHelperText id="my-helper-text">Assistive text</FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <Button type="submit" variant="contained">
            Crear cuenta
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Register;
