import './header.css';

function Header({ title, image = "https://images.unsplash.com/photo-1596649714492-a8f90ecb3776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" }) {

    return (
        <header>
            <img className="hero-image" src={image} alt="Fahrtraining im Auto" />
            <div className="header-content grid-text_wide">
                <h1>{title}</h1>
            </div>
        </header>
    )
}

export default Header;