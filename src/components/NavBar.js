import React from "react";
import {Link} from "react-router-dom";
import CartWidget from "./CartWidget";
import './style.css'

function Navbar(){
    return(
        <>
            <nav>
                <div className="titleNav">
                    <Link to="/" style={{textDecoration:"none"}}><h2>plug.sr</h2></Link>
                </div>
                <ul className="aList">
                    <Link to="/shop">
                        <li>
                            Store
                        </li>
                    </Link>
                    <Link to="/archive">
                        <li>
                            Archive
                        </li>
                    </Link>
                    <Link to="/about">
                        <li>
                            About
                        </li>
                    </Link>
                </ul>
                <div className='cartingContainer'>
                    <Link to="/cart"style={{marginTop: '5px',textDecoration:'none'}} >
                        <CartWidget ></CartWidget>
                    </Link>
                </div>

            </nav>
        </>
    );
}
export default Navbar;
