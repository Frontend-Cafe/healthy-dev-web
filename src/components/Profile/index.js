//Import React
import React from "react";
//Import MAterial-ui
import { Box } from "@material-ui/core";
//Import Component
import CarrouselProfile from "components/CarrouselProfile";
//Import Style
import "./style.scss";
//Import Data
import DATACARROUSEL from "lib/constants";

const Profile = () => {
  const DATA = DATACARROUSEL;
  const TITULO_1 = "Mis Fitness Tips";
  const TITULO_2 = "Mi Alimentación Tips";

  return (
    <Box className="Profile" component="section">
      <CarrouselProfile Data={DATA} TitleSection={TITULO_1} />
      <CarrouselProfile Data={DATA} TitleSection={TITULO_2} />

      <a href="/">Editar Mi Perfil</a>
      <a href="/">Salir De Mi Cuenta</a>
    </Box>
  );
};
export default Profile;
