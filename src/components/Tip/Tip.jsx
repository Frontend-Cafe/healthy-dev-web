import React from "react";
// Hooks
//import { useTheme } from "@material-ui/core/styles";
// Styles
//import "components/Tip/Tip.scss";
// Components
import { Card, CardMedia, Typography } from "@material-ui/core";

const Tip = ({ media, title }) => (
  <Card square elevation={0}>
    <CardMedia component="img" image={media} />
    <Typography>{title}</Typography>
  </Card>
);

export default Tip;
