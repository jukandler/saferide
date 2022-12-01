import { useRef } from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Portfolio() {
    const carRef = useRef(null);
    const motorbikeRef = useRef(null);
    const theorieRef = useRef(null);

    return (
        <div id="portfolio">
            <Header title="Leistungen" image="https://images.unsplash.com/photo-1630406144797-821be1f35d75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80" />
            <div className="selection-container">
                <div className="grid-expanded">
                    <h2>Für welchen Schwerpunkt interessierst du dich?</h2>
                    <div className="selection">
                        <button onClick={() => carRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Auto Fahrtraining</button>
                        <button onClick={() => motorbikeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Motorrad Fahrtraining</button>
                        <button onClick={() => theorieRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Schulung Theorie</button>
                    </div>
                </div>
                <div className="grid-text_wide disclaimer">
                    <p><b>Hinweis: Die genauen Trainingsinhalte werden immer auf deine individuellen Bedürfnisse abgestimmt. Bei den unten aufgeführten Punkten handelt es sich um mögliche Schwerpunkte.</b></p>
                </div>
            </div>
            <div className="grid-text_wide">
                <section className="portfolio-section">
                    <h2 ref={carRef}>Auto Fahrtraining</h2>
                    <div className="description">
                        <p>
                            Im Bereich PKW-Coaching gebe ich vor allem Auffrischungsstunden, Schulung von Senior*innen und Fahrtraining für Kund*innen mit Ängsten oder sonstigen Einschränkungen. 
                            Auch Fragen zum besseren Kennenlernen des eigenen Fahrzeugs mit den umfangreichen Assistenzsystemen beantworte ich sehr gerne. 
                        </p>
                        <p>
                            In der Regel werden die Auto-Trainings mit dem eigenen Kfz meiner Kund*innen durchgeführt. Auf Anfrage ist es aber auch möglich, mit einem Fahrschulfahrzeug zu fahren.
                        </p>
                    </div>
                    <h3>Mögliche Coaching-Schwerpunkte:</h3>
                    <div className="section-topics">
                        <p>Auffrischungsstunden</p>
                        <p>Wiedereinstieg nach längerer Fahrpause</p>
                        <p>Sicheres Fahren im Alter</p>
                        <p>Fahrängste nach Unfall</p>
                        <p>Unterstützung bei Blockaden oder Panikattacken</p>
                        <p>Fahrtechnik und Notmanöver</p>
                    </div>
                    <div className="section-topics">
                        <p>Fahren mit körperlichen Einschränkungen</p>
                        <p>Beobachtungsfahrt nach Erkrankungen</p>
                    </div>
                    <div className="section-topics">
                        <p>Wichtige Grundkenntnisse über Fahrzeug und Mechanik</p>
                        <p>Richtige Vorbereitubng vor der Fahrt inkl. Sitzposotion und co.</p>
                        <p>Neues Fahrzeug / Assistenzsysteme kennenlernen</p>
                    </div>
                    <div className="section-topics">
                        <p>Sicheres Fahren mit Wohnmobil, Wohnwagen oder Anhänger</p>
                    </div>
                </section>
                <section className="portfolio-section">
                    <h2 ref={motorbikeRef}>Motorrad Fahrtraining</h2>
                    <div className="description">
                        <p>
                            Im Bereich Motorrad-Coaching begleite ich öfter ehemalige Fahrschüler, aber auch als Wiedereinsteiger nach längerer Fahrpause bist du bei mir an der richtigen Adresse. 
                            Falls du Späteinsteiger bist und gerade überlegst, den Motorradführerschein zu machen, habe ich wertvolle Tipps und Hinweise parat. 
                        </p>
                        <p>
                            Mit geübteren Bikern führe ich gerne Geschicklichkeitsübungen durch oder gebe Tipps zur Verbesserung der Fahrtechnik und Notmanöver.
                            Auf Wunsch sind auch Trainings in Kleingruppen oder Roller-Trainings möglich.
                        </p>
                    </div>
                    <h3>Mögliche Coaching-Schwerpunkte:</h3>
                    <div className="section-topics">
                        <p>Tipps zum Führerschein für Späteinsteiger</p>
                        <p>Auffrischungsstunden</p>
                        <p>Wiedereinstieg nach längerer Fahrpause</p>
                    </div>
                    <div className="section-topics">
                        <p>Verbesserung der Fahrtechnik</p>
                        <p>Notmanöver</p>
                        <p>Sicherheit in Kurven und Schräglage</p>
                    </div>
                    <div className="section-topics">
                        <p>Beratung bei der Wahl des richtigen Motorrads</p>
                        <p>Beratung bei der Wahl der richtgiten Schutzkleidung</p>
                        <p>Neues Fahrzeug kennenlernen</p>
                    </div>
                </section>
                <section className="portfolio-section">
                    <h2 ref={theorieRef}>Schulung Theorie</h2>
                    <div className="description">
                        <p>
                            Die Straßenverkehrsordnung, Verkehrsregeln und Verkehrsrecht sind meine Spezialgebiete. Durch regelmäßige Unterrichte in den verschiedenen Führerscheinklassen und Bereichen der Feuerwehr und Berufskraftfahrer, Aus- und Weiterbildungen bleibe ich mit meinem Wissen ständig am Ball. 
                            Aus diesen Schulungen und den regelmäßigen Kontakt zu unterschiedlichsten Verkehrsteilnehmern kenne ich die Defizite und Wissenslücken vieler Verkehrsteilnehmer. 
                        </p>
                        <p>
                            Ich unterrichte regelmäßig in Volkshochschulen, Seniorenvereinen oder generell interessierten Gruppen über Verkehrsregeln, Neuerungen der Straßenverkehrsordnung, Fahrzeugtechnik und Fahrsicherheit.
                        </p>
                    </div>
                    <h3>Mögliche Coaching-Schwerpunkte:</h3>
                    <div className="section-topics">
                        <p>Auffrischungsstunden</p>
                        <p>Wiedereinstieg nach längerer Fahrpause</p>
                        <p>Sicheres Fahren im Alter</p>
                        <p>Fahrängste nach Unfall</p>
                        <p>Unterstützung bei Blockaden oder Panikattacken</p>
                        <p>Fahrtechnik und Notmanöver</p>
                    </div>
                    <div className="section-topics">
                        <p>Fahren mit körperlichen Einschränkungen</p>
                        <p>Beobachtungsfahrt nach Erkrankungen</p>
                    </div>
                    <div className="section-topics">
                        <p>Wichtige Grundkenntnisse über Fahrzeug und Mechanik</p>
                        <p>Richtige Vorbereitubng vor der Fahrt inkl. Sitzposotion und co.</p>
                        <p>Neues Fahrzeug / Assistenzsysteme kennenlernen</p>
                    </div>
                    <div className="section-topics">
                        <p>Sicheres Fahren mit Wohnmobil, Wohnwagen oder Anhänger</p>
                    </div>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;
