import React from "react";
// Components
import { TextField, FormHelperText } from "@material-ui/core";

const FormikTextField = ({
  errorState,
  touchedState,
  valueState,
  handleBlur,
  handleChange,
  name,
  id,
  placeholder = "text",
  variant = "filled",
}) => (
  <>
    <TextField
      fullWidth
      required
      aria-describedby={placeholder}
      error={errorState && touchedState}
      id={id}
      name={name}
      placeholder={placeholder}
      value={valueState}
      variant={variant}
      onBlur={handleBlur}
      onChange={handleChange}
    />
    <FormHelperText error={errorState && touchedState} variant={variant}>
      {errorState && touchedState}
    </FormHelperText>
  </>
);

export default FormikTextField;
