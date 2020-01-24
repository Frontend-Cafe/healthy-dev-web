//Import React
import React from "react";
//Imports Material-ui
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const CardCarrousel = ({ title, image }) => (
  <Card component="figure">
    <CardMedia component="img" image={image} />
    <CardContent>
      <Typography component="h4">{title}</Typography>
    </CardContent>
  </Card>
);

export default CardCarrousel;
