import React, { Component } from 'react';

import Header from '../../components/header/header';
import OwnerOperatorForm from '../../components/owner-operator-form/owner-operator-form';
import Footer from '../../components/footer/footer'

class OwnerOperatorPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <OwnerOperatorForm />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default OwnerOperatorPage;