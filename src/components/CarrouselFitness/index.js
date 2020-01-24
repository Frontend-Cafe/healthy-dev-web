//Import React
import React from "react";
//Imports Material-ui
import { Box, Typography } from "@material-ui/core";
//Imports Components
import CardCarrousel from "components/CardCarrousel";
//Imports Styles
import "./styles.scss";
//Import Data
import "lib/constants";
import FITNESSTIPS from "lib/constants";

const CarrouselFitness = () => {
  const DATA = FITNESSTIPS;
  const CARDITEMS = DATA.map(data => <CardCarrousel image={data.img} title={data.title} />);

  return (
    <Box component="section">
      <Box component="header">
        <Typography component="h2">Mis Fitness Tips</Typography>
      </Box>
      <Box>{CARDITEMS}</Box>
    </Box>
  );
};

export default CarrouselFitness;
