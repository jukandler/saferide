import Header from '../components/header/Header';
import heroPricing from '../assets/hero_pricing.jpg';
import voucherCar from '../assets/gutschein_auto.jpg';
import voucherBike from '../assets/gutschein_motorrad.jpg';
import voucherffc from '../assets/gutschein_ffc.jpg';

function Pricing() {
    return (
        <div id="pricing">
            <Header title="Preisübersicht / Gutscheine" image={heroPricing} />
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
            </div>
            <div id="vouchers">
                <h1>Gutscheine</h1>
                <div className="grid-text_wide">
                    <section>
                        <h2>Das perfekte Geschenk für jeden Anlass</h2>
                        <p>Gerne stelle ich auch Gutscheine für Auto- oder Motorrad-Fahrtrainings aus.</p>
                        <p>Ob Geburtstag, Weihnachten, Mutter oder Vatertag - beschenk deine Liebsten mit einem SafeRide Gutschein.</p>
                        <p>Der Gutscheinwert kann dabei individuell festgelegt werden.</p>
                    </section>
                </div>
                <div className="grid-expanded">
                        <img src={voucherCar} alt="Gutschein Auto Fahrtraining" />
                        <img src={voucherBike} alt="Gutschein Motorrad Fahrtraining" />
                </div>
                <div className="grid-text_wide">
                    <section>
                        <h2>ADAC Fahr-Fitness-Check</h2>
                        <p>Auch für den ADAC Fahr-Fitness-Check können Gutscheine ausgestellt werden:</p>
                    </section>
                </div>
                <div className="grid-text_wide">
                        <img src={voucherffc} alt="Gutschein ADAC Fahr-Fitness-Check" />
                </div>
            </div>
        </div>
    )
}

export default Pricing;
