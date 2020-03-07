import React from "react";
// Styles
//import "components/TipList/TipList.scss";
// Components
import { Avatar, Box, IconButton, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Tip from "components/Tip/Tip";

const TipList = ({ tipStates }) => (
  <GridList cellHeight="auto">
    {tipStates.map(({ avatar, media, title, id }) => (
      <GridListTile key={id} cols={1} rows={1} spacing={1}>
        <Box opacity={0}>
          <GridListTileBar
            actionIcon={
              <IconButton>
                <Avatar alt="Username" src={avatar} />
              </IconButton>
            }
            actionPosition="left"
            titlePosition="top"
          />
        </Box>
        <Tip media={media} title={title} />
      </GridListTile>
    ))}
  </GridList>
);

export default TipList;
