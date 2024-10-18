import React, { useState } from 'react'
import './Sidebar.css' // We'll import the CSS styles here

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false) // State to handle sidebar open/close
  const [menuIcon, setMenuIcon] = useState('bx-menu') // State for menu button icon

  const toggleSidebar = () => {
    setIsOpen(!isOpen) // Toggle sidebar open/close
    setMenuIcon(isOpen ? 'bx-menu' : 'bx-menu-alt-right') // Toggle icon between two states
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className='logo-details'>
        <i className='bx bx-cog icon' style={{ color: '#357DE8' }}></i>
        <div className='logo_name'>Echo</div>
        <i
          className={`bx ${menuIcon} entry`}
          id='btn'
          onClick={toggleSidebar}
        ></i>
      </div>

      <ul className='nav-list'>
        <li>
          <i className='bx bx-search' onClick={toggleSidebar}></i>
          <input type='text' placeholder='Search...' />
          <span className='tooltip'>Search</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-grid-alt'></i>
            <span className='links_name'>Dashboard</span>
          </a>
          <span className='tooltip'>Dashboard</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-user'></i>
            <span className='links_name'>User</span>
          </a>
          <span className='tooltip'>User</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-chat'></i>
            <span className='links_name'>Messages</span>
          </a>
          <span className='tooltip'>Messages</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-pie-chart-alt-2'></i>
            <span className='links_name'>Analytics</span>
          </a>
          <span className='tooltip'>Analytics</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-folder'></i>
            <span className='links_name'>File Manager</span>
          </a>
          <span className='tooltip'>Files</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-cart-alt'></i>
            <span className='links_name'>Order</span>
          </a>
          <span className='tooltip'>Order</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-heart'></i>
            <span className='links_name'>Saved</span>
          </a>
          <span className='tooltip'>Saved</span>
        </li>
        <li>
          <a href='#'>
            <i className='bx bx-cog'></i>
            <span className='links_name'>Setting</span>
          </a>
          <span className='tooltip'>Setting</span>
        </li>

        <li className='profile'>
          <div className='profile-details'>
            <i className='bx bx-user'></i>
            <div className='name_job'>
              <div className='name'>Sai</div>
              <div className='job'>Web designer</div>
            </div>
          </div>
          <i className='bx bx-log-out' id='log_out'></i>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
