import React from "react";
//Imports Material-ui
import { Box, Typography } from "@material-ui/core";
//Imports Components
import CardCarrousel from "components/CardCarrousel";
//Imports Styles
import "./styles.scss";

const CarrouselProfile = ({ titleSection, items }) => {
  return (
    <Box className="carrousel-profile" component="article">
      <Box component="header">
        <Typography component="h2">{titleSection}</Typography>
      </Box>
      <Box>
        {items.map(item => (
          <CardCarrousel key={item.id} image={item.img} title={item.title} />
        ))}
      </Box>
    </Box>
  );
};

export default CarrouselProfile;
