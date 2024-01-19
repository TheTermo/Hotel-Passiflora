import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";

function Gallery  (){
    return(
        <>
            <>
                <Navbar/>
                <Header
                    cName="headerSubpage"
                    headerImg={AboutImg}
                    title="Galeria"
                />
            </>
        </>
    )
}

export default Gallery;