import './navigation.css';
import CallIcon from "../../assets/icons/call.png";
import MailIcon from "../../assets/icons/mail.png";
import WhatsappIcon from "../../assets/icons/whatsapp.png";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import MenuToCloseIcon from '../MenuToCloseIcon/MenuToCloseIcon';

function Navigation() {
    const location = useLocation();
    const menuIconColor = location.pathname !== "/" ? "#FFFFFF" : "#30606B";
    
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav>
            <div className="navbar-icon" onClick={handleClick}>
                <MenuToCloseIcon color={menuIconColor} isOpen={isOpen}/>
            </div>
            <div className="sticky-navbar">
                <div className="action-icons grid-text_wide">
                    <a href="tel:+4915201996436">
                        <img src={CallIcon} alt="Anrufen"/>
                    </a>
                    <a href="mailto:ks@kskandler.de">
                        <img src={MailIcon} onClick={closeMenu} alt="E-Mail schicken"/>
                    </a>
                    <a href="https://wa.me/4915201996436" target="_blank" rel="noopener noreferrer">
                        <img src={WhatsappIcon} alt="Whatsapp schicken"/>
                    </a>
                </div>
            </div>
            { isOpen && <div className="navigation-menu">
                <Logo onClick={closeMenu} />
                <div className="navigation-menu__links">
                    <Link to="/" onClick={handleClick}>Startseite</Link>
                    <Link to="/leistungen" onClick={handleClick}>Leistungen</Link>
                    <Link to="/trainer" onClick={handleClick}>Trainer</Link>
                    <Link to="/preise" onClick={handleClick}>Preise</Link>
                    <Link to="/gutscheine" onClick={handleClick}>Gutscheine</Link>
                    <Link to="/impressum" onClick={handleClick}>Impressum</Link>
                </div>
            </div>}
        </nav>
    )
}

export default Navigation;