import {
  Link
} from "react-router-dom";

import './footer.css';

function Footer() {
    return (
        <footer>
            <Link to="/impressum">Impressum</Link>
        </footer>
    )
}

export default Footer;