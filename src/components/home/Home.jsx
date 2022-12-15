import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../home/pages/Dashboard';
import Appointment from '../home/pages/Appointment';
import Chat from '../home/pages/Chat';
import Payment from '../home/pages/Payment';
import Account from '../home/pages/Account';
import Sidebar from './Sidebar';
import Header from './Header';

const Home = () => {
  return (
    <div className='d-flex'>
      <Sidebar />
      <main className='w-100 px-5 py-3' style={{ background: '#F9F9F9' }}>
        <Header />
        <Routes >
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/appointment' element={<Appointment />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/account' element={<Account />} />
          <Route path='/payments' element={<Payment />} />
        </Routes>
      </main>
    </div>
  )
}

export default Home