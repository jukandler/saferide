import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Portfolio() {
    return (
        <div id="portfolio">
            <Header image="https://images.unsplash.com/photo-1630406144797-821be1f35d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" />
            <div className="grid-text_wide">
                <h1>Leistungen</h1>
                <div className="disclaimer">
                    <p><b>Hinweis: Die genauen Trainingsinhalte werden immer auf deine individuellen Bedürfnisse abgestimmt.</b></p>
                    <p>Bei den unten aufgeführten Punkten handelt es sich um mögliche Schwerpunkte.</p>
                    <p>Auf Wunsch sind auch Trainings in Kleingruppen oder Roller-Trainings möglich.</p>
                </div>
                <h2>Auto Fahrtraining</h2>
                <h3>Der Weg zum sicheren Autofahrer</h3>
                <section>
                    <h3>Vor der Fahrt</h3>
                    <p>Wichtige Grundkenntnisse über Fahrzeug und Mechanik</p>
                    <p>Richtige Vorbereitubng vor der Fahrt inkl. Sitzposotion und co.</p>
                    <p>Neues Fahrzeug / Assistenzsysteme kennenlernen</p>
                </section>
                <section>
                    <h3>Auf der Strecke</h3>
                    <p>Auffrischungsstunden</p>
                    <p>Wiedereinstieg nach längerer Fahrpause</p>
                    <p>Sicheres Fahren im Alter</p>
                    <p>Fahrängste nach Unfall</p>
                    <p>Unterstützung bei Blockaden oder Panikattacken</p>
                    <p>Fahrtechnik und Notmanöver</p>
                </section>
                <section>
                    <h3>Sicher trotz Einschränkungen</h3>
                    <p>Fahren mit körperlichen Einschränkungen</p>
                    <p>Beobachtungsfahrt nach Erkrankungen</p>
                </section>
                <section>
                    <h3>Wohnmobil, Wohnwagen und Anhänger-Schulung</h3>
                    <p>Sicheres Fahren mit Wohnmobil, Wohnwagen oder Anhänger</p>
                </section>
                <h2>Motorrad Fahrtraining</h2>
                <h3>Von der Prüfungsvorbereitung über die Auswahl des richtigen Motorrads zum sicheren Fahrer</h3>
                <section>
                <h3>Vorbereitung auf den (Wieder)einstieg</h3>
                    <p>Tipps zum Führerschein für Späteinsteiger</p>
                    <p>Auffrischungsstunden</p>
                    <p>Wiedereinstieg nach längerer Fahrpause</p>
                </section>
                <section>
                    <h3>Die richtige Ausrüstung</h3>
                    <p>Beratung bei der Wahl des richtigen Motorrads</p>
                    <p>Beratung bei der Wahl der richtgiten Schutzkleidung</p>
                    <p>Neues Fahrzeug kennenlernen</p>
                </section>
                <section>
                    <h3>Auf der Strecke</h3>
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
