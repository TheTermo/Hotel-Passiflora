import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import Footer from "../Footer/Footer";
import GalleryGrid from "../Gallery/GalleryGrid";

function Gallery() {
    return (
        <>
            <>
                <Navbar/>
                <Header
                    cName="headerSubpage"
                    headerImg={AboutImg}
                    title="Galeria"
                />
                <GalleryGrid/>
                <Footer/>
            </>
        </>
    )
}

export default Gallery;