import React, {useState} from 'react';
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AboutImg from "../../images/gradient.jpg";
import "./Rooms.scss";
import { Button, Grid, Paper } from "@mui/material";
import CurrencyConverter from "./CurrencyConverter";
import roomsData from "./roomsData";
import { useParams } from 'react-router-dom';
import "../Gallery/galleryGrip.scss"
import CloseIcon from '@mui/icons-material/Close';
import Image1 from "../../images/img1.jpg";
import Image2 from "../../images/img2.jpg";
import Image3 from "../../images/img3.jpg";
import Image4 from "../../images/img4.jpg";
import Image5 from "../../images/img5.jpg";
import Image6 from "../../images/img6.jpg";

const Room = () => {
    const { id } = useParams();
    const roomId = parseInt(id);
    const room = roomsData.find(room => room.id === roomId);

    let data = [
        {id: 1, imgSrc: Image1,},
        {id: 2, imgSrc: Image2,},
        {id: 3, imgSrc: Image3,},
        {id: 4, imgSrc: Image4,},
        {id: 5, imgSrc: Image5,},
        {id: 6, imgSrc: Image6,},
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

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
                        <Paper>
                            <div>
                                <h2>Dostępność</h2>
                            </div>
                            <Button variant="contained" color="primary" style={{marginTop: '2%', marginBottom: '2%'}}>
                                Zarezerwuj teraz
                            </Button>
                            <p>Cena: {room.roomPrice} zł</p>
                            <CurrencyConverter roomPrice={room.roomPrice}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <h3>Zdjęcia</h3>

                        {/*{room.images.map((image, index) => (*/}
                        {/*    <img key={index} src={image} alt={`Zdjęcie ${index + 1}`} style={{ width: '100%' }} />*/}
                        {/*))}*/}

                        <div className={model ? "model open" : "model"}>
                            <img alt="img" src={tempimgSrc}/>
                            <CloseIcon onClick={() => setModel(false)}/>
                        </div>
                        <div className="gallery">
                            {data.map((item, index)=>{
                                return(
                                    <div className="pics" key={index} onClick={()=> getImg(item.imgSrc)}>
                                        <img alt="img1" src={item.imgSrc} style={{width:'100%'}}/>
                                    </div>
                                )
                            })}
                        </div>

                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    );
};
export default Room;