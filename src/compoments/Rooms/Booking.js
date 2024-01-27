import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Booking = () => {
        const [user, setUser] = useState(
            {
                Name:'', Surname:'',  StartDate:'', EndDate:''
            }
        )
        let name, value
    console.log(user)
        const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...user, [name]: value});
        }
        const getData = (e) =>
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
            const res = fetch(
                'https://passiflora-37914-default-rtdb.europe-west1.firebasedatabase.app/UserData.json',
                options
            )
            console.log(res)
            if(res)
                {
                alert("Rezerwacja udana")
                }
            else
                {
                alert("Błąd")
                }
        }

return (
    <form method="POST">
        <Grid container spacing={1}>
            <Grid xs={12} item>
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

            <Grid xs={12}  item>
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

            <Grid xs={12} item>
                <TextField
                    type="date"
                    name="StartDate"
                    variant="outlined"
                    value={user.StartDate}
                    fullWidth
                    required
                    onChange={data}
                />

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
                <Button onClick={getData} type="submit" variant="contained" color="primary">Zarezerwuj</Button>
            </Grid>
        </Grid>
    </form>
);
};

export default Booking;