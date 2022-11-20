import logo from './logo.jpg';
import NavBar from '../navbar/Navbar';

import './header.css';

function Header() {
    return (
        <header>
            <NavBar />
            <img className="hero-image" src="https://images.unsplash.com/photo-1596649714492-a8f90ecb3776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" alt="Fahrtraining im Auto" />
            <img className="saferide-logo" src={logo} alt="saferide logo"></img>
        </header>
    )
}

export default Header;