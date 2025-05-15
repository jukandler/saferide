import Header from '../components/header/Header';
import heroMedia from '../assets/hero_media.jpg';
import posterSat1 from '../assets/posterSat1.jpg';
import posterBR from '../assets/posterBR.jpg';
import berichtLT from '../assets/berichtLT.pdf';
import posterLT from '../assets/berichtLT.jpg';
import posterZDF from '../assets/hallo-deutschland-logo.png';
import posterLT2 from '../assets/BerichtLT_Martin Stadler.jpg';
import berichtLT2 from '../assets/BerichtLT_Martin Stadler.pdf';
import posterLT3 from '../assets/BerichtLT_Vortrag Landratsamt.jpg';
import berichtLT3 from '../assets/BerichtLT_Vortrag Landratsamt.pdf';

function Media() {
    return (
        <div id="media">
            <Header title="Presseberichte" image={heroMedia} />
            <div className="grid-text_wide">
                <h3>ZDF - Hallo Deutschland (Mai 2025)</h3>
                <a href="https://www.zdf.de/video/magazine/hallo-deutschland-104/hallo-deutschland-vom-8-mai-2025-100" rel="noopener noreferrer" target="_blank" className="video-preview zdf">
                    <div className="icon-play"></div>
                    <img src={posterZDF} alt="Vorschaubild zum ZDF Beitrag Hallo Deutschland"></img>
                </a>
                <h3>Bericht im Landsberger Tagblatt (September 2024)</h3>
                <a href={berichtLT3} target="_blank" rel="noopener noreferrer">
                    <img src={posterLT3} alt="Zeitungsbericht aus dem Landsberger Tagblatt"></img>
                </a>
                <h3>Bericht im Landsberger Tagblatt (September 2024)</h3>
                <a href={berichtLT2} target="_blank" rel="noopener noreferrer">
                    <img src={posterLT2} alt="Zeitungsbericht aus dem Landsberger Tagblatt"></img>
                </a>
                <h3>Bayerischer Rundfunk (März 2024)</h3>
                <a href="https://www.ardmediathek.de/video/gesundheit/senioren-am-steuer-ist-ein-medizin-check-sinnvoll/br-fernsehen/Y3JpZDovL2JyLmRlL3ZpZGVvLzUyZWRkMjE0LWE2YTYtNDQ4Ni04NTk2LTdiNzc5Mjk0NmI1Mg" rel="noopener noreferrer" target="_blank" className="video-preview">
                    <div className="icon-play"></div>
                    <img src={posterBR} alt="Bayrischer Rundfunk Video Fahr-Fitness-Check"></img>
                </a>
                <h3>Bericht im Landsberger Tagblatt (Februar 2024)</h3>
                <a href={berichtLT} target="_blank" rel="noopener noreferrer">
                    <img src={posterLT} alt="Zeitungsbericht aus dem Landsberger Tagblatt"></img>
                </a>
                <h3>SAT.1 (August 2023)</h3>
                <p>On Tour! Auto fahren im Alter? Das taugt ein Fahr-Fitness-Check</p>
                <a href="https://www.sat1.de/serien/1730-sat1-bayern/videos/on-tour-auto-fahren-im-alter-das-taugt-ein-fahr-fitness-check" rel="noopener noreferrer" target="_blank" className="video-preview">
                    <div className="icon-play"></div>
                    <img src={posterSat1} alt="Vorschaubild zum Video Fahr-Fitness-Check"></img>
                </a>
            </div>
        </div>
    )
}

export default Media;
