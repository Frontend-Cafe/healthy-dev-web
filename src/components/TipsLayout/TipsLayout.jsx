import React from "react";
//style
import "./TipsLayout.sass";
//components
import { Container } from "@material-ui/core";
import Header from "components/Header/Header";
import BottomNavbar from "components/BottomNavbar/BottomNavbar";

const TipsLayout = ({ isSearchBarVisible = true, children, sectionTitle }) => (
  <Container className="container" color="primary-dark">
    <Header isSearchBarVisible={isSearchBarVisible} sectionTitle={sectionTitle} />
    <Container className="content">{children}</Container>
    <BottomNavbar />
  </Container>
);

export default TipsLayout;
