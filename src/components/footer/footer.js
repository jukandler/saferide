import {
  Link
} from "react-router-dom";
import Logo from "../Logo/Logo";

import './footer.css';

function Footer() {
    return (
        <footer>
            <Logo inline={true} />
            <div className="contact-info">
                <b>Stefan Kandler</b>
                <p>Adalbert-Stifter-Str. 11, 86929 Penzing</p>
                <p>Telefon: <a href="tel:+4915201996436">+49 1520 199 6436</a></p>
                <p>E-Mail: <a href="mailto:ks@kskandler.de" target="_blank" rel="noopener noreferrer">ks@kskandler.de</a></p>
            </div>
            <div className="links-bottom">
                <b>
                    <Link to="/impressum" className="link-imprint">Impressum</Link>
                </b>
            </div>
        </footer>
    )
}

export default Footer;