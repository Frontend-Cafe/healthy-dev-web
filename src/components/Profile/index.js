import React from "react";
// Routing
import { Link } from "react-router-dom";
//Import Material-ui
import { Box } from "@material-ui/core";
//Import Component
import ProfileCarrousel from "components/ProfileCarrousel";
//Import Style
import "./style.scss";
//Import Data
// import { tipsData } from "lib/mockData";

const Profile = ({ tipStates }) => (
  <Box className="profile" component="section">
    <ProfileCarrousel items={tipStates} titleSection="Mis Fitness Tips" />
    <ProfileCarrousel items={tipStates} titleSection="Mi Alimentación Tips" />

    <Link to="/edit-profile">
      <p>Editar Mi Perfil</p>
    </Link>
    <Link to="/">
      <p>Salir De Mi Cuenta</p>
    </Link>
  </Box>
);
export default Profile;
