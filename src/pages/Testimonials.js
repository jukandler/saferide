import Header from '../components/header/Header';
import heroTestimonials from '../assets/hero_testimonials.jpg';
import buchegger from '../assets/buchegger.jpg';
import junker from '../assets/junker-brand.jpg';
import helmut from '../assets/helmut.jpg';

function Testimonials() {

    return (
        <div id="fitness">
            <Header title="Erfahrungsberichte" image={heroTestimonials} />
            <div className="grid-text_wide">
                <section>
                    <h2>Das sagen meine Kunden</h2>
                    <h3>Sigrid Buchegger, 83</h3>
                    <img className="content-image" alt="frau mit fahr fitness check zertifikat im auto sitzend" src={buchegger}></img>
                    <p>„Ich erlebte vor Kurzem den plötzlichen und unerwarteten Verlust meines Mannes. Da mein Mann zu Lebzeiten immer für die Autofahrten zuständig war, verlor ich über die Jahre völlig meine Fahrpraxis. Dadurch wurde meine Mobilität und Unabhängigkeit stark beeinträchtigt. Dank der Unterstützung von Stefan konnte ich nun nach und nach meine Fähigkeiten zurückgewinnen und wieder eine Routine entwickeln. Stefan half mir dabei, wieder selbstständig und sicher ihr Auto zu fahren.“</p>
                    <div className="divider"></div>
                    <h3>Brigitte Junker Brand, 68</h3>
                    <img className="content-image" alt="frau neben motorroller stehend" src={junker}></img>
                    <p>„Als 30jährige machte ich meinen Motorradführerschein. Vorher und auch ab der Prüfung hatte ich so gut wie keine Fahrpraxis mit motorisierten Zweirädern. Denn überraschenderweise wurde ich genau zum Ende der Fahrschulzeit schwanger und so war diese Episode, selbst Roller oder Motorrad zu fahren erstmal für mich erledigt. 
                        <br></br>Jetzt fast 40 Jahre später reizte es mich und unser neuer Roller, der vor der Haustüre stand, es mit dem Fahren wieder zu probieren. Für mich bedeutet es einfach ein Gefühl von Freiheit und Unabhängigkeit und es ist nie zu spät, Herausforderungen anzunehmen. 
                        <br></br>In Stefan fand ich einen wunderbaren Coach, der mich nicht nur wieder an die Fahrtechnik heranführte, sondern mir auch viele wertvolle Tipps gab und ich durch seine souveräne Art vor allem Vertrauen gewann.“
                    </p>
                    <div className="divider"></div>
                    <h3>Helmut, 94</h3>
                    <img className="content-image" alt="Alter Mann stehet vor einem Auto und hält ein Zertifikat in seinen Händen" src={helmut}></img>
                    <p>„Ich entschied mich, den ADAC-Fahr-Fitness-Check zu machen, um sicherzugehen, dass ich noch fit genug für das Autofahren bin. Ich war erfreut, als Stefan mir ein positives Ergebnis mitteilte.“</p>
                </section>
            </div>
        </div>
    )
}

export default Testimonials;
