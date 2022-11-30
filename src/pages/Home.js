import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Home() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="home">
            <Header />
            <div className="grid-text_wide">
                <h1>Individuelles Auto- und Motorrad-Fahrtraining</h1>
                <h2>Dein persönliches Fahrtraining im Raum Landsberg am Lech, auf deine Bedürfnisse zugeschnitten.</h2>
                <p>Du möchtest nach einer längeren Fahrpause den Wiedereinstieg schaffen?</p>
                <p>Du hast Fahrängste, die du bewältigen möchtest?</p>
                <p>Du bist ambitionierter Motorradfahrer und möchtest deine Fahrtechnik verfeinern?</p>
                <p>Oder du hast ein ganz anderes Anliegen zum Thema Verkehrssicherheit?</p>
                <p><b>Dann bist du hier genau richtig!</b></p>
                <button>
                    <Link to="/leistungen">Komplettes Leistungsangebot ansehen</Link>
                </button>
            </div>
            <div className="usp-container grid-full_width">
                <h3>Personal Coaching mit SafeRide</h3>
                <div class="usp">Individuell</div>
                <div class="usp">Persönlich</div>
                <div class="usp">Flexibel</div>
                <button className="primary" onClick={scrollToContact}>Jetzt Kontakt aufnehmen</button>
            </div>
            <div className="grid-text_wide">
                <Contact forwardedRef={contactRef}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
