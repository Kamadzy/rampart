import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import './landing-page.css';
import main_logo from './img/Rampart Logo-01-crop.png';
import truck_img from './img/driver-app-img.png';
import owner_op from './img/owner-operator.jpg';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {} = this.state;
    return (
      <div>
        <header className='large'>
          <nav id='menu' className='navbar navbar-expand-sm navbar-light'>
            <div className='container'>
              <Link to='/'>
                <img src={main_logo} className='logo' alt='Company logo' />
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
                    <a href='#about-section' className='nav-link'>
                      About Us
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a href='#main-section' className='nav-link'>
                      Driver App
                    </a>
                  </li>
                  <li className='nav-item'>
                    <Link to='#main-section' className='nav-link'>
                      Owner Operator
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <a href='#contact-section' className='nav-link'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <section id='home-section'>
          <div className='container'>
            <div className='row'>
              <div className='moving-form col-lg-5 col-sm-12'>
                <h3 className='form-header'>GET A MOVING QUOTE</h3>
                <div className='form-input'>
                  <TextField
                    id='fromLocation'
                    className='fromLocation'
                    name='fromLocation'
                    onChange={this.onChange}
                    label='From a City or Location'
                    variant='outlined'
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id='toLocation'
                    className='toLocation'
                    name='toLocation'
                    onChange={this.onChange}
                    label='To a City or Location'
                    variant='outlined'
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id='formName'
                    className='formName'
                    name='formName'
                    onChange={this.onChange}
                    label='Your Name'
                    variant='outlined'
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id='formEmail'
                    className='formEmail'
                    name='formEmail'
                    onChange={this.onChange}
                    label='Email'
                    variant='outlined'
                  />
                </div>
                <div className='form-input'>
                  <TextField
                    id='formPhone'
                    className='formPhone'
                    name='formPhone'
                    onChange={this.onChange}
                    label='Phone'
                    variant='outlined'
                  />
                </div>
                <div className='form-btn'>
                  <Button
                    variant='contained'
                    color='primary'
                    className='formBtn'
                    size='large'
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>{' '}
        <section id='about-section'>
          <div className='container'>
            <div className='row'>
              <div className='about-content'>
                <h3>About Us</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Obcaecati quod accusantium quia itaque doloremque nostrum
                  quasi cumque ratione sit laborum. Maiores nobis deserunt
                  doloribus. Reprehenderit modi iure nobis maxime. A.
                </p>
              </div>
            </div>
          </div>
        </section>{' '}
        <section id='main-section'>
          <div className='container'>
            <div className='row driver-app'>
              <div className='driver-app-img d-none d-sm-block col-xl-6 '>
                <img src={truck_img} alt='red_truck' />
              </div>
              <div className='driver-app-content col-xl-6 col-sm-12'>
                <h3>Driver Application</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam error inventore, eveniet placeat voluptas libero eos
                  ipsam repudiandae asperiores, perspiciatis aliquam dolor,
                  autem commodi id iste quasi adipisci. Assumenda, iste.
                </p>
                <Button
                  variant='contained'
                  color='primary'
                  className='driver-app-btn'
                  size='large'
                  component={Link}
                  to={'/driver-application'}
                >
                  Fill Driver Application
                </Button>
              </div>
            </div>
            <div className='row ownerOp-app'>
              <div className='ownerOp-app-content col-xl-6 col-sm-12'>
                <h3>Owner Operator Application</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam error inventore, eveniet placeat voluptas libero eos
                  ipsam repudiandae asperiores, perspiciatis aliquam dolor,
                  autem commodi id iste quasi adipisci. Assumenda, iste.
                </p>
                <Button
                  variant='contained'
                  color='primary'
                  className='ownerOp-app-btn'
                  size='large'
                  component={Link}
                  to={'/ownerop-app'}
                >
                  Fill Owner Op Application
                </Button>
              </div>
              <div className='ownerOp-app-img d-none d-sm-block col-xl-6 '>
                <img src={owner_op} alt='owner_operator' />
              </div>
            </div>
          </div>
        </section>
        <section id='contact'>
          <div className='container'>
            <div className='row'>
              <div className='contact-content col-xl-12 col-sm-12'>
                <h3 className='about-header'>Contact Us</h3>
                <p className='p-header'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Headquarters Office
                </p>
                <p>
                  6110 N Hood Ave <br /> Meridian, ID 83646
                </p>
                <p className='p-header'>
                  {' '}
                  <FontAwesomeIcon icon={faPhoneAlt} /> Phone
                </p>
                <p>916 531-1098</p>
                <p className='p-header'>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                </p>
                <p>ramparttranz@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className='container'>
            <p className='p-footer'>©2020 All rights reserved.</p>
          </div>
        </footer>
      </div> //main div
    );
  }
}
