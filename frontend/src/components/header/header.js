import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImage from './images/logo.png';

class Header extends Component {
  render() {
    return (
      <header className='large'>
        <nav id='menu' className='navbar navbar-expand-sm navbar-light'>
          <div className='container'>
            <Link to='/'>
              <img src={logoImage} className='logo' alt='Company logo' />
            </Link>
            <button
              className='navbar-toggler'
              data-toggle='collapse'
              data-target='#navbarCollapse'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='#about-section' className='nav-link'>About Us</a>
                </li>
                <li className='nav-item'>
                  <a href='#main-section' className='nav-link'>Driver</a>
                </li>
                <li className='nav-item'>
                  <a href='#main-section' className='nav-link'>Owner Operators</a>
                </li>
                <li className='nav-item'>
                  <a href='#contact-section' className='nav-link'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

