import {Button, Grid, TextField, Typography} from "@mui/material";
import React, { useState } from "react";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CurrencyConverter from "./CurrencyConverter";
import {useParams} from "react-router-dom";
import roomsData from "./roomsData";

const Booking = () => {
        const [user, setUser] = useState(
            {
                Name:'', Surname:'',  StartDate:'', EndDate:''
            }
        )

        const [res, setRes] = useState(null);

        let name, value
        const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...user, [name]: value});
        }
        const getData = async (e) =>
        {
            const {Name, Surname, StartDate, EndDate} = user;
            e.preventDefault();
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify({
                    Name, Surname, StartDate, EndDate
                })
            }
            const res =  await fetch(
                'https://passiflora-37914-default-rtdb.europe-west1.firebasedatabase.app/UserData.json',
                options
            )
            if (res.ok) {
                setRes(true);
            } else {
                setRes(false);
            }
        }

    const { id } = useParams();
    const roomId = parseInt(id);
    const room = roomsData.find(room => room.id === roomId);
    const startDate = user.StartDate ? new Date(user.StartDate).getTime() : 0;
    const endDate = user.EndDate ? new Date(user.EndDate).getTime() : 0;
    const numberOfDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
    const totalCost = numberOfDays * room.roomPrice;

    return (
    <form method="POST" onSubmit={getData}>
        <Grid container spacing={1} justifyContent="center" alignItems="center">
            <Grid xs={12} sm={6} item>
                <TextField
                    type="text"
                    name="Name"
                    placeholder="Wpisz Imię"
                    value={user.Name}
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                    onChange={data}
                />
            </Grid>

            <Grid xs={12} sm={6}  item>
                <TextField
                    type="text"
                    name="Surname"
                    placeholder="Wpisz Nazwisko"
                    value={user.Surname}
                    variant="outlined"
                    fullWidth
                    required
                    autoComplete="off"
                    onChange={data}
                />
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField
                    type="date"
                    name="StartDate"
                    variant="outlined"
                    value={user.StartDate}
                    fullWidth
                    required
                    onChange={data}
                />
            </Grid>

            <Grid xs={12} sm={6} item>
                <TextField
                    type="date"
                    name="EndDate"
                    variant="outlined"
                    value={user.EndDate}
                    fullWidth
                    required
                    onChange={data}
                />
            </Grid>

            <Grid xs={12} item>
                <Button type="submit" variant="contained" color="secondary">Zarezerwuj</Button>
            </Grid>

            {res !== null && (
                <Grid xs={4} item>
                    <Alert severity={res ? "success" : "error"} style={{ margin: '0 auto' }}>
                        <AlertTitle>{res ? "Success" : "Error"}</AlertTitle>
                        {res ? "Rezerwacja udana" : "Błąd"}
                    </Alert>
                </Grid>
            )}
            <Grid xs={12} item>
                <Typography variant="h5">
                    Cena: {user.StartDate && user.EndDate ? totalCost : room.roomPrice} zł
                </Typography>
                <Typography variant="h6">
                    <CurrencyConverter roomPrice={user.StartDate && user.EndDate ? totalCost : room.roomPrice} />
                </Typography>
            </Grid>
        </Grid>
    </form>
);
};

export default Booking;