import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/1.JPG";
import {Button, Grid, TextField} from "@mui/material";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker, faMap   } from '@fortawesome/free-solid-svg-icons';
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

function Contact  (){
    return(
        <>
            <Navbar/>
            <Header
                cName="headerSubpage"
                headerImg={AboutImg}
                title="Kontakt"
            />
            <div className="zGrid">
                <Grid container spacing={2}>
                    <Grid item xs={6} align="center">
                        <h2>Kontakt: </h2><br/>
                        <p><FontAwesomeIcon icon={faMap}/> Wczasowa 25</p><br/>
                        <p><FontAwesomeIcon icon={faMapMarker}/> 05-402 Otwock, PL</p><br/>
                        <p><FontAwesomeIcon icon={faPhone}/> 21 37 666</p><br/>
                        <FontAwesomeIcon icon={faEnvelope}/><a
                        href="mailto:adres_email@example.com"> recepcja@z-hotel.com</a>
                    </Grid>

                    <Grid item xs={6}>
                        <Card style={{maxWidth:550, padding:"10px 5px"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5">Napisz do nas</Typography>
                                <form>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} sm={6}  item>
                                            <TextField label="Imię" placeholder="Wpisz Imię" variant="outlined" fullWidth required/>
                                        </Grid>

                                        <Grid xs={12} sm={6}  item>
                                            <TextField label="Nazwisko" placeholder="Wpisz Nazwisko" variant="outlined" fullWidth required/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField type="email" label="Email" placeholder="Wpisz Email" variant="outlined" fullWidth required/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField type="number" label="Telefon" placeholder="Wpisz nr Telefonu" variant="outlined" fullWidth required/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField multiline rows={3} label="Wiadomość" placeholder="Wpisz Wiadomość" variant="outlined" fullWidth required/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <Button type="submit" variant="contained" color="primary" fullWidth>Wyślij</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <h3>(mapa)</h3>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;





















