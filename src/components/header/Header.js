import './header.css';

function Header({ title, imageWidth, image }) {

    return (
        <header class={`${imageWidth ? `image-width-${imageWidth}` : ""}`}>
            <img className="hero-image" src={image} alt="Fahrtraining im Auto" />
            <div className="header-content grid-text_wide">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header;