import React from "react";
//Import Material-UI
import { Box, Card, CardMedia, Typography, CardContent, Button } from "@material-ui/core";
//Import Formik
import { useFormik } from "formik";
//Import Styles
import "./style.scss";
//Import DATA
import Logo from "assets/images/sushiMochi.jpg";

import InputPassword from "../InputPassword";

//Import SchemaValidation
import ResetPassSchema from "./schema";

const ResetPass = () => {
  const email = "TuEmail@dominio.com";

  const { values, handleSubmit, errors, touched, handleChange } = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: ResetPassSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <Box className="reset-pass" component="section">
      <Card component="figure">
        <CardMedia alt="App Logo" component="img" image={Logo} />
        <CardContent>
          <Typography component="p">Reiniciar Password</Typography>
          <Typography component="p">{email}</Typography>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <InputPassword
          error={errors.newPassword && touched.newPassword}
          helperText={errors.newPassword}
          name="newPassword"
          placeholder="New Password"
          value={values.newPassword}
          onChange={handleChange}
        />

        <InputPassword
          error={errors.confirmPassword && touched.confirmPassword}
          helperText={errors.confirmPassword}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />

        <Button type="submit" variant="outlined">
          Reiniciar Contraseña
        </Button>
      </form>
    </Box>
  );
};

export default ResetPass;
