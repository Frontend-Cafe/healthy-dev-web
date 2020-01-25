import React from "react";
//Imports Material-ui
import { Box, Typography } from "@material-ui/core";
//Imports Components
import CardCarrousel from "components/CardCarrousel";
//Imports Styles
import "./styles.scss";

const CarrouselProfile = ({ titleSection, data }) => {
  return (
    <Box className="CarrouselProfile" component="article">
      <Box component="header">
        <Typography component="h2">{titleSection}</Typography>
      </Box>
      <Box>
        {data.map(datos => (
          <CardCarrousel key={datos.id} image={datos.img} title={datos.title} />
        ))}
      </Box>
    </Box>
  );
};

export default CarrouselProfile;
