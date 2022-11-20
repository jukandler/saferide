import {
  Link
} from "react-router-dom";

import './navbar.css';

function NavBar() {
    return (
        <div class="navbar">
            <Link to="/trainings">Trainings</Link>
            <Link to="/about">Über mich</Link>
        </div>
    )
}

export default NavBar;