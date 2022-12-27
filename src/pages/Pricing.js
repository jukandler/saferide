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
                        In diesem Fall läuft die Rechnungsstellung über die Fahrschule und orientiert sich am aktuellen Fahrstundenpreis.
                    </p>
                </section>
                <section>
                    <h2>Trainings in Zweiergruppen</h2>
                    <p style={{textAlign: "left"}}>
                        Neben Einzel-Trainings sind auch Trainings in Zweiergruppen und Rollertrainings möglich, Preise auf Anfrage.
                    </p>
                </section>
                <section>
                    <h2>Schulung Theorie</h2>
                    <p style={{textAlign: "left"}}>
                        Preise für Theorie-Unterrichte variieren je nach Dauer, Umfang und Teilnehmerzahl. Bei Interesse bitte einfach Kontakt aufnehmen.
                    </p>
                </section>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing;
