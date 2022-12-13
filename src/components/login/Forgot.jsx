import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className='w-50 p-4'>
      <h4 style={{ fontWeight: 600 }}>Forgot Password?</h4>
      <p className='mt-2' style={{ fontSize: '12px', color: '#C0C0C0' }}>Don't worry! it happens. Please enter the email address associated with your account.</p>
      <div>
        <label htmlFor="email" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Email</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="email" name="email" id='email' placeholder='Enter your email' />
      </div>
      <button className='btn mt-4 w-100' style={{ background: '#47C269', borderRadius: '8px' }}>
        <span className='me-2' style={{ color: '#FFFFFF', verticalAlign: 'middle', fontSize: '1rem' }}><i class="fa-solid fa-envelope"></i></span>
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF' }}>Send Email</span>
      </button>
      <p className='mt-3' style={{ fontSize: '12px', textAlign: 'center', color: '#C0C0C0' }}>Remember Password? <Link to='/signin' style={{ fontSize: '13px', fontWeight: 'bold', color: '#47C269', textDecoration: 'none' }}>Back to login</Link></p>
    </div>
  )
}

export default Forgot