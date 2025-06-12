import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import Bookings from './components/Bookings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/rooms" />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/book" element={<BookingForm />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
