import React from 'react'

const NewPassword = () => {
  return (
    <div className='w-50 p-4'>
      <h4 style={{ fontWeight: 600 }}>Create new password</h4>
      <div>
        <label htmlFor="password" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>Password</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="password" name="password" id='password' placeholder='Enter your password' />
        <span className='mt-1' style={{ fontSize: '12px', color: '#C0C0C0' }}>Must be at least 8 characters.</span>
      </div>
      <div className='mt-3'>
        <label htmlFor="newpassword" style={{ fontSize: '13px', fontWeight: 'bold', color: '#454545' }}>New Password</label>
        <input className='d-block w-100 p-2' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} type="password" name="newpassword" id='newpassword' placeholder='Enter your new password' />
      </div>
      <button className='btn mt-4 w-100' style={{ background: '#47C269', borderRadius: '8px' }}>
        <span className='me-2' style={{ color: '#FFFFFF', verticalAlign: 'middle', fontSize: '1rem' }}><i class="fa-solid fa-lock"></i></span>
        <span className="buttonText" style={{ fontSize: '13px', fontWeight: 'bold', color: '#FFFFFF' }}>Reset Password</span>
      </button>
    </div>
  )
}

export default NewPassword