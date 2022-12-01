import { MdOutlineAutoAwesome, MdTagFaces, MdEditCalendar } from "react-icons/md";

import './usp.css';

function Usp({ scrollToContact }) {
    return (
            <div className="usp-container">
                <h3>Personal Coaching mit SafeRide</h3>
                <div className="usp-wrapper grid-text_wide">
                    <div class="usp">
                        <div className="icon">
                            <MdOutlineAutoAwesome />
                        </div>
                        <div className="title">
                            Individuell
                        </div>
                    </div>
                    <div class="usp">
                        <div className="icon">
                            <MdEditCalendar />
                        </div>
                        <div className="title">
                            Flexibel
                        </div>
                    </div>
                    <div class="usp">
                        <div className="icon">
                            <MdTagFaces />
                        </div>
                        <div className="title">
                            Persönlich
                        </div>
                    </div>
                </div>
                <button className="primary" onClick={scrollToContact}>Jetzt Kontakt aufnehmen</button>
            </div>
    )
}

export default Usp;
