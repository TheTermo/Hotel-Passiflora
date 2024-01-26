// ReservationForm.js
import React, { useState } from 'react';
import './ReservationForm.scss';
import {Button, Grid, TextField} from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const ReservationForm = ({ onReservation }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [reservationSuccess, setReservationSuccess] = useState(false);

    const handleReservation = () => {
        // Sprawdzenie czy wszystkie pola formularza są wypełnione
        // if (!name || !surname || !startDate || !endDate) {
        //     // Komunikat błędu może być wyświetlany przez Material-UI automatycznie
        //     return;
        // }

        // Przekazanie danych rezerwacji do rodzica
        onReservation({ name, surname, startDate, endDate });

        // Czyszczenie formularza
        setName('');
        setSurname('');
        setStartDate('');
        setEndDate('');

        // Wyświetlenie komunikatu o udanej rezerwacji
        setReservationSuccess(true);

        // Ukrycie komunikatu po 9 sekundach
        setTimeout(() => {
            setReservationSuccess(false);
        }, 9000);
    };

    return (
        <form>
            <Grid container spacing={1}>
                <Grid xs={12} item>
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        label="Imię"
                        placeholder="Wpisz Imię"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid xs={12}  item>
                    <TextField
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        label="Nazwisko"
                        placeholder="Wpisz Nazwisko"
                        variant="outlined"
                        fullWidth
                        required
                    />
                </Grid>

                <Grid xs={12} item>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={dayjs(startDate)}
                            onChange={(date) => setStartDate(date)}
                            renderInput={(startProps) => (
                                <TextField
                                    {...startProps}
                                    variant="outlined"
                                    label="Pierwsza data"
                                    fullWidth
                                    required
                                />
                            )}
                        />
                        <DatePicker
                            value={dayjs(endDate)}
                            onChange={(date) => setEndDate(date)}
                            renderInput={(endProps) => (
                                <TextField
                                    {...endProps}
                                    variant="outlined"
                                    label="Druga data"
                                    fullWidth
                                    required
                                />
                            )}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid xs={12} item>
                    <Button
                        onClick={handleReservation}
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{marginTop: '2%', marginBottom: '2%'}}
                    >
                        Zarezerwuj
                    </Button>
                </Grid>

                {reservationSuccess && <div className="success-message">Rezerwacja udana!</div>}
            </Grid>
        </form>
    );
};

export default ReservationForm;
