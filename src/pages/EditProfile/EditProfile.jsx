import React, { useState } from "react";
// Hooks
import { useFormik } from "formik";
// Styles
import "./EditProfile.scss";
// Components
import {
  Typography,
  Button,
  Grid,
  TextField,
  Input,
  InputAdornment,
  Container,
  FormHelperText,
  IconButton,
  Avatar,
} from "@material-ui/core";
// Icons
import { Visibility, VisibilityOff } from "@material-ui/icons";

import EditProfileSchema from "./EditProfileSchema";

const EditProfile = ({ user, avatar }) => {
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  console.log(avatar);
  const formik = useFormik({
    initialValues: {
      name: user || "",
      email: "",
      newPassword: "",
      confirmNewPassword: "",
      showNewPass: showNewPass,
      showConfirmPass: showConfirmPass,
    },
    validationSchema: EditProfileSchema,
    handleSubmit(values) {
      console.log(values);
      document.getElementById("newPassword").value = "";
      document.getElementById("confirmNewPassword").value = "";
    },
    validateOnChange: false,
  });

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container className="outer-container">
      <form className="inner-container" onSubmit={formik.handleSubmit}>
        <Grid container alignItems="center" direction="row" justify="center">
          <Grid item className="title-item">
            <Typography variant="h1">Editar Perfil</Typography>
            <Avatar alt="" src={avatar} />
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
              placeholder="yo@email.com"
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
              aria-describedby="Cambiar password"
              error={formik.errors.newPassword && formik.touched.newPassword}
              id="newPassword"
              InputProp={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowNewPass(!showNewPass)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {formik.values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="newPassword"
              placeholder="Crear Password"
              type={showNewPass ? "text" : "password"}
              value={formik.values.newPassword}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText error={formik.errors.newPassword && formik.touched.newPassword} variant="filled">
              {formik.errors.newPassword && formik.touched.newPassword}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Repetir password"
              error={formik.errors.confirmNewPassword && formik.touched.confirmNewPassword}
              id="confirmNewPassword"
              InputProp={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {formik.values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="confirmNewPassword"
              placeholder="Crear Password"
              type={showConfirmPass ? "text" : "password"}
              value={formik.values.confirmNewPassword}
              variant="filled"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <FormHelperText
              error={formik.errors.confirmNewPassword && formik.touched.confirmNewPassword}
              variant="filled"
            >
              {formik.errors.confirmNewPassword && formik.touched.confirmNewPassword}
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

export default EditProfile;
