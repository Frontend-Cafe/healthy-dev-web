import React from "react";
//Import Material-ui
import { Box } from "@material-ui/core";
//Import Component
import CarrouselProfile from "components/CarrouselProfile";
//Import Style
import "./style.scss";
//Import Data
import DATACARROUSEL from "lib/constants";

const Profile = () => {
  const DATA = DATACARROUSEL;

  return (
    <Box className="Profile" component="section">
      <CarrouselProfile data={DATA} titleSection="Mis Fitness Tips" />
      <CarrouselProfile data={DATA} titleSection="Mi Alimentación Tips" />

      <a href="/">Editar Mi Perfil</a>
      <a href="/">Salir De Mi Cuenta</a>
    </Box>
  );
};
export default Profile;
