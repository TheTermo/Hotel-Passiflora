import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import DescriptionHotel from "../HomeBody/DescriptionHotel";
import Attractions from "../HomeBody/Attractions";
import Footer from "../Footer/Footer";
import Testimonials from "../HomeBody/Testimonials";

function Home  (){
    return(
            <>
                <Navbar/>
                <Header
                     cName="header"
                     headerImg="https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     title="Odkryj Wyjątkowy Wypoczynek"
                     text="Nasze komfortowe pokoje, eleganckie wnętrza i doskonała obsługa stworzą dla Ciebie niezapomniane chwile relaksu"
                     buttonText="Rezerwacje"
                     url="/"
                     btnClass="show"
                />
                <DescriptionHotel/>
                <Testimonials/>
                <Attractions/>
                <Footer/>
            </>
        )
}
export default Home;