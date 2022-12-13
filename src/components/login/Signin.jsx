import React from 'react'
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';

const Signin = () => {
  return (
    <div className='login-form w-50 p-4'>
      <h4 style={{ fontWeight: 600 }}>Welcome back</h4>
      <p className='mt-2' style={{ fontSize: '13px', color: '#C0C0C0' }}>Welcome back! Please enter your details.</p>
      <div>
        <label htmlFor="email" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Email</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="email" name="email" id='email' placeholder='Enter your email' />
      </div>
      <div className='mt-3'>
        <label htmlFor="password" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Password</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="password" name="password" id='password' placeholder='Enter your password' />
      </div>
      <div className='d-flex align-items-center justify-content-between mt-3'>
        <div>
          <input type="checkbox" name="remember" id="remember" />
          <label className='ps-1' htmlFor="remember" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Remember Me</label>
        </div>
        <Link to='/forgot' style={{ fontSize: '13px', fontWeight: 'bold', textDecoration: 'none', color: '#47C269' }}>Forgot password?</Link>
      </div>
      <button className='btn mt-4 w-100' style={{ background: '#47C269', borderRadius: '8px' }}>
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF' }}>Sign in</span>
        <span className='ms-2' style={{ color: '#FFFFFF', verticalAlign: 'middle', fontSize: '1rem' }}><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
      </button>
      <div id="customBtn" className=" btn customGPlusSignIn p-2 mt-3 d-flex align-items-center justify-content-center">
        <img src={google} alt="" width={'36px'} height={'26px'} />
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Sign in with Google</span>
      </div>
      <p className='mt-4' style={{ fontSize: '12px', textAlign: 'center', color: '#C0C0C0' }}>Don't have an account? <Link to='/signup' style={{ fontSize: '13px', fontWeight: 'bold', color: '#47C269', textDecoration: 'none' }}>Sign up for free</Link></p>
    </div>
  )
}

export default Signin