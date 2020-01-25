//Import React
import React from "react";
//Imports Material-ui
import { Box, Typography } from "@material-ui/core";
//Imports Components
import CardCarrousel from "components/CardCarrousel";
//Imports Styles
import "./styles.scss";

const CarrouselProfile = ({ TitleSection, Data }) => {
  const DATA = Data;
  const CARDITEMS = DATA.map(data => <CardCarrousel key={data.id} image={data.img} title={data.title} />);

  return (
    <Box className="CarrouselProfile" component="article">
      <Box component="header">
        <Typography component="h2">{TitleSection}</Typography>
      </Box>
      <Box>{CARDITEMS}</Box>
    </Box>
  );
};

export default CarrouselProfile;
