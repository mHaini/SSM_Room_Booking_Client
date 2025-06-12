import React, { useEffect, useState } from 'react';
import API from '../api';

function RoomList() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    API.get('/rooms').then(res => setRooms(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Rooms</h2>
      <ul className="space-y-2">
        {rooms.map(room => (
          <li key={room.id} className="p-3 border rounded shadow">
            {room.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
