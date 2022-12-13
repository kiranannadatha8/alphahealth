import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from '../../assets/login.jpg';
import company from '../../assets/company.png';
import './Login.css';
import Signup from './Signup';
import Signin from './Signin';
import Forgot from './forgot';
import NewPassword from './NewPassword';

const Login = () => {
    return (
        <div className='d-flex h-100'>
            <div className='left-panel d-flex align-items-center justify-content-center w-100'>
                <div className='image'>
                    <img src={company} alt="" width={'70px'} height={'70px'} style={{ position: 'absolute', top: '10px', left: '22px' }} />
                </div>
                <Routes>
                    <Route path='/' element={<Signin />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/forgot' element={<Forgot />} />
                </Routes>
            </div>
            <div className='d-none d-md-block w-100'>
                <img src={logo} alt="doc" />
            </div>
        </div>
    );
};

export default Login;