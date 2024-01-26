import React, { useState, useEffect } from 'react';
import ReservationForm from './ReservationForm';
import RoomAvailability from './RoomAvailability';
import roomsData from '../roomsData';
import { useParams } from 'react-router-dom';

const Reservation = () => {
    const [rooms, setRooms] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        // Pobierz dane o dostępności pokoi z localStorage
        const storedRooms = JSON.parse(localStorage.getItem('rooms')) || roomsData;
        setRooms(storedRooms);
    }, []);

    const handleReservation = ({ name, surname, startDate, endDate }) => {
        // Użyj id pobranego z useParams() jako roomNumber
        const roomId = parseInt(id);
        const room = roomsData.find(room => room.id === roomId);

        // Zaktualizuj dostępność pokoju
        const updatedRooms = rooms.map((room) =>
            room.id === roomId ? { ...room, available: false } : room
        );

        // Zapisz zmiany w localStorage
        localStorage.setItem('rooms', JSON.stringify(updatedRooms));

        // Zaktualizuj stan komponentu
        setRooms(updatedRooms);
    };

    return (
        <div>
            <ReservationForm onReservation={handleReservation} rooms={rooms} />
            {/*<RoomAvailability rooms={rooms} />*/}
        </div>
    );
};

export default Reservation;
