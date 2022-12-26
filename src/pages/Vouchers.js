import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import heroVouchers from '../assets/hero_vouchers.jpg';

import voucherCar from '../assets/gutschein_auto.jpg';
import voucherBike from '../assets/gutschein_motorrad.jpg';

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
            <Footer />
        </div>
    )
}

export default Vouchers;
