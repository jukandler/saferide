import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import stefanMotorrad from '../assets/stefan_motorrad.jpeg';
import stefanPortrait from '../assets/stefan_portrait.jpeg';

function About() {
    return (
        <div id="about">
            <Header title="Dein Fahrtrainer" image={stefanPortrait} imageWidth="limited"/>
            <div className="grid-text_wide">
                <h2>Hallo, ich bin Stefan!</h2>
                <section  className="introduction image-left">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <section  className="introduction image-right">
                    <img className="portrait-image" src={stefanMotorrad} alt="portrait fahrlehrer"></img>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default About;
