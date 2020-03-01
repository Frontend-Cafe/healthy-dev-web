import React from "react";
// Styles
//import "components/TipList/TipList.scss";
// Components
import { Avatar, Box, Paper, IconButton, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Tip from "components/Tip/Tip";

const TipList = ({ tipStates }) => (
  <GridList cellHeight="auto">
    {tipStates.map(({ avatar, media, title, id }) => (
      <GridListTile key={id} cols={1} rows={1} spacing={1}>
        <GridListTileBar
          actionIcon={
            <IconButton>
              <Avatar alt="" src={avatar} />
            </IconButton>
          }
          actionPosition="left"
          color="primary"
          style={{ background: "none" }}
          titlePosition="top"
        />
        <Tip media={media} title={title} />
      </GridListTile>
    ))}
  </GridList>
);

export default TipList;
