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
import main_slogan from './img/Rampart Logo-04.png';
import truck_img from './img/driver-app-img.png';
import owner_op from './img/owner-operator.jpg';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                      Home_
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
                    <a href='#main-section' className='nav-link'>
                      Owner Operator
                    </a>
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
            <div className='main-slogan-content d-none d-sm-block col-xl-12 '>
              <img
                className='main-slogan'
                src={main_slogan}
                alt='main-slogan'
              />
            </div>
            <div className='row'>
              <div className='about-content'>
                <h3>About Us</h3>
                <p>
                  Rampart Transportation INC is a Boise, Idaho asset based
                  transportation and logistics company operating with our
                  customer’s needs as our top priority! We specialize in 53 foot
                  dry van local, regional, dedicated, and long haul service!
                  With over 20 years of industry experience, we know what it
                  takes to get the job done in a reliable, timely, and cost
                  effective manner. We pride ourselves on providing our
                  customers with industry leading technology as well as
                  knowledgeable logistics specialists who always ensure an on
                  time pickup and delivery. Our highly skilled office staff is
                  always just one phone call away from helping you with your
                  logistics needs! Experience the Rampart difference today!
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
                  Rampart Transportation INC has the most skilled, respected and
                  dedicated team of professional drivers on the road. Our
                  drivers are our most valued assets and the reason for our
                  growth and success. We have multiple drop yards throughout the
                  United States, providing lots of flexibility for our drivers.
                  We offer many bonuses and incentives for our drivers such as :
                  Sign on Bonus Monthly Safety Bonus Monthly Productivity Bonus
                  Allow Pets in the trucks 2000 Watt Inverters in all our trucks
                  Paid Detention & Layover Easy to use Log Books Friendly 24/7
                  Dispatchers Annual Profit Sharing
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
                  We treat our owner operators like family here at Rampart. We
                  work around your needs and preferred schedule, route, and
                  weight/product restrictions. We provide our Owner Op’s with
                  all the resources they need to keep their trucks on the road!
                  From registration services, Fuel Cards, IFTA filing, Log
                  Books, providing trailers, helping with breakdowns with our
                  nationwide team of mechanics that can help you no matter where
                  you are. We charge a small service fee for our dedicated
                  dispatch team that is always available.
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
