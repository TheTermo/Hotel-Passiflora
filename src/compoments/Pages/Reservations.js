import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import ImgMediaCard from "../Rooms/ReservationGrid";
import Footer from "../Footer/Footer";

function Reservations() {
    return (
        <>
            <>
                <Navbar/>
                <Header
                    cName="headerSubpage"
                    headerImg={AboutImg}
                    title="Rezerwacje"
                />
                <ImgMediaCard/>
                <Footer/>
            </>
        </>
    )
}

export default Reservations;