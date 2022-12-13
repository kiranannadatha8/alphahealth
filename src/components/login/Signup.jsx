import React from 'react'
import { Link } from 'react-router-dom';
import google from '../../assets/google.png';

const Signup = () => {
  return (
    <div className='login-form w-50 p-4'>
      <h4 style={{ fontWeight: 600 }}>Create an account</h4>
      <p className='mt-2' style={{ fontSize: '13px', color: '#C0C0C0' }}>Please enter your details.</p>
      <div className='mt-3 d-flex gap-3'>
        <div className=''>
          <label htmlFor="firstname" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>First Name</label>
          <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="text" name="firstname" id='firstname' placeholder='First name' />
        </div>
        <div className=''>
          <label htmlFor="lastname" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Last Name</label>
          <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="text" name="lastname" id='lastname' placeholder='Last name' />
        </div>
      </div>
      <div className='mt-3'>
        <label htmlFor="email" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Email</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="email" name="email" id='email' placeholder='Enter your email' />
      </div>
      <div className='mt-3'>
        <label htmlFor="password" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Password</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="password" name="password" id='password' placeholder='Enter your password' />
        <span className='mt-1' style={{ fontSize: '12px', color: '#C0C0C0' }}>Must be at least 8 characters.</span>
      </div>
      <button className='btn mt-4 w-100' style={{ background: '#47C269', borderRadius: '8px' }}>
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF' }}>Sign up</span>
        <span className='ms-2' style={{ color: '#FFFFFF', verticalAlign: 'middle', fontSize: '1rem' }}><i class="fa-solid fa-arrow-right-to-bracket"></i></span>
      </button>
      <div id="customBtn" className=" btn customGPlusSignIn p-2 mt-3 d-flex align-items-center justify-content-center">
        <img src={google} alt="" width={'36px'} height={'26px'} />
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Sign in with Google</span>
      </div>
      <p className='mt-4' style={{ fontSize: '12px', textAlign: 'center', color: '#C0C0C0' }}>Already have an account? <Link to='/signin' style={{ fontSize: '13px', fontWeight: 'bold', color: '#47C269', textDecoration: 'none' }}>Sign in</Link></p>
    </div>
  )
}

export default Signup