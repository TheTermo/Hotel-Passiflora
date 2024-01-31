import "./attractions.scss"
import * as React from "react";
import Atrakcja1 from "../../images/snieg.jpg"
import Atrakcja2 from "../../images/wang.JPG"
import Atrakcja3 from "../../images/Kolorowa.jpg"

function Attractions() {
    return (
        <div className="attractions">
            <h1>Pobliskie Atrakcje</h1>
            <p className="spaceP">Popularne atrakcje w okolicy naszego hotelu</p>

            <div className="attractionsCard">
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja1}/>
                    </div>
                    <h4>Śnieżka</h4>
                    <p>Śnieżka znacznie góruje nad otaczającymi ją grzbietami. Wznosi się w zachodniej części Czarnego
                        Grzbietu. Na zachodzie Przełęcz pod Śnieżką oddziela ją od Równi pod Śnieżką</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja2}/>
                    </div>
                    <h4>Wang</h4>
                    <p>Ewangelicki kościół parafialny w Karpaczu w Karkonoszach, przeniesiony w 1842 z miejscowości
                        Vang,
                        leżącej nad jeziorem Vangsmjøsa w Norwegii.</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja3}/>
                    </div>
                    <h4>Tor saneczkowy</h4>
                    <p>Wózkiem może zjeżdżać jedna lub dwie osoby. Czas przejazdu trwa od 5 do 7 minut.
                        Tor nie posiada ograniczeń wiekowych, jednak dzieci do lat 8 muszą zjeżdżać z osobą
                        pełnoletnią.</p>
                </div>
            </div>
        </div>
    )
}

export default Attractions;