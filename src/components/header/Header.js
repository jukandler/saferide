import Logo from '../Logo/Logo';
import './header.css';

function Header({ title, imageWidth, image, showLogo = false }) {

    return (
        <header className={`${imageWidth ? `image-width-${imageWidth}` : ""} ${image ? "" : "minimal"}`}>
            { image && <img className="hero-image" src={image} alt="Fahrtraining im Auto" />}
            { showLogo && <Logo /> }
            <div className="header-content grid-text_wide">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header;