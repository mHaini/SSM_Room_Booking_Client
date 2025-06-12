import React, { useEffect, useState } from 'react';
import API from '../api';

function BookingForm() {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({ name: '', roomId: '', date: '', time: '' });

  useEffect(() => {
    API.get('/rooms').then(res => setRooms(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/bookings', form);
      alert('Booking created');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold">Create Booking</h2>
      <input placeholder="Your Name" className="w-full border p-2 rounded" onChange={e => setForm({ ...form, name: e.target.value })} />
      <select className="w-full border p-2 rounded" onChange={e => setForm({ ...form, roomId: e.target.value })}>
        <option value="">Select Room</option>
        {rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
      </select>
      <input type="date" className="w-full border p-2 rounded" onChange={e => setForm({ ...form, date: e.target.value })} />
      <input type="time" className="w-full border p-2 rounded" onChange={e => setForm({ ...form, time: e.target.value })} />
      <button className="w-full bg-blue-600 text-white py-2 rounded">Book</button>
    </form>
  );
}

export default BookingForm;

