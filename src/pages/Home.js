import Header from '../components/header/Header';
import { Link } from 'react-router-dom';
import Usp from '../components/usp/Usp';
import heroHome from '../assets/hero_home.jpg';

function Home() {

    return (
        <div id="home">
            <Header title="Individuelles Auto- und Motorrad-Fahrtraining" image={heroHome} showLogo={true} />
            <Usp />
            <div className="grid-text_wide">
                <div className="intro">
                    <p>Du möchtest Auffrischungsstunden nehmen oder nach einer längeren Fahrpause den Wiedereinstieg schaffen?</p>
                    <p>Du hast Fahrängste, die du bewältigen möchtest, oder leidest unter gesundheitlichen oder altersbedingten Einschränkungen?</p>
                    <p>Du bist ambitionierter Motorradfahrer und möchtest deine Fahrtechnik verfeinern oder mehr Sicherheit beim Kurvenfahren gewinnen?</p>
                    <p>Oder du hast ein ganz anderes Anliegen zum Thema Verkehrssicherheit?</p>
                    <p><b>Dann bist du hier genau richtig!</b></p>
                    <button className="primary">
                        <Link to="/coaching">Komplettes Leistungsangebot ansehen</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
