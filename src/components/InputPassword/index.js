import React, { useState } from "react";
//Import Material-ui
import { FormControl, Input, InputAdornment, IconButton, FormHelperText } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const InputPassword = ({ name, placeholder, error, value, helperText, onChange }) => {
  const [showPass, setShowPass] = useState(false);

  const handlePassClick = () => setShowPass(!showPass);
  const handlePassOnMouseDown = event => event.preventDefault();

  return (
    <FormControl>
      <Input
        endAdornment={
          <InputAdornment component="span" position="end">
            <IconButton
              arial-label="toggle password visibility"
              onClick={handlePassClick}
              onMouseDown={handlePassOnMouseDown}
            >
              {showPass ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
        error={error}
        name={name}
        placeholder={placeholder}
        type={showPass ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default InputPassword;
