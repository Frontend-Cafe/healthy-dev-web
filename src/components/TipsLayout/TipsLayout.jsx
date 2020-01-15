import React from "react";
import "./TipsLayout.sass";
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import { FaHeartbeat } from "react-icons/fa";

import { SearchBar } from "../SearchBar/SearchBar";

export function TipsLayout(props) {
    return (
        <>
            <header>
                <h1>Healthy Dev App </h1>
                {!props.shouldHideSearchBar && <SearchBar />}
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
                            <FaHeartbeat className="navIcons" fontSize="large" />
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
