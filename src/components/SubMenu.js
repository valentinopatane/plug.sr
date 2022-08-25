import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SubMenu = () => {
    return (
        <div className="subMenu">
            <ul>
                <Link className="subMenu_link" to={"/plug.sr/shop"}>
                    All
                </Link>
                <Link
                    className="subMenu_link"
                    to={"/plug.sr/shop/category/top"}
                >
                    Top pieces
                </Link>
                <Link
                    className="subMenu_link"
                    to={"/plug.sr/shop/category/pants"}
                >
                    Pants
                </Link>
                <Link
                    className="subMenu_link"
                    to={"/plug.sr/shop/category/accesory"}
                >
                    Accesories
                </Link>
            </ul>
        </div>
    );
};
export default SubMenu;
