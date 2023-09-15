import Header from '../components/header/Header';
import heroTestimonials from '../assets/hero_testimonials.jpg';
import buchegger from '../assets/buchegger.jpg';
import junker from '../assets/junker-brand.jpg';

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
                    <h3>Brigitte Junker Brand, 83</h3>
                    <img className="content-image" alt="frau neben motorroller stehend" src={junker}></img>
                    <p>„Vor 40 Jahren erlangte ich (damals 30 Jahre alt) meinen Motorradführerschein, jedoch musste ich aufgrund der Geburt meines Kindes das Motorradfahren aufgeben. Dank Stefan konnte ich im Coaching wieder Vertrauen gewinnen und fühle mich heute unbeschwert und sicher, während ich mit meinem Motorroller die Landschaft erkunde. Es ist nie zu spät, seine Leidenschaft wiederzufinden und Hindernisse zu überwinden.“</p>
                </section>
            </div>
        </div>
    )
}

export default Testimonials;
