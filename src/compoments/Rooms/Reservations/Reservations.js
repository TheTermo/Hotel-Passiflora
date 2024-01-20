import React, { useState, useEffect } from 'react';
import DateCalendar from 'react-calendar';
import axios from 'axios';
import '../Reservations/Reservations.scss';

const Reservations = () => {
    const [reservations, setReservations] = useState([]);  // Tablica reprezentująca istniejące rezerwacje
    const [blockedDates, setBlockedDates] = useState([]);    // Tablica reprezentująca daty blokowane, w formie obiektów from i to
    const [start, setStart] = useState(null);               // Data rozpoczęcia nowej rezerwacji
    const [end, setEnd] = useState(null);                   // Data zakończenia nowej rezerwacji

    // useEffect do pobrania rezerwacji przy zamontowaniu komponentu
    useEffect(() => {
        axios.get('/reservations')
            .then(response => {
                setReservations(response.data);
            })
            .catch(error => {
                console.error('Błąd podczas pobierania rezerwacji:', error);
            });
    }, []);

    // useEffect do przekształcenia danych rezerwacji na daty blokowane
    useEffect(() => {
        const dates = reservations.map(reservation => ({
            from: new Date(reservation.start_date),
            to: new Date(reservation.end_date),
        }));
        setBlockedDates(dates);
    }, [reservations]);

    // Obsługa zmiany daty w kalendarzu
    const handleCalendarChange = (date) => {
        // Logika obsługi zmiany daty kalendarza
        // Aktualizacja stanu start i end w zależności od wyboru użytkownika
        setStart(date[0]);
        setEnd(date[1]);
    };

    // Funkcja sprawdzająca, czy data jest zablokowana
    const isBlocked = (date) => {
        return blockedDates.some(blockedDate =>
            date >= blockedDate.from && date <= blockedDate.to
        );
    };

    // Funkcja określająca nazwy klas dla płytek kalendarza
    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            if (isBlocked(date)) {
                return 'blocked';
            } else if (
                start &&
                !end &&
                start.toDateString() === date.toDateString()
            ) {
                return 'selected start';
            } else if (
                start &&
                end &&
                date >= start &&
                date <= end
            ) {
                return 'selected range';
            } else {
                return 'available';
            }
        }
    };

    return (
        <div>
            <DateCalendar displayWeekNumber
                onChange={(date) => handleCalendarChange(date)}
                value={[start, end]}
                tileClassName={tileClassName}
                tileDisabled={({ date }) => isBlocked(date)}
            />
        </div>
    );
};
export default Reservations;
