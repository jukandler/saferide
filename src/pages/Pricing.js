import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import heroPricing from '../assets/hero_pricing.jpg';

function Pricing() {
    return (
        <div id="pricing">
            <Header title="Preisübersicht" image={heroPricing} />
            <div className="grid-text_wide">
                <section>
                    <h2>Einzel-Training</h2>
                    <table>
                        <tr>
                            <td>60 min</td>
                            <td>60€</td>
                        </tr>
                        <tr>
                            <td>120 min</td>
                            <td>120€</td>
                        </tr>
                    </table>
                    <p style={{textAlign: "left"}}>
                        In der Regel werden die Auto-Trainings mit dem eigenen KFZ meiner Kund*innen durchgeführt. Auf Anfrage ist es aber auch möglich, mit einem Fahrschulfahrzeug zu fahren.
                        In diesem Fall fällt pro Stunde eine zusätzliche Gebühr von 15€ an.
                    </p>
                </section>
                <section>
                    <h2>Trainings in Zweiergruppen oder größeren Gruppen</h2>
                    <p style={{textAlign: "left"}}>
                        Preise für Trainings in Zweiergruppen oder größeren Gruppen auf Anfrage.
                    </p>
                </section>
                <section>
                    <h2>Schulung Theorie</h2>
                    <p style={{textAlign: "left"}}>
                        Presie für Theorie-Unterrichte varrieren je nach Dauer, Umfang und Teilnehmerzahl. Bei Interesse bitte einfach Kontakt aufnehmen.
                    </p>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing;
