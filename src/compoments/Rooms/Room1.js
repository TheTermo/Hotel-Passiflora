import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/gradient.jpg";
import "./Rooms.scss";
import {Button, Grid, Paper} from "@mui/material";
import axios from 'axios';
import CurrencyConverter from "./CurrencyConverter";
import Footer from "../Footer/Footer";
import Reservations from "./Reservations/Reservations";

function Room1() {
    const roomPrice = 80;
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);

    useEffect(() => {
        axios.get('/initialBookings')
            .then(response => {
                setStart(response.data.start);
                setEnd(response.data.end);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania początkowych rezerwacji:', error);
            });

    }, []);

    const handleSelectDate = ({ start, end }) => {
        console.log(`Room1 - Selected range: ${start} to ${end}`);

        axios.post('/bookings', {
            room: 'Room 1',
            start_date: start,
            end_date: end,
        })
            .then(response => {
                console.log('Rezerwacja udana:', response.data);
            })
            .catch(error => {
                console.error('Błąd podczas rezerwacji:', error);
            });
    };

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
                        <p>Pokój jednoosobowy jest zarezerwowany tylko dla jednego gościa. Znajduje się w nim sypialnia
                            z łóżkiem o pojedynczym rozmiarze oraz prywatna łazienka. Wszystko, czego potrzebujesz, jest
                            dla Ciebie przygotowane: pościel i koce, ręczniki, mydło i szampon, suszarka do włosów są
                            zapewnione. W pokoju znajduje się klimatyzacja, a oczywiście również WiFi.</p>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <div className="Room1">
                                <h2>Dostępność</h2>
                                <Reservations
                                    selectedStart={new Date()}
                                    selectedEnd={null}
                                    onSelectDate={handleSelectDate}
                                />
                            </div>
                            <Button onClick={() => handleSelectDate({start, end})}
                                    variant="contained" color="primary" style={{ marginTop: '2%', marginBottom: '2%'}}>
                                    Zarezerwuj teraz</Button>

                            <p>Cena: {roomPrice} zł</p>
                            <CurrencyConverter roomPrice={roomPrice}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Zdjęcia</h3>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </>
    );
}

export default Room1;