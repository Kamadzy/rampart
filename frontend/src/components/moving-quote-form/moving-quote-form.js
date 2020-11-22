import React, {Component} from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Swal from "sweetalert2";

import './styles.css';

class MovingQuoteForm extends Component {
  emptyState = {
    sendingMovingForm: false,
    fromLocation: '',
    toLocation: '',
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  };

  constructor(props) {
    super(props);
    this.state = this.emptyState;
  }

  onChange = e => this.setState({[e.target.name]: e.target.value});

  onSubmit = async e => {
    e.preventDefault();

    this.setState({sendingMovingForm: true});

    try {
      const data = {
        fromLocation: this.state.fromLocation,
        toLocation: this.state.toLocation,
        customer: {
          name: this.state.customerName,
          email: this.state.customerEmail,
          phone: this.state.customerPhone
        }
      };
      await axios.post('/api/moving_quote', data);

      await Swal.fire({
        icon: 'success',
        title: 'Registered!',
        html: 'Thank you for your request, we will contact you soon!'
      });

      this.setState(this.emptyState);
    } catch (e) {
      let msg = {
        title: 'Oops... error!',
        text: 'Something went wrong. Try to send again ;)'
      };

      if (e.response.status === 422) {
        msg = {
          title: 'Oops... Validation failed!',
          text: 'Please check the entered data and try again ;)'
        };
      }

      await Swal.fire({
        icon: 'error',
        title: msg.title,
        text: msg.text
      });
    }

    this.setState({sendingMovingForm: false});
  };

  render() {
    return (
      <form className='moving-form col-lg-5 col-sm-12' onSubmit={this.onSubmit}>
        <h3 className='form-header'>GET A MOVING QUOTE</h3>
        <div className='form-input'>
          <TextField
            id='fromLocation'
            className='moving-form-input'
            name='fromLocation'
            onChange={this.onChange}
            label='From a City or Location'
            variant='outlined'
          />
        </div>
        <div className='form-input'>
          <TextField
            id='toLocation'
            className='moving-form-input'
            name='toLocation'
            onChange={this.onChange}
            label='To a City or Location'
            variant='outlined'
          />
        </div>
        <div className='form-input'>
          <TextField
            id='customerName'
            className='moving-form-input'
            name='customerName'
            onChange={this.onChange}
            label='Your Name'
            variant='outlined'
          />
        </div>
        <div className='form-input'>
          <TextField
            id='customerEmail'
            className='moving-form-input'
            name='customerEmail'
            onChange={this.onChange}
            label='Email'
            variant='outlined'
          />
        </div>
        <div className='form-input'>
          <TextField
            id='customerPhone'
            className='moving-form-input'
            name='customerPhone'
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
            type="submit"
            disabled={this.state.sendingMovingForm}
          >
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default MovingQuoteForm;