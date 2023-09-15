import { Link } from "react-router-dom";

import "./logo.css"
import logo from '../../assets/navbar-logo.jpg';

function Logo({ color = "white", onClick}) {
    return (
        <Link to="/" onClick={onClick ? onClick : () => {}}>
            <img className="logo" src={logo} alt="saferide logo"></img>
        </Link>
    )
}

export default Logo;