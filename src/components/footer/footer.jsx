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
                <p>Telefon: <a href="tel:0819180135">08191 / 80135</a></p>
                <p>Mobil: <a href="tel:+4915201996436">+49 1520 199 6436</a></p>
                <p>E-Mail: <a href="mailto:ks@kskandler.de" target="_blank" rel="noopener noreferrer">ks@kskandler.de</a></p>
            </div>
            <a href="https://www.instagram.com/saferide_fahrtraining/" target="_blank" rel="noopener noreferrer">
                <img class="instagram-logo" src="data:image/png;base64,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" alt="instagram logo" loading="lazy"/>
            </a>
            <div className="links-bottom">
                <b>
                    <Link to="/impressum" className="link-imprint">Impressum</Link>
                </b>
            </div>
        </footer>
    )
}

export default Footer;