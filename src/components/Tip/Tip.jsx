import React from "react";
import { Avatar, Card, CardContent, CardMedia, Typography } from "@material-ui/core";

// import "./Tip.scss";

const Tip = {props} => {
  return (
    <Card square className="card" elevation={0}>
      <Avatar alt="" className="avatar" src={props.tipState.avatar} />
      <CardMedia className="media" component="img" image={props.tipState.media} title="" />
      <CardContent className="cardText">
        <Typography className="title" component="h2" variant="subtitle2">
          {props.tipState.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Tip;