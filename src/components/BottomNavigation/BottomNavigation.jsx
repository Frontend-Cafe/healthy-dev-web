import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import KitchenIcon from "@material-ui/icons/Kitchen";
import PersonIcon from "@material-ui/icons/Person";
import { FaHeartbeat } from "react-icons/fa";
import "./BottomNavigation.sass";

export const BottomNavigation = () => {
    return (
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
    );
};
