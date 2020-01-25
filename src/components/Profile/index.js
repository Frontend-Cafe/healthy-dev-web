import React from "react";
//Import Material-ui
import { Box } from "@material-ui/core";
//Import Component
import CarrouselProfile from "components/CarrouselProfile";
//Import Style
import "./style.scss";
//Import Data
import { tipsData } from "lib/mockData";

const Profile = () => (
  <Box className="profile" component="section">
    <CarrouselProfile items={tipsData} titleSection="Mis Fitness Tips" />
    <CarrouselProfile items={tipsData} titleSection="Mi Alimentación Tips" />

    <a href="/">Editar Mi Perfil</a>
    <a href="/">Salir De Mi Cuenta</a>
  </Box>
);
export default Profile;
