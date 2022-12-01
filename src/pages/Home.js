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
            <Header title="Individuelles Auto- und Motorrad-Fahrtraining"/>
            <Usp scrollToContact={scrollToContact}/>
            <div className="grid-text_wide">
                <div className="intro">
                    <p>Du möchtest nach einer längeren Fahrpause den Wiedereinstieg schaffen oder hast Fahrängste, die du bewältigen möchtest?</p>
                    <p>Du bist ambitionierter Motorradfahrer und möchtest deine Fahrtechnik verfeinern oder ein Schräglagentraining absolvieren?</p>
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
