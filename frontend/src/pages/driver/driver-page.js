import React, { Component } from 'react';

import Header from '../../components/header/header';
import DriverForm from '../../components/driver-form/driver-form';
import Footer from '../../components/footer/footer'

class DriverPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <DriverForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DriverPage;