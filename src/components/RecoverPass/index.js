import React from "react";
//Import Material-UI
import { Box, TextField, Button, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
//Import Formik
import { useFormik } from "formik";
//Import Styles
import "./style.scss";
//Import DATA
import Logo from "assets/images/sushiMochi.jpg";

//Import SchemaValidation
import RecoverPassSchema from "./schema";

const RecoverPass = () => {
  const { values, handleSubmit, handleChange, errors, touched } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: RecoverPassSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      resetForm();
    },
  });
  return (
    <Box className="recover-pass" component="section">
      <Card component="figure">
        <CardMedia alt="App Logo" component="img" image={Logo} />
        <CardContent>
          <Typography component="a" href="./">
            ¿Olvidaste tu contraseña?
          </Typography>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          error={errors.email && touched.email}
          helperText={errors.email}
          name="email"
          placeholder="Email"
          value={values.email}
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined">
          Reiniciar Contraseña
        </Button>
      </form>
    </Box>
  );
};

export default RecoverPass;
