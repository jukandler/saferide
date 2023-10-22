import { MdOutlineAutoAwesome, MdTagFaces, MdEditCalendar } from "react-icons/md";

import './usp.css';

function Usp() {
    return (
            <div className="usp-container">
                <h3>Dein Personal Coaching im Raum Landsberg am Lech,<br></br>genau auf deine Bedürfnisse zugeschnitten.</h3>
                <div className="usp-wrapper grid-text_wide">
                    <div className="usp">
                        <div className="icon">
                            <MdOutlineAutoAwesome />
                        </div>
                        <div className="title">
                            Individuell
                        </div>
                    </div>
                    <div className="usp">
                        <div className="icon">
                            <MdEditCalendar />
                        </div>
                        <div className="title">
                            Flexibel
                        </div>
                    </div>
                    <div className="usp">
                        <div className="icon">
                            <MdTagFaces />
                        </div>
                        <div className="title">
                            Persönlich
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Usp;
