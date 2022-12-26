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
                <section className="introduction">
                    <p>Als leidenschaftlicher Fahrlehrer, Radsportler und Motorradfahrer kenne ich den Straßenverkehr aus den verschiedensten Blickwinkeln. Aus meiner über 20-jährigen Erfahrung als Sicherheitstrainer und Fahrlehrer und durch meine Freude am Coaching entstand die Idee, beides zu kombinieren und mich auf das Coaching bzw. Personal Training für Auto- und Motorradfahrer zu spezialisieren.</p>
                </section>
                <section className="introduction">
                    <p>
                        Bereits im Jugendalter begeisterte ich mich für Mobilität in jeglicher Form. Schnell machte ich alle Führerscheine in Folge und bereits mit 21 Jahren hatte ich mit dem Busführerschein die letzte Klasse in der Tasche. Kurz darauf absolvierte ich die Ausbildung zum Berufskraftfahrer bei der Dekra-Akademie in Augsburg. Als 25 jähriger machte ich 1993 dann die Fahrlehrer-Ausbildung für alle Führerscheinklassen und bildete bei der Bundeswehr im Schwerpunkt LKW und Bus Fahrschüler aus.
                    </p>
                    <img className="portrait-image" src={stefanMotorrad} alt="portrait fahrlehrer"></img>
                </section>
                <section className="introduction">
                    <p>
                        Im Jahr 2000 machte ich die Ausbildung zum Sicherheitstrainer und arbeitete anfangs bei der Landesverkehrswacht Bayern und inzwischen auch beim ADAC als Trainer für PKW und Motorrad. Zusätzlich bin ich regelmäßig bei der Fahrschule Mayr in Landsberg als Auto-, LKW-, und Motorradfahrlehrer tätig. Des Weiteren unterrichte ich in der Volkshochschule sowie interessierten Gruppen über Verkehrsregeln, Änderungen im Straßenverkehrsordung und Fahrsicherheit.
                    </p>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default About;
