import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import stefanMotorrad from '../assets/stefan_motorrad.jpeg';
import stefanPortrait from '../assets/stefan_portrait.jpeg';

function About() {
    return (
        <div id="about">
            <Header image="https://images.unsplash.com/photo-1553782097-130fef5d3e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80"/>
            <div className="grid-text_wide">
                <h1>Dein Fahrtrainer</h1>
                <section  className="introduction image-left">
                    <img className="portrait-image" src={stefanPortrait} alt="portrait fahrlehrer"></img>
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
