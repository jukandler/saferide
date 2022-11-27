import whatsapp_glyph from './whatsapp_logo.png';

import './contact.css';

function Contact() {
    return (
        <div className="contact">
            <h3>Kontakt:</h3>
            <p><b>Stefan Kandler</b></p>
            <p>Telefon: <a href="tel:+4915201996436">+49 1520 199 6436</a></p>
            <p>E-Mail: <a href="mailto:ks@kskandler.de">ks@kskandler.de</a></p>
            <div className="whatsapp-hint">
                <p><b>Melde dich auch gerne direkt über Whatsapp bei mir:</b></p>
                <a 
                href="https://wa.me/4915201996436"
                target="_blank"
                rel="noopener noreferrer">
                    <img className="whatsapp-logo" src={whatsapp_glyph} alt="whatsapp logo"></img>
                </a>
            </div>
        </div>
    )
}

export default Contact;
