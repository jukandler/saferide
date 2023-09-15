import Header from '../components/header/Header';
import heroCoaching from '../assets/hero_fitness.jpg';
import poster from '../assets/poster.jpg';

function Fitness() {

    return (
        <div id="fitness">
            <Header title="Fahr-Fitness-Check" image={heroCoaching} />
            <div className="grid-text_wide">
                <section>
                    <h2>ADAC Fahr-Fitness-Check</h2>
                    <div className="description">
                        <h3>Weil Mobilität keine Frage des Alters ist</h3>
                        <b>Sicherheit beim Autofahren, insbesondere im Alter, hat höchste Priorität.</b>
                        <p>
                            Der Fahr-Fitness-Check ist ein speziell vom ADAC konzipiertes Programm, das bei mir als Trainer absolviert werden kann. Das Programm richtet sich an ältere, noch regelmäßig Auto fahrende Personen, die zusammen mit speziell durch den ADAC qualifizierten Fahrlehrinnen und Fahrlehrern ihre momentanen persönlichen Fahrfertigkeiten bewerten möchten - kompetent, neutral und ohne Risiko für den Führerschein.
                        </p>
                        <h3>Video zum Fahr-Fitness-Check</h3>
                        <p>
                            In folgendem Video wird der ADAC Fahr-Fitness-Check präsentiert, welcher in Zusammenarbeit zwischen SAT.1, dem ADAC Südbayern und mir als zertifiziertem ADAC Fahr-Fitness-Check-Trainer entstanden ist:
                        </p>
                        <a href="https://www.sat1.de/serien/1730-sat1-bayern/videos/on-tour-auto-fahren-im-alter-das-taugt-ein-fahr-fitness-check" rel="noopener noreferrer" target="_blank" className="video-preview">
                            <div className="icon-play"></div>
                            <img src={poster} alt="Vorschaubild zum Video Fahr-Fitness-Check"></img>
                        </a>
                        <h3>Flyer</h3>
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
            </div>
        </div>
    )
}

export default Fitness;
