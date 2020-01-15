import React from "react";
import "./TipsLayout.sass";
import { Input } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from "@material-ui/icons/Person";

export function TipsLayout(props) {
    return (
        <>
            <header>
                <h1>Healthy Dev App </h1>
                <Input className="searchBar" disable={props.shouldHideSearchBar} placeholder="Buscar" type="search" />

                <h3>{props.sectionTitle}</h3>
            </header>
            <section className="content">CONTENT</section>
            <nav className="bottomNav">
                <ul>
                    <li>
                        <a href="#">
                            <HomeIcon className="navIcons" fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <KitchenIcon className="navIcons" fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FavoriteIcon className="navIcons" fontSize="large" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <PersonIcon className="navIcons" fontSize="large" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}
