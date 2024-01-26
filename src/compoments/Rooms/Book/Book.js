import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const firebaseConfig = {
    apiKey: "AIzaSyAB9t6EaDzyJ9nw78y4eOBFVg3PlhvjwWM",
    authDomain: "passiflora-37914.firebaseapp.com",
    databaseURL: "https://passiflora-37914-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "passiflora-37914",
    storageBucket: "passiflora-37914.appspot.com",
    messagingSenderId: "467406192907",
    appId: "1:467406192907:web:bfc6d2df770dbc27ef220e"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();

const Book = ({ onReservation }) => {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const leave_date = document.getElementById('leave-date');

        if(!book_date.value || !leave_date.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
            function writeUserData() {
                const db = getDatabase();
                set(ref(db, 'data/booking'), {
                    bookingdate: book_date.value,
                    leave_date: leave_date.value,
                });
            }
            alert('Your booking has been made');
            const container = document.querySelector('.container');
            sethide(!hide);
            container.classList.add("hide");
        }
    }
    return (
        <form action="" onSubmit={handleSubmit} className="container">
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField
                        label="Imię"
                        placeholder="Wpisz Imię"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid xs={12}  item>
                    <TextField
                        label="Nazwisko"
                        placeholder="Wpisz Nazwisko"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid xs={12} item>
                    {/*<div className="inputData">*/}
                    {/*    <input type="date" name="" id="book-date"></input>*/}
                    {/*</div>*/}

                    {/*<div className="inputData">*/}
                    {/*    <input type="date" name="" id="leave-date"></input>*/}
                    {/*</div>*/}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker>
                            <TextField
                                type="date"
                                variant="outlined"
                                label="Pierwsza data"
                                fullWidth
                                required
                                id="book-date"
                            />
                        </DatePicker>
                        <DatePicker>
                            <TextField
                                type="date"
                                variant="outlined"
                                label="Druga data"
                                fullWidth
                                required
                                id="leave-date"
                            />
                        </DatePicker>
                    </LocalizationProvider>
                </Grid>

                <Grid xs={12} item>
                    <Button type="submit" variant="contained" color="primary">
                        Zarezerwuj
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default Book;
