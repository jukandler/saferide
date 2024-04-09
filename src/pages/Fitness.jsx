import Header from '../components/header/Header';
import heroCoaching from '../assets/hero_fitness.jpg';
import posterSat1 from '../assets/posterSat1.jpg';
import posterBR from '../assets/posterBR.jpg';
import berichtLT from '../assets/berichtLT.pdf';
import posterLT from '../assets/berichtLT.jpg';

function Fitness() {

    return (
        <div id="fitness">
            <Header title="Fahr-Fitness-Check" image={heroCoaching} />
            <div className="grid-text_wide">
                <section>
                    <h2>ADAC Fahr-Fitness-Check</h2>
                    <div>
                        <h3>Weil Mobilität keine Frage des Alters ist</h3>
                        <b>Sicherheit beim Autofahren, insbesondere im Alter, hat höchste Priorität.</b>
                        <p>
                            Der Fahr-Fitness-Check ist ein speziell vom ADAC konzipiertes Programm, das bei mir als Trainer absolviert werden kann. Das Programm richtet sich an ältere, noch regelmäßig Auto fahrende Personen, die zusammen mit speziell durch den ADAC qualifizierten Fahrlehrinnen und Fahrlehrern ihre momentanen persönlichen Fahrfertigkeiten bewerten möchten - kompetent, neutral und ohne Risiko für den Führerschein.
                        </p>
                        <h3>Bayerischer Rundfunk (März 2024)</h3>
                        <p>Senioren am Steuer: Ist ein Medizin-Check sinnvoll?</p>
                        <a href="https://www.ardmediathek.de/video/gesundheit/senioren-am-steuer-ist-ein-medizin-check-sinnvoll/br-fernsehen/Y3JpZDovL2JyLmRlL3ZpZGVvLzUyZWRkMjE0LWE2YTYtNDQ4Ni04NTk2LTdiNzc5Mjk0NmI1Mg" rel="noopener noreferrer" target="_blank" className="video-preview">
                            <div className="icon-play"></div>
                            <img src={posterBR} alt="Bayrischer Rundfunk Video Fahr-Fitness-Check"></img>
                        </a>
                        <h3>SAT.1 (August 2023)</h3>
                        <p>On Tour! Auto fahren im Alter? Das taugt ein Fahr-Fitness-Check</p>
                        <a href="https://www.sat1.de/serien/1730-sat1-bayern/videos/on-tour-auto-fahren-im-alter-das-taugt-ein-fahr-fitness-check" rel="noopener noreferrer" target="_blank" className="video-preview">
                            <div className="icon-play"></div>
                            <img src={posterSat1} alt="Vorschaubild zum Video Fahr-Fitness-Check"></img>
                        </a>
                        <h3>Bericht im Landsberger Tagblatt (Februar 2024 )</h3>
                        <a href={berichtLT} target="_blank" rel="noopener noreferrer">
                            <img src={posterLT} alt="Zeitungsbericht aus dem Landsberger Tagblatt"></img>
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
