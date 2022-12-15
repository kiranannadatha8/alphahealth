import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';
import { RiAccountPinBoxLine } from 'react-icons/ri'
import { BiWalletAlt, BiCalendarPlus } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineChatAlt } from 'react-icons/hi';
import company from '../../assets/company.png';
import './Sidebar.css';

const toproutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: <AiOutlineHome />
  },
  {
    path: '/appointment',
    name: 'My Appointments',
    icon: <BiCalendarPlus />
  },
  {
    path: '/chat',
    name: 'Chat',
    icon: <HiOutlineChatAlt />
  },
  {
    path: '/payments',
    name: 'Payments',
    icon: <BiWalletAlt />
  }
];

const downroutes = [
  {
    path: '/account',
    name: 'Account',
    icon: <RiAccountPinBoxLine />
  },
  {
    path: '/',
    name: 'Logout',
    icon: <MdOutlineLogout />
  }
];

const showAnimation = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};


const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let iconStyles = { fontSize: isOpen ? "17px" : "20px", color: '#47C269' };

  return (
    <div className="main-contain">
      <motion.div animate={{ width: isOpen ? '190px' : '50px', transition: { duration: 0.4, type: 'spring' } }} className="sidebar">
        <div className="logo mb-2" onClick={toggle}>
          <img className='mx-auto' src={company} alt="company" width={isOpen ? '50px' : '40px'} height={isOpen ? '50px' : '40px'} />
        </div>
        <section className='routes d-flex flex-column justify-content-between' style={{ height: '91%' }}>
          <div>
            {toproutes.map((route) => (
              <NavLink activeclassname='active' className='link' style={{ textDecoration: 'none' }} to={route.path} key={route.name}>
                <div style={iconStyles}>{route.icon}</div>
                <AnimatePresence>{isOpen && <motion.span variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden">{route.name}</motion.span>}
                </AnimatePresence>
              </NavLink>
            ))}
          </div>
          <div>
            {downroutes.map((route) => (
              <NavLink activeclassname='active' className='link' style={{ textDecoration: 'none' }} to={route.path} key={route.name}>
                <div style={iconStyles}>{route.icon}</div>
                <AnimatePresence>{isOpen && <motion.span variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden">{route.name}</motion.span>}
                </AnimatePresence>
              </NavLink>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  )
}

export default Sidebar