import React, { useEffect, useState } from 'react';
import API from '../api';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    API.get('/bookings').then(res => setBookings(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Bookings</h2>
      <ul className="space-y-2">
        {bookings.map(b => (
          <li key={b.id} className="border p-3 rounded shadow">
            <strong>{b.name}</strong> booked <em>{b.roomName}</em> on {b.date} at {b.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bookings;
