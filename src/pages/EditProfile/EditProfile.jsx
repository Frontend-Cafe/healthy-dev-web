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
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: user || "",
      email: "",
      newPassword: "",
      confirmNewPassword: "",
      showNewPass: showNewPass,
      showConfirmPass: showConfirmPass,
    },
    validationSchema: EditProfileSchema,
    handleSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
    validateOnChange: false,
  });

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container className="outer-container">
      <form className="inner-container" onSubmit={handleSubmit}>
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
              error={errors.name && touched.name}
              id="name"
              name="name"
              placeholder="Nombre"
              value={values.name}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={errors.name && touched.name} variant="filled">
              {errors.name && touched.name}
            </FormHelperText>
          </Grid>
          <Grid item className="email-item">
            <TextField
              fullWidth
              required
              aria-describedby="Email"
              error={errors.email && touched.email}
              id="email"
              name="email"
              placeholder="yo@email.com"
              value={values.email}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={errors.email && touched.email} variant="filled">
              {errors.email && touched.email}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Cambiar password"
              error={errors.newPassword && touched.newPassword}
              id="newPassword"
              InputProp={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowNewPass(!showNewPass)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="newPassword"
              placeholder="Crear Password"
              type={showNewPass ? "text" : "password"}
              value={values.newPassword}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={errors.newPassword && touched.newPassword} variant="filled">
              {errors.newPassword && touched.newPassword}
            </FormHelperText>
          </Grid>
          <Grid item className="password-item">
            <TextField
              fullWidth
              required
              aria-describedby="Repetir password"
              error={errors.confirmNewPassword && touched.confirmNewPassword}
              id="confirmNewPassword"
              InputProp={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowConfirmPass(!showConfirmPass)}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              name="confirmNewPassword"
              placeholder="Crear Password"
              type={showConfirmPass ? "text" : "password"}
              value={values.confirmNewPassword}
              variant="filled"
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <FormHelperText error={errors.confirmNewPassword && touched.confirmNewPassword} variant="filled">
              {errors.confirmNewPassword && touched.confirmNewPassword}
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
      </form>
    </Container>
  );
};

export default EditProfile;
