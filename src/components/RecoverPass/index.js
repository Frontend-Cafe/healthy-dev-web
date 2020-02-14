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
import Schema from "./schema";

const RecoverPass = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Schema,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values));
      document.getElementById("userEmail").value = "";
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

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          error={formik.errors.email && formik.touched.email}
          helperText={formik.errors.email}
          id="userEmail"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          variant="outlined"
          onChange={formik.handleChange}
        />
        <Button type="submit" variant="outlined">
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default RecoverPass;
