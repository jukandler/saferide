import { useRef } from 'react';
import Header from '../components/header/Header';
import heroCoaching from '../assets/hero_portfolio.jpg';

function Coaching() {
    const carRef = useRef(null);
    const motorbikeRef = useRef(null);
    const theorieRef = useRef(null);

    return (
        <div id="coaching">
            <Header title="Fahrtraining / Coaching" image={heroCoaching} />
            <div className="selection-container">
                <div className="grid-expanded">
                    <h2>Für welchen Schwerpunkt interessierst du dich?</h2>
                    <div className="selection">
                        <button className="primary" onClick={() => carRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Auto Fahrtraining</button>
                        <button className="primary" onClick={() => motorbikeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Motorrad Fahrtraining</button>
                        <button className="primary" onClick={() => theorieRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Schulung Theorie</button>
                    </div>
                </div>
                <div className="grid-text_wide disclaimer">
                    <p><b>Hinweis: Die genauen Trainingsinhalte werden immer auf deine individuellen Bedürfnisse abgestimmt. Bei den unten aufgeführten Punkten handelt es sich um mögliche Schwerpunkte.</b></p>
                </div>
            </div>
            <div className="grid-text_wide">
                <section>
                    <h2 ref={carRef}>Auto Fahrtraining</h2>
                    <div>
                        <p>
                            Im Bereich PKW-Coaching gebe ich vor allem Auffrischungsstunden, Schulung von Senior*innen und Fahrtraining für Kund*innen mit Ängsten oder sonstigen Einschränkungen. 
                            Auch Fragen zum besseren Kennenlernen des eigenen Fahrzeugs mit den umfangreichen Assistenzsystemen beantworte ich sehr gerne. 
                        </p>
                        <p>
                            In der Regel werden die Auto-Trainings mit dem eigenen Kfz meiner Kund*innen durchgeführt. Auf Anfrage ist es aber auch möglich, mit einem Fahrschulfahrzeug zu fahren.
                        </p>
                    </div>
                    <h3>Mögliche Coaching-Schwerpunkte:</h3>
                    <div className="section-topics align-left">
                        <li>Auffrischungsstunden</li>
                        <li>Wiedereinstieg nach längerer Fahrpause</li>
                        <li>Sicheres Fahren im Alter</li>
                        <li>Fahrängste nach Unfall</li>
                        <li>Unterstützung bei Blockaden oder Panikattacken</li>
                        <li>Fahrtechnik und Notmanöver</li>
                    </div>
                    <div className="section-topics align-left">
                        <li>Fahren mit körperlichen Einschränkungen</li>
                        <li>Beobachtungsfahrt nach Erkrankungen</li>
                    </div>
                    <div className="section-topics align-left">
                        <li>Wichtige Grundkenntnisse über Fahrzeug und Mechanik</li>
                        <li>Richtige Vorbereitung vor der Fahrt inkl. Sitzposition und co.</li>
                        <li>Neues Fahrzeug / Assistenzsysteme kennenlernen</li>
                        <li>Beratung und Tipps zum Thema MPU</li>
                    </div>
                    <div className="section-topics align-left">
                        <li>Sicheres Fahren mit Wohnmobil, Wohnwagen oder Anhänger</li>
                    </div>
                </section>
                <section>
                    <h2 ref={motorbikeRef}>Motorrad Fahrtraining</h2>
                    <div>
                        <p>
                            Im Bereich Motorrad-Coaching begleite ich öfter ehemalige Fahrschüler, aber auch als Wiedereinsteiger nach längerer Fahrpause bist du bei mir an der richtigen Adresse. 
                            Falls du Späteinsteiger bist und gerade überlegst, den Motorradführerschein zu machen, habe ich wertvolle Tipps und Hinweise parat. 
                        </p>
                        <p>
                            Mit geübteren Bikern führe ich gerne Geschicklichkeitsübungen durch oder gebe Tipps zur Verbesserung der Fahrtechnik, insbesondere Kurventechnik und Notmanöver. Ich begleite natürlich mit meinem Motorrad, kann alle Übungen und Techniken vorfahren und über Funk direktes Feedback geben. 
                            Auf Wunsch sind z.B. auch Trainings in Zweiergruppen oder Roller-Trainings möglich.
                        </p>
                        <p>
                            Gerne gebe ich dir auch einen Einblick in die unterschiedlichen ADAC Motorrad-Sicherheitstrainings und berate dich, ob ein solches Training sinnvoll für dich sein kann.
                        </p>
                    </div>
                    <h3>Mögliche Coaching-Schwerpunkte:</h3>
                    <div className="section-topics align-left">
                        <li>Tipps zum Führerschein für Späteinsteiger</li>
                        <li>Auffrischungsstunden</li>
                        <li>Wiedereinstieg nach längerer Fahrpause</li>
                    </div>
                    <div className="section-topics align-left">
                        <li>Verbesserung der Fahrtechnik</li>
                        <li>Notmanöver</li>
                        <li>Sicherheit in Kurven und Schräglage</li>
                    </div>
                    <div className="section-topics align-left">
                        <li>Beratung bei der Wahl des richtigen Motorrads</li>
                        <li>Beratung bei der Wahl der richtgiten Schutzkleidung</li>
                        <li>Neues Fahrzeug kennenlernen</li>
                    </div>
                </section>
                <section>
                    <h2 ref={theorieRef}>Schulung Theorie</h2>
                    <h3>Vorträge für mehr Sicherheit und Klarheit im Straßenverkehr</h3>
                    <p>Als Fahrlehrer, Fahrtrainer und ADAC-Fahr-Fitness-Check-Trainer biete ich regelmäßig Vorträge für Volkshochschulen, Seniorenvereine und interessierte Gruppen an. Mit viel Erfahrung und Praxisbezug vermittle ich Wissen rund um Mobilität, Fahrkompetenz und aktuelle Verkehrsregeln – verständlich, anschaulich und immer mit einem Blick auf den Alltag der Teilnehmenden. Besonders beliebt sind diese beiden Themen:</p>
                    <h4><b>1. Autofahren im Alter – Sicher mobil bleiben</b></h4>
                    <p>Für viele ältere Menschen bedeutet Autofahren Freiheit und Selbstständigkeit. Doch mit zunehmendem Alter tauchen Fragen auf:
                        Bin ich noch sicher unterwegs? Welche Auswirkungen haben Medikamente, nachlassende Reaktionsfähigkeit oder gesundheitliche Einschränkungen?
                        In diesem Vortrag erfahren Sie, worauf ältere Fahrerinnen und Fahrer sowie deren Angehörige achten sollten. Wir sprechen über Themen wie Sehvermögen, Reaktionsfähigkeit, Beweglichkeit und den Umgang mit Krankheiten wie Demenz. Ich stelle Möglichkeiten zur freiwilligen Überprüfung der Fahrtauglichkeit vor – z. B. durch den ADAC Fahr-Fitness-Check – und erläutere, wie gezielte Auffrischungsstunden oder Sicherheitstrainings helfen können, die eigene Mobilität verantwortungsvoll zu sichern.
                    </p>
                    <h4><b>2. Neue Regeln & Irrtümer im Straßenverkehr – Was Sie wirklich wissen müssen</b></h4>
                    <p>Straßenverkehrsregeln ändern sich – und nicht alles, was im Alltag als "üblich" gilt, ist auch korrekt. In diesem Vortrag klären wir über weitverbreitete Irrtümer auf und beleuchten wichtige Neuerungen der letzten Jahre.
                        Themen sind unter anderem:
                    </p>
                    <li>Vorbeifahren an haltenden Schulbussen</li>
                    <li>Blinken in abknickenden Vorfahrtsstraßen</li>
                    <li>"Rechts vor links" auf Parkplätzen</li>
                    <li>Unterschiede zwischen Grünpfeil (Blechschild) und Leuchtpfeil</li>
                    <li>Handynutzung am Steuer</li>
                    <p> Ziel ist es, Sicherheit und Selbstbewusstsein im Straßenverkehr zu stärken – durch Wissen, das man sofort umsetzen kann.</p>
                </section>
            </div>
        </div>
    )
}

export default Coaching;
