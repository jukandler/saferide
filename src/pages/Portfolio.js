import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Portfolio() {
    return (
        <div id="portfolio">
            <Header />
            <div className="grid-text_wide">
                <h1>Leistungen</h1>
                <div className="disclaimer">
                    <p><b>Hinweis: Die genauen Trainingsinhalte werden immer auf die individuellen Bedürfnisse des Kunden abgestimmt.</b></p>
                    <p>Bei den unten aufgeführten Punkten handelt es sich um mögliche Schwerpunkte.</p>
                    <p>Auf Wunsch sind auch Trainings in Kleingruppen oder Roller-Trainings möglich.</p>
                </div>
                <h2>Auto Fahrtraining</h2>
                <section>
                    <p>Auffrischungsstunden</p>
                    <p>Wiedereinstieg nach längerer Fahrpause</p>
                    <p>Sicheres Fahren im Alter</p>
                    <p>Fahrängste nach Unfall</p>
                    <p>Unterstützung bei Blockaden oder Panikattacken</p>
                </section>
                <section>
                    <p>Fahren mit körperlichen Einschränkungen</p>
                    <p>Beobachtungsfahrt nach Erkrankungen</p>
                </section>
                <section>
                    <p>Wohnmobil, Wohnwagen und Anhänger-Schulung</p>
                    <p>Fahrtechnik und Notmanöver</p>
                    <p>Neues Fahrzeug / Assistenzsysteme kennenlernen</p>
                </section>
                <h2>Motorrad Fahrtraining</h2>
                <section>
                    <p>Auffrischungsstunden</p>
                    <p>Wiedereinstieg nach längerer Fahrpause</p>
                    <p>Tipps zum Führerschein für Späteinsteiger</p>
                </section>
                <section>
                    <p>Beratung bei der Wahl des richtigen Motorrads</p>
                    <p>Neues Fahrzeug kennenlernen</p>
                </section>
                <section>
                    <p>Verbesserung der Fahrtechnik</p>
                    <p>Notmanöver</p>
                    <p>Sicherheit in Kurven und Schräglage</p>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;
