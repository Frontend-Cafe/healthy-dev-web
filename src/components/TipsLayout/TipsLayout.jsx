import React from "react";
//style
import "./TipsLayout.sass";
//components
import { Container } from "@material-ui/core";

import { Header } from "../Header/Header";
import { BottomNavbar } from "../BottomNavigation/BottomNavbar";

export const TipsLayout = ({ searchBarIsVisible, children, sectionTitle }) => {
  return (
    <Container className="container" color="primary-dark">
      <Header searchBarIsvisible={searchBarIsVisible} sectionTitle={sectionTitle} />
      <div className="content">{children}</div>
      <BottomNavbar />
    </Container>
  );
};
