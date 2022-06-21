import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import './style.css'

function Navbar(){
    return(
        <>
            <nav>
                <div className="titleNav">
                    <Link to="/plug.sr" style={{textDecoration:"none"}}><h2 className="titleNavH2">plug.sr</h2></Link>
                </div>
                <ul className="aList">
                    <Link to="/plug.sr/shop">
                        <li>
                            Store
                        </li>
                    </Link>
                    <Link to="/plug.sr/archive">
                        <li>
                            Archive
                        </li>
                    </Link>
                    <Link to="/plug.sr/about">
                        <li>
                            About
                        </li>
                    </Link>
                </ul>
                <div className='cartingContainer'>
                    <Link to="/plug.sr/cart"style={{marginTop: '5px',textDecoration:'none'}} >
                        <CartWidget ></CartWidget>
                    </Link>
                </div>

            </nav>
        </>
    );
}
export default Navbar;
