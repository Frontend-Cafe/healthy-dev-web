import React from "react";
// Routing
import { Link } from "react-router-dom";
//Import Material-ui
import { Box, Typography } from "@material-ui/core";
//Import Component
import ProfileCarrousel from "components/ProfileCarrousel";
//Import Style
import "./style.scss";
//Import Data
// import { tipsData } from "lib/mockData";

const Profile = ({ tipStates }) => (
  <>
    <Box className="profile" component="section">
      <ProfileCarrousel items={tipStates} titleSection="Mis Fitness Tips" />
      <ProfileCarrousel items={tipStates} titleSection="Mi Alimentación Tips" />
    </Box>

    <Box className="links" component="section">
      <Typography component={Link} to="/">
        Editar Mi Perfil
      </Typography>
      <Typography component={Link} to="/">
        Salir De Mi Cuenta
      </Typography>
    </Box>
  </>
);
export default Profile;
