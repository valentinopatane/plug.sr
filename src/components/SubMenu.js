import React from "react";
import {Link} from "react-router-dom";
import './style.css';

const SubMenu = ()=>{
    return(
            <div className="subMenu">
                <ul>
                    <Link className="subMenu_link" to={"/shop"}>All</Link>
                    <Link className="subMenu_link" to={"/category/top"}>Top pieces</Link>
                    <Link className="subMenu_link" to={"/category/pants"}>Pants</Link>
                    <Link className="subMenu_link" to={"/category/accesory"}>Accesories</Link>
                </ul>
            </div>
    )
}
export default SubMenu