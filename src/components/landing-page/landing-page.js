import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className='p-4 text-center'>
          <Link to='/driver-application' className='btn btn-primary btn-lg'>
            Fill Driver Application
          </Link>
        </div>
        <div className='p-4 text-center'>
          <Link to='/ownerop-app' className='btn btn-primary btn-lg'>
            Fill OwnerOp Application
          </Link>
        </div>
      </div>
    );
  }
}
