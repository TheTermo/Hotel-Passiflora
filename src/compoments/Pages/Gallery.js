import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import Image1 from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import Image2 from "../../images/eddi-aguirre-ZAVHbpOn4Jk-unsplash.jpg";
import { ImageList, ImageListItem } from "@mui/material";
import Footer from "../Footer/Footer";

function Gallery  (){
    const itemData = [
        { img: Image1, title: 'Tytuł obrazu 1' },
        { img: Image2, title: 'Tytuł obrazu 2' },
        { img: Image2, title: 'Tytuł obrazu 2' },
        { img: Image2, title: 'Tytuł obrazu 2' },
        { img: Image2, title: 'Tytuł obrazu 2' },
        { img: Image2, title: 'Tytuł obrazu 2' }
    ];
    return(
        <>
            <>
                <Navbar/>
                <Header
                    cName="headerSubpage"
                    headerImg={AboutImg}
                    title="Galeria"
                />

                <ImageList sx={{ margin: 'auto', width: 500, height: 450, mt: 4,mb: 4}} variant="woven" cols={3} gap={8} >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=161&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
                <Footer/>
            </>
        </>
    )
}
export default Gallery;