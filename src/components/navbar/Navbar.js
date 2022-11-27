import { useState } from "react";
import {
    Link,
    NavLink
} from "react-router-dom";
import { MdClose, MdMenu } from "react-icons/md";


import logo from '../header/logo.jpg';

import './navbar.css';

function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    return (
        <div>
            <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
            <nav className="navbar" onClick={e => e.stopPropagation()}>
            <div className="nav-container">
                <Link to="/" className="nav-logo">
                    <img className="logo" src={logo} alt="saferide logo"></img>
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <NavLink
                        to="/"
                        activeclassname="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                        Startseite
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/trainer"
                        activeclassname="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                        Trainer
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/leistungen"
                        activeclassname="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                        Leistungen
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/preise"
                        activeclassname="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                        Preise
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/gutscheine"
                        activeclassname="active"
                        className="nav-links"
                        onClick={click ? handleClick : null}
                        >
                        Gutscheine
                    </NavLink>
                </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    { click ? <MdClose /> : <MdMenu />}
                </div>
            </div>
            </nav>
        </div>
    )
}

export default NavBar;