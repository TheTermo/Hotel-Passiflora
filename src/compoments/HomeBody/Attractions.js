import "./attractions.scss"
import * as React from "react";
import Atrakcja1 from "../../images/wang.JPG"

function Attractions(){
    return(
        <div className="attractions">
            <h1>Pobliskie Atrakcje</h1>
            <p className="spaceP">Popularne atrakcje w okolicy naszego hotelu</p>

            <div className="attractionsCard">
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja1}/>
                    </div>
                    <h4>Wang</h4>
                    <p>Ewangelicki kościół parafialny w Karpaczu w Karkonoszach, przeniesiony w 1842 z miejscowości Vang,
                        leżącej nad jeziorem Vangsmjøsa w Norwegii.</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja1}/>
                    </div>
                    <h4>Wang</h4>
                    <p>Ewangelicki kościół parafialny w Karpaczu w Karkonoszach, przeniesiony w 1842 z miejscowości Vang,
                        leżącej nad jeziorem Vangsmjøsa w Norwegii.</p>
                </div>
                <div className="t-card">
                    <div className="t-image">
                        <img alt="HeaderImage" src={Atrakcja1}/>
                    </div>
                    <h4>Wang</h4>
                    <p>Ewangelicki kościół parafialny w Karpaczu w Karkonoszach, przeniesiony w 1842 z miejscowości Vang,
                        leżącej nad jeziorem Vangsmjøsa w Norwegii.</p>
                </div>
            </div>
        </div>
    )
}

export default Attractions;