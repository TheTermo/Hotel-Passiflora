import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/gradient.jpg";
import "./Rooms.scss";

function Room2  (){
    return(
        <>
            <>
                <Navbar/>
                <Header
                    cName="headerRoom"
                    headerImg={AboutImg}
                />
                <div>
                    <h2>Double Room</h2>
                    <p>Max number of guests: 2 - 3</p>
                    <p>Room size: 26 m²</p>
                    <p>Bed size: Double</p>
                    <p>Private bath: 1</p>
                    <br/>
                    <p>Double Room is reserved for two or three guests. There is a bedroom with a double size bed and a
                        private bathroom. Everything you need prepared for you: sheets and blankets, towels, soap and
                        shampoo, hairdryer are provided. In the room there is AC and of course WiFi.</p>
                </div>
            </>
        </>
    )
}

export default Room2;