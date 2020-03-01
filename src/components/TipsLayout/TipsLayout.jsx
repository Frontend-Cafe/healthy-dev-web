import React from "react";
//style
//import { useTheme } from "@material-ui/core/styles";
//import "./TipsLayout.sass";
//components
import { Container, Box, Paper } from "@material-ui/core";
import Header from "components/Header/Header";
import BottomNavbar from "components/BottomNavbar/BottomNavbar";

const TipsLayout = ({ isSearchBarVisible = true, children, sectionTitle }) => {
  return (
    <Container disableGutters maxWidth="md">
      <Header isSearchBarVisible={isSearchBarVisible} sectionTitle={sectionTitle} />
      <Box component="main" mb={8} mt={23} width={1}>
        {children}
      </Box>
      <BottomNavbar />
    </Container>
  );
};

export default TipsLayout;
