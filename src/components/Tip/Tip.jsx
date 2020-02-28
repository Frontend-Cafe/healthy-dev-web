import React from "react";
// Hooks
//import { useTheme } from "@material-ui/core/styles";
// Styles
//import "components/Tip/Tip.scss";
// Components
import { Avatar, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Tip = ({ avatar, media, title }) => (
  <Card square elevation={0}>
    <Avatar alt="" src={avatar} />
    <CardMedia component="img" image={media} title="" />
    <CardContent>
      <Typography component="h2" variant="subtitle2">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

export default Tip;
