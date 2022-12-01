import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Usp from '../components/usp/Usp';

function Home() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="home">
            <Header />
            <div className="grid-expanded">
                <h1>Individuelles Auto- und Motorrad-Fahrtraining</h1>
                <h2>Persönliches Fahrtraining im Raum Landsberg am Lech,<br></br> auf deine Bedürfnisse zugeschnitten.</h2>
            </div>
            <div className="grid-text_wide">
                <ul className="intro">
                    <li>Du möchtest nach einer längeren Fahrpause den Wiedereinstieg schaffen?</li>
                    <li>Du hast Fahrängste, die du bewältigen möchtest?</li>
                    <li>Du bist ambitionierter Motorradfahrer und möchtest deine Fahrtechnik verfeinern?</li>
                    <li>Oder du hast ein ganz anderes Anliegen zum Thema Verkehrssicherheit?</li>
                </ul>
                <p><b>Dann bist du hier genau richtig!</b></p>
                <button>
                    <Link to="/leistungen">Komplettes Leistungsangebot ansehen</Link>
                </button>
            </div>
            <Usp scrollToContact={scrollToContact}/>
            <div className="grid-text_wide">
                <Contact forwardedRef={contactRef}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
