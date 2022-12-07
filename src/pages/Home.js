import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import Usp from '../components/usp/Usp';
import heroHome from '../assets/hero_home.jpg';

function Home() {

    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div id="home">
            <Header title="Individuelles Auto- und Motorrad-Fahrtraining" image={heroHome}/>
            <Usp scrollToContact={scrollToContact}/>
            <div className="grid-text_wide">
                <div className="intro">
                    <p>Du möchtest Auffrischungsstunden nehmen oder nach einer längeren Fahrpause den Wiedereinstieg schaffen?</p>
                    <p>Du hast Fahrängste, die du bewältigen möchtest, oder leidest unter gesundheitlichen oder altersbedingten Einschränkungen?</p>
                    <p>Du bist ambitionierter Motorradfahrer und möchtest deine Fahrtechnik verfeinern oder mehr Sicherheit beim Kurvenfahren gewinnen?</p>
                    <p>Oder du hast ein ganz anderes Anliegen zum Thema Verkehrssicherheit?</p>
                    <p><b>Dann bist du hier genau richtig!</b></p>
                    <button>
                        <Link to="/leistungen">Komplettes Leistungsangebot ansehen</Link>
                    </button>
                </div>
            </div>
            <div className="grid-text_wide">
                <Contact forwardedRef={contactRef}/>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
