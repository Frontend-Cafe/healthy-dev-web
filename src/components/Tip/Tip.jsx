import React from "react";
// Hooks
import { useTheme } from "@material-ui/core/styles";
// Styles
import "components/Tip/Tip.scss";
// Components
import { Avatar, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const Tip = ({ avatar, media, title }) => (
  <Card square className="card" elevation={0}>
    <Avatar alt="" src={avatar} style={useTheme().avatar} />
    <CardMedia className="media" component="img" image={media} title="" />
    <CardContent className="cardText">
      <Typography className="title" component="h2" variant="subtitle2">
        {title}
      </Typography>
    </CardContent>
  </Card>
);

export default Tip;
