import React from "react";
import { Grid, Typography, TextField, Button, Link } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import "./index.css"

const LoginMaterial = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };


    return (
        <>
            <Grid container spacing={0}
                direction="column"
                justify="center"
                style={{ minHeight: '100vh', background: "#112045", paddingLeft: "1rem", paddingRight: "1rem", color: "#fff" }}>

                <Grid item xs={12} style={{ marginBottom: "1rem" }}>
                    <img style={{ height: "280px", width: "100%", borderRadius: "50%" }} src="https://i.pinimg.com/originals/eb/4f/36/eb4f36bdc51ec00a2efec3f065bf986b.jpg" alt="" />
                </Grid>

                <Grid item xs={12} style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <Typography variant="subtitle1" component="h2" style={{ color: "#fff" }}>
                        Bienvenide a
                    </Typography>
                    <Typography variant="subtitle1" component="h2" style={{ color: "#fff" }}>
                        Healthy Dev App
                    </Typography>
                </Grid>

                <Grid item xs={12} style={{ marginBottom: "1rem" }}>
                    <TextField
                        id="filled-password-input"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        variant="filled"
                        style={{ width: "100%" }}
                        helperText="Assistive text"
                    />

                    <FormControl style={{ width: "100%", marginTop: "0.5rem" }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            style={{ background: "#FFF" }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText style={{ color: "gray" }} id="filled-weight-helper-text">Assistive Text</FormHelperText>
                    </FormControl>
                </Grid>


                <Grid item xs={12} style={{ textAlign: "center" }}>
                    <Button style={{ width: "100%", background: "#26B0A1", borderRadius: "1rem" }} variant="contained" color="primary">
                        LOGIN
                    </Button>
                    <Typography variant="caption" component="h2">
                        <Link href="#" color="inherit">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </Typography>
                    <Typography variant="button" align="center">
                        <Link href="#" color="inherit">
                            CREAR CUENTA
                        </Link>
                    </Typography>
                </Grid>


            </Grid>
        </>
    );
};

export default LoginMaterial;
