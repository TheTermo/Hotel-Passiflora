import React from 'react';

const RoomAvailability = ({ rooms }) => {
    return (
        <div>
            <h2>Dostępność Pokoi</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.number}>
                        {`Pokój ${room.number}: ${room.available ? 'Dostępny' : 'Zarezerwowany'} ${
                            room.reservationStartDate ? `(${room.reservationStartDate} - ${room.reservationEndDate})` : ''
                        }`}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoomAvailability;