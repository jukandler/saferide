import Header from '../components/header/Header';
import heroVouchers from '../assets/hero_vouchers.jpg';

import voucherCar from '../assets/gutschein_auto.jpg';
import voucherBike from '../assets/gutschein_motorrad.jpg';
import voucherffc from '../assets/gutschein_ffc.jpg';

function Vouchers() {
    return (
        <div id="vouchers">
            <Header title="Gutscheine" image={heroVouchers} />
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
    )
}

export default Vouchers;
