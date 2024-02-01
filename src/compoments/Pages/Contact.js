import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import AboutImg from "../../images/1.JPG";
import {Button, Grid, TextField} from "@mui/material";
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faMapMarker, faMap} from '@fortawesome/free-solid-svg-icons';
import {Card, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";
import React, {useState} from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function Contact() {

    const [user, setUser] = useState(
        {
            Name: '', Surname: '', Email: '', Tele: '', Message: ''
        }
    )

    const [res, setRes] = useState(null);

    let name, value
    const data = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value});
    }
    const getData = async (e) => {
        const {Name, Surname, Email, Tele, Message} = user;
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name, Surname, Email, Tele, Message
            })
        }
        const res = await fetch(
            //process.env.DATABASE,
            'https://passiflora-37914-default-rtdb.europe-west1.firebasedatabase.app/UserData.json',
            options
        )
        if (res.ok) {
            setRes(true);
        } else {
            setRes(false);
        }
    }
    return (
        <>
            <Navbar/>
            <Header
                cName="headerSubpage"
                headerImg={AboutImg}
                title="Kontakt"
            />
            <div className="zGrid">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} align="center">
                        <h2>Kontakt: </h2><br/>
                        <p><FontAwesomeIcon icon={faMap}/> Wczasowa</p><br/>
                        <p><FontAwesomeIcon icon={faMapMarker}/> 58-540 Karpacz, Polska A</p><br/>
                        <p><FontAwesomeIcon icon={faPhone}/> 21 37 666</p><br/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <a href="mailto:adres_email@example.com"> recepcja@mail</a>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Card style={{maxWidth: 550, padding: "10px 5px"}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5">Napisz do nas</Typography>
                                <form method="POST" onSubmit={getData}>
                                    <Grid container spacing={1}>
                                        <Grid xs={12} sm={6} item>
                                            <TextField
                                                type="text"
                                                name="Name"
                                                label="Imię"
                                                placeholder="Wpisz Imię"
                                                variant="outlined"
                                                value={user.Name}
                                                fullWidth
                                                required
                                                onChange={data}
                                                autoComplete="off"/>
                                        </Grid>

                                        <Grid xs={12} sm={6} item>
                                            <TextField label="Nazwisko"
                                                       type="text"
                                                       name="Surname"
                                                       placeholder="Wpisz Nazwisko"
                                                       variant="outlined"
                                                       value={user.Surname}
                                                       fullWidth
                                                       required
                                                       onChange={data}
                                                       autoComplete="off"/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField type="email"
                                                       name="Email"
                                                       label="Email"
                                                       placeholder="Wpisz Email"
                                                       variant="outlined"
                                                       fullWidth
                                                       required
                                                       value={user.Email}
                                                       onChange={data}/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField type="number"
                                                       name="Tele"
                                                       label="Telefon"
                                                       placeholder="Wpisz nr Telefonu"
                                                       variant="outlined"
                                                       fullWidth
                                                       required
                                                       value={user.Tele}
                                                       onChange={data}/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <TextField multiline rows={3}
                                                       type="text"
                                                       name="Message"
                                                       label="Wiadomość"
                                                       placeholder="Wpisz Wiadomość"
                                                       variant="outlined"
                                                       fullWidth
                                                       required
                                                       value={user.Message}
                                                       onChange={data}/>
                                        </Grid>

                                        <Grid xs={12} item>
                                            <Button type="submit" variant="contained" color="primary" fullWidth>Wyślij</Button>
                                        </Grid>
                                    </Grid>

                                    {res !== null && (
                                        <Grid xs={4} item>
                                            <Alert severity={res ? "success" : "error"} style={{margin: '0 auto'}}>
                                                <AlertTitle>{res ? "Success" : "Error"}</AlertTitle>
                                                {res ? "Wiadomość wysłana" : "Błąd"}
                                            </Alert>
                                        </Grid>
                                    )}
                                </form>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </>
    )
}

export default Contact;