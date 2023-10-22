import { Link } from "react-router-dom";

import "./logo.css"
import logo from '../../assets/navbar-logo.jpg';

function Logo({ onClick, inline = false }) {
    return (
        <div className={`logo-container ${inline ? "inline": ""}`}>
            <Link to="/" onClick={onClick ? onClick : () => {}}>
                <img className="logo" src={logo} alt="saferide logo"></img>
            </Link>
        </div>
    )
}

export default Logo;