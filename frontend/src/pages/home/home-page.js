import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

import sloganImage from './images/slogan.png';
import redTruckImage from './images/red-truck.png';
import operatorImage from './images/owner-operator.jpg';

import Header from '../../components/header/header';
import MovingQuoteForm from '../../components/moving-quote-form/moving-quote-form'
import Footer from '../../components/footer/footer'

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id='home-section'>
          <div className='container'>
            <div className='row'>
              <div className="col-md-12">
                <MovingQuoteForm />
              </div>
            </div>
          </div>
        </section>
        <section id='about-section'>
          <div className='container'>
            <div className='main-slogan-content d-none d-sm-block col-xl-12 '>
              <img
                className='main-slogan'
                src={sloganImage}
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
        </section>
        <section id='main-section'>
          <div className='container'>
            <div className='row driver-app'>
              <div className='driver-app-img d-none d-sm-block col-xl-6'>
                <img className='section-img' src={redTruckImage} alt='red truck' />
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
                  Fill Out Driver Application
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
                  to={'/owner-operator-form'}
                >
                  Fill Out Owner Application
                </Button>
              </div>
              <div className='ownerOp-app-img d-none d-sm-block col-xl-6'>
                <img className='section-img' src={operatorImage} alt='owner_operator' />
              </div>
            </div>
          </div>
        </section>
        <section id='contact-section'>
          <div className='container text-center'>
            <div className='row'>
              <div className='contact-content col-md-8 offset-2'>
                <h3 className='about-header'>Contact Us</h3>
                <div className="row">
                  <div className="col-md-4">
                    <p className='p-header'>
                      <FontAwesomeIcon icon={faMapMarkerAlt} /> Headquarters Office
                    </p>
                    <p>
                      3016 Caldwell BLVD Suite 101 <br />
                      Nampa, ID 83651
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className='p-header'>
                      <FontAwesomeIcon icon={faPhoneAlt} /> Phone
                    </p>
                    <p>
                      <a href='tel:916 531-1098'>916 531-1098</a>
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p className='p-header'>
                      <FontAwesomeIcon icon={faEnvelope} /> Email
                    </p>
                    <p>
                      <a href='mailto:ramparttranz@gmail.com' target='_blank' rel="noopener noreferrer">
                        ramparttranz@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
