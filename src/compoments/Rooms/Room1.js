import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/gradient.jpg";
import "./Rooms.scss";
import { Grid, Paper } from "@mui/material";
import CurrencyConverter from "./CurrencyConverter";
import Footer from "../Footer/Footer";

function Room1() {
    const roomPrice = 80;
    return (
        <>
            <Navbar />
            <Header cName="headerRoom" headerImg={AboutImg} />
            <div className="zGrid">
                <Grid container spacing={2}>
                    <Grid item xs={6} align="left">
                        <h2>Pokój jednoosobowy</h2><br/>
                        <p>Maksymalna liczba gości: 1</p>
                        <p>Powierzchnia pokoju: 18 m²</p>
                        <p>Rozmiar łóżka: Jednoosobowe</p>
                        <p>Prywatna łazienka: 1</p>
                        <br/>
                        <p>Pokój jednoosobowy jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>(Rezerwacja)
                            <p>Cena: {roomPrice} zł</p>
                            <CurrencyConverter roomPrice={roomPrice}/>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                        <h3>Zdjęcia</h3>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
}

export default Room1;