import React from "react";

import "./TipsLayout.sass";
import { BottomNavigation } from "../BottomNavigation/BottomNavigation";
import { SearchBar } from "../SearchBar/SearchBar";

export const TipsLayout = ({ shouldHideSearchBar, children, sectionTitle }) => {
    return (
        <>
            <header>
                <h1>Healthy Dev App </h1>
                {!shouldHideSearchBar && <SearchBar />}
                <h3>{sectionTitle}</h3>
            </header>
            <section className="content">{children}</section>
            <BottomNavigation />
        </>
    );
};
