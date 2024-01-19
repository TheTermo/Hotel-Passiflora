import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/1.JPG";

function Contact  (){
    return(
        <>
            <Navbar/>
            <Header
                cName="headerSubpage"
                headerImg={AboutImg}
                title="Kontakt"
            />
        </>
    )
}

export default Contact;