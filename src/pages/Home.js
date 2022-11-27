import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import whatsapp_glyph from '../whatsapp_logo.png';

function Home() {
    return (
        <div id="home">
            <Header />
            <div className="grid-text_wide">
                <h1>Individuelles Auto- und Motorrad-Fahrtraining</h1>
                <h2>Personal Coaching, auf deine Bedürfnisse zugeschnitten</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

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
            </div>
            <Footer />
        </div>
    )
}

export default Home;
