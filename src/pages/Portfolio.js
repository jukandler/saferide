import { useRef } from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import heroPortfolio from '../assets/hero_portfolio.jpg';

function Portfolio() {
    const carRef = useRef(null);
    const motorbikeRef = useRef(null);
    const theorieRef = useRef(null);
    const fitnessCheckRef = useRef(null);

    return (
        <div id="portfolio">
            <Header title="Leistungen" image={heroPortfolio} />
            <div className="selection-container">
                <div className="grid-expanded">
                    <h2>Für welchen Schwerpunkt interessierst du dich?</h2>
                    <div className="selection">
                        <button className="primary" onClick={() => carRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Auto Fahrtraining</button>
                        <button className="primary" onClick={() => motorbikeRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Motorrad Fahrtraining</button>
                        <button className="primary" onClick={() => theorieRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>Schulung Theorie</button>
                        <button className="primary" onClick={() => fitnessCheckRef.current.scrollIntoView({ behavior: "smooth", block: "center" })}>ADAC Fahr-Fitness-Check</button>
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
                    </div>
                    <div className="section-topics align-left">
                        <li>Sicheres Fahren mit Wohnmobil, Wohnwagen oder Anhänger</li>
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
                    <h3>Beliebter Unterricht: "Die 50 größten Irrtümer im Straßenverkehr"</h3>
                    <div className="section-topics align-left">
                        <p><b>Unter anderem werden folgende Fragen geklärt:</b></p>
                        <li>Sind Kopfhörer beim Radfahren wirklich verboten?</li>
                        <li>Dürfen Radfahrer nebeneinander fahren?</li>
                        <li>Kann ich den Alkohol- oder Drogentest bei einer Polizeikontrolle verweigern?</li>
                        <li>Darf ich die Nebelschlußleuchte auch bei Regen oder Schneefall einschalten?</li>
                        <li>Wie muss ich mich bei Bussen mit Warnblinklicht verhalten?</li>
                        <li>Worin liegt der Unterschied zwischen "grünem Pfeil" (Leuchtpfeil)" und "Grünpfeil" (Blechschild)?</li>
                        <li>Gibt es neben der 0,5-Promille-Grenze noch weitere Promillegrenzen?</li>
                        <li>Darf ich mit abgelaufenem TÜV fahren?</li>
                        <li>Gilt auf Parkplätzen rechts vor links?</li>
                        <li>Reicht es, bei einem Parkrempler einen Zettel zu hinterlassen?</li>
                        <li>Darf man wegen Wild auf der Fahrbahn stark bremsen?</li>
                        <li>Ist Fahren mit Flip Flops oder barfuß verboten?</li>
                        <li>Darf man bei verletzten Motorradfahrern den Helm abnehmen?</li>
                        <li>Schadet untertourig fahren dem Motor?</li>
                        <li>Darf man mit dem Fahrrad alkoholisiert fahren?</li>
                        <li>Gehören die besseren Reifen wirklich auf die angetriebene Achse?</li>
                        <li>Darf ich bei Aquaplaning oder in einer Kurve stark bremsen?</li>
                        <li>uvm...</li>
                    </div>
                </section>
                <section className="portfolio-section">
                    <h2 ref={fitnessCheckRef}>ADAC Fahr-Fitness-Check</h2>
                    <div className="description">
                        <p>
                            Der Fahr-Fitness-Check ist ein speziell vom ADAC konzipiertes Programm, das bei mir als Trainer absolviert werden kann. Das Programm richtet sich an ältere, noch regelmäßig Auto fahrende Personen, die zusammen mit speziell durch den ADAC qualifizierten Fahrlehrinnen und Fahrlehrern ihre momentanen persönlichen Fahrfertigkeiten bewerten möchten - kompetent, neutral und ohne Risiko für den Führerschein.
                        </p>
                        <p>
                            Weitere Infos zum Fahr-Fitness-Check sind auf diesem Flyer zu finden:
                        </p>
                        <p>
                            <a href="https://assets.adac.de/image/upload/v1654159908/ADAC-eV/KOR/Text/PDF/2022-05_VSP_FLY_Fahrfitness-Check_05_22_42_g250nm.pdf" target="_blank" rel="noopener noreferrer">
                                &gt; Flyer ADAC Fahr-Fitness-Check
                            </a>
                        </p>
                    </div>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio;
