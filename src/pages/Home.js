import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function Home() {
    return (
        <div id="home">
            <Header />
            <div className="grid-text_wide">
                <h1>Individuelles Auto- und Motorrad-Fahrtraining</h1>
                <h2>Personal Coaching, auf Ihre Bedürfnisse zugeschnitten</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className="contact">
                <h3>Kontakt:</h3>
                <p>Stefan Kandler</p>
                <p>Telefon: <a href="tel:+4915201996436">+49 152 0199 6436</a></p>
                <p>E-Mail: <a href="mailto:info@saferide-fahrtraining.de">info@saferide-fahrtraining.de</a></p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
