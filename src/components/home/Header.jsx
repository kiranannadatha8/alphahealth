import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { Avatar, Badge } from 'antd';
import google from '../../assets/google.png';
import './Header.css';

const Header = () => {
  return (
    <div className='d-flex align-items-center justify-content-between mb-4'>
      <div className='search' style={{ width: '35%' }}>
        {/* <div className='icon' style={{ color: '#C0C0C0' }}><FiSearch /></div> */}
        <input className='w-100 p-1' type="text" placeholder='Search here...' style={{ borderRadius: '8px', fontSize: '13px', border: '2px solid #C0C0C0' }} />
      </div>
      <div className='d-flex align-items-center'>
        <div className='pt-1 me-3'>
          <Badge dot color='#47C269'>
            <IoMdNotificationsOutline style={{ fontSize: '20px' }} />
          </Badge>
        </div>
        <div className='d-flex align-items-center'>
          <Avatar src={google} />
          <span style={{ fontSize: '12px', fontWeight: '600', color: '#454545' }}>Kiran Annadata</span>
        </div>
      </div>
    </div>
  )
}

export default Header