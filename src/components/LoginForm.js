import React, { useState } from 'react';
import API from '../api';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/rooms');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white max-w-md mx-auto p-6 rounded-xl shadow space-y-5">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <input className="w-full border p-2 rounded focus:outline-blue-500" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} />
      <input type="password" className="w-full border p-2 rounded focus:outline-blue-500" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
    </form>
  );
}

export default LoginForm;
