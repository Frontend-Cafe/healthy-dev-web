import React, { useState } from "react";
//Import Material-UI
import {
  Box,
  FormControl,
  Input,
  FormHelperText,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
//Import Formik
import { useFormik } from "formik";
//Import Styles
import "./style.scss";
//Import DATA
import Logo from "assets/images/sushiMochi.jpg";

//Import SchemaValidation
import Schema from "./schema";

const ResetPass = () => {
  const email = "TuEmail@dominio.com";
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Schema,
    validateOnChange: false,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      document.getElementById("newPassword").value = "";
      document.getElementById("confirmPassword").value = "";
    },
  });

  return (
    <Box className="reset-pass" component="section">
      <Card component="figure">
        <CardMedia alt="App Logo" component="img" image={Logo} />
        <CardContent>
          <Typography component="p">Resetear Password</Typography>
          <Typography component="p">{email}</Typography>
        </CardContent>
      </Card>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <Input
            endAdornment={
              <InputAdornment component="span" position="end">
                <IconButton
                  arial-label="toggle password visibility"
                  onClick={() => setShowNewPass(!showNewPass)}
                  onMouseDown={e => e.preventDefault}
                >
                  {showNewPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            error={formik.errors.newPassword && formik.touched.newPassword}
            id="newPassword"
            placeholder="New Password"
            type={showNewPass ? "text" : "password"}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
          />
          <FormHelperText>{formik.errors.newPassword}</FormHelperText>
        </FormControl>

        <FormControl>
          <Input
            endAdornment={
              <InputAdornment component="span" position="end">
                <IconButton
                  arial-label="toggle password visibility"
                  onClick={() => setShowConfirmPass(!showConfirmPass)}
                  onMouseDown={e => e.preventDefault}
                >
                  {showConfirmPass ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            error={formik.errors.confirmPassword && formik.touched.confirmPassword}
            id="confirmPassword"
            placeholder="Confirm Password"
            type={showConfirmPass ? "text" : "password"}
            value={formik.values.ConfirmPassword}
            onChange={formik.handleChange}
          />
          <FormHelperText>{formik.errors.confirmPassword}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="outlined">
          Reset Password
        </Button>
      </form>
    </Box>
  );
};

export default ResetPass;
