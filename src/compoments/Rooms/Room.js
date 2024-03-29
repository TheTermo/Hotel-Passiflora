import React from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutImg from "../../images/gradient.jpg";
import "./Rooms.scss";
import {Grid, Paper} from "@mui/material";
import roomsData from "./roomsData";
import {useParams} from 'react-router-dom';
import Carousel from "react-material-ui-carousel";
import Booking from "./Booking"

const Room = () => {
    const {id} = useParams();
    const roomId = parseInt(id);
    const room = roomsData.find(room => room.id === roomId);

    return (
        <>
            <Navbar/>
            <Header cName="headerRoom" headerImg={AboutImg}/>
            <div className="zGrid">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} align="left">
                        <h2>{room.roomType}</h2><br/>
                        <p>Maksymalna liczba gości: {room.maxGuests}</p>
                        <p>Powierzchnia pokoju: {room.roomSize} m²</p>
                        <p>Rozmiar łóżka: {room.bedSize}</p>
                        <p>Prywatna łazienka: {room.privateBathroom}</p>
                        <br/>
                        <p>{room.description}</p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper style={{padding: "1px 5px"}}>
                            <h2>Rezerwacja</h2><br/>
                            <Booking/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Zdjęcia</h3>
                        <Carousel>
                            {room.images.map((image, i) => (
                                <Item key={i} image={image}/>
                            ))}
                        </Carousel>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
};

function Item(props) {
    return (
        <img src={props.image} alt="Room" className="imageStyle"/>
    );
}

export default Room;