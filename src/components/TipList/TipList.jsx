import React from "react";
// Styles
//import "components/TipList/TipList.scss";
// Components
import { Avatar, Box, IconButton, GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import Tip from "components/Tip/Tip";

const TipList = ({ tipStates }) => (
  <Box mb={12}>
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
  </Box>
);

export default TipList;
