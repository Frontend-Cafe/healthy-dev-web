import React from "react";
//Imports Material-ui
import { Box, Typography } from "@material-ui/core";
//Imports Components
import CarrouselCard from "components/CarrouselCard";
//Imports Styles
import "./styles.scss";

const ProfileCarrousel = ({ titleSection, items }) => (
  <Box className="profile-carrousel" component="article">
    <Box component="header">
      <Typography component="h2">{titleSection}</Typography>
    </Box>
    <Box>
      {items.map(item => (
        <CarrouselCard key={item.id} image={item.img} title={item.title} />
      ))}
    </Box>
  </Box>
);

export default ProfileCarrousel;
