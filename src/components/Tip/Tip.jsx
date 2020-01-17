import React from "react";
import { Avatar, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

// import "./Tip.scss";

const Tip = ({ tipState: { avatar, media, title } }) => {
  return (
    <Card square className="card" elevation={0}>
      <Avatar alt="" className="avatar" src={avatar} />
      <CardMedia className="media" component="img" image={media} title="" />
      <CardContent className="cardText">
        <Typography className="title" component="h2" variant="subtitle2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tip;
