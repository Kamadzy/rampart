import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'typeface-roboto';
import axios from 'axios';
import localforage from 'localforage';
import jspdf from 'jspdf';
import SignatureFont from '../../assets/fonts/SignatureFont';
import moment from 'moment';
import Swal from "sweetalert2";
import './styles.css';

import {arrayBufferToBase64} from '../../helpers';

class OwnerOperatorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundImages: [],
      loading: false,
      agreementDate: '',
      lessorName: '',
      lessorAddress: '',
      lessorCity: '',
      lessorState: '',
      lessorZip: '',
      truckVin: '',
      trailerVin: '',
      lessorGross: '90%',
      lessorMainSignature: '',
      mainCompanyName: 'Rampart Transportation INC',
      mainCompanyAddress: '6110 N Hood Ave Meridian ID 83646',
      mainCompanyUsdot: '3411477',
      mainCompanyEin: '83-3141615',
      mainCompanyMc: '1100091',
    };
  }

  async componentDidMount() {
    window.scrollTo(0, 0);

    // download and cache background images
    await this.setBackgroundImages();
  }

  async onSubmit() {
    this.setState({loading: true});

    try {
      const doc = this.generatePdf();

      await this.sendDocumentByEmail(doc);

      await Swal.fire({
        icon: 'success',
        title: 'Registered!',
        text: 'Thank you!'
      });
    } catch (e) {
      let msg = {
        title: 'Oops... error!',
        text: 'Something went wrong. Try to submit again ;)'
      };

      if (e.response !== undefined && e.response.status === 422) {
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

    this.setState({loading: false});
  }

  generatePdf() {
    const {
      backgroundImages,
      agreementDate,
      lessorName,
      lessorAddress,
      lessorCity,
      lessorState,
      lessorZip,
      truckVin,
      trailerVin,
      lessorGross,
      lessorMainSignature,
      mainCompanyName,
      mainCompanyAddress,
      mainCompanyUsdot,
      mainCompanyEin,
      mainCompanyMc
    } = this.state;

    if (backgroundImages.length === 0) {
      throw new Error('Failed to build PDF document, background images are missing.');
    }

    const doc = new jspdf();

    doc.setFontSize(12);
    doc.setTextColor('black');

    doc.addImage(backgroundImages[0], 'JPEG', 0, 0, 210, 297);
    doc.text(agreementDate, 55, 50.3);
    doc.text(mainCompanyName, 95, 50.3);
    doc.text(mainCompanyAddress, 33, 65.5);
    doc.text(mainCompanyUsdot, 136.5, 65.5);
    doc.text(mainCompanyEin, 164, 65.5);
    doc.text(lessorName, 26, 77);
    doc.text(lessorAddress, 30, 87.5);
    doc.text(lessorCity, 23, 97.5);
    doc.text(lessorState, 92, 97.5);
    doc.text(lessorZip, 116, 97.5);
    doc.text(truckVin, 35, 110.5);
    doc.text(trailerVin, 37, 123.5);
    doc.text(mainCompanyMc, 89.5, 156);
    doc.text(mainCompanyName, 16, 286);
    doc.addPage();
    doc.addImage(backgroundImages[1], 'JPEG', 0, 0, 210, 297);
    doc.text(lessorGross, 80, 56);
    doc.text(mainCompanyName, 16, 286);
    doc.addPage();
    doc.addImage(backgroundImages[2], 'JPEG', 0, 0, 210, 297);
    doc.text(agreementDate, 117, 155);
    doc.text(mainCompanyName, 30, 217.5);
    doc.text(lessorName, 26, 238.5);
    doc.text(agreementDate, 168, 217.5);
    doc.text(agreementDate, 160, 238.5);
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.text(lessorMainSignature, 105, 238.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(mainCompanyName, 16, 286);
    doc.addPage();
    doc.addImage(backgroundImages[3], 'JPEG', 0, 0, 210, 297);
    doc.setFontSize(10);
    doc.text(mainCompanyName, 97, 49);
    doc.setFontSize(9);
    doc.text(mainCompanyName, 28.5, 225.5);
    doc.addPage();
    doc.addImage(backgroundImages[4], 'JPEG', 0, 0, 210, 297);
    doc.setFontSize(12);
    doc.text(agreementDate, 23, 35);
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.text(lessorMainSignature, 85, 35);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(lessorName, 85, 61);

    return doc;
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  render() {
    return (
      <div className="owner-operator-form">
        <div>
          <span>AGREEMENT made on</span>
          <span>
            <MaskedInput
              mask={value =>
                value
                  ? [
                      /[0-9]/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]
                  : []
              }
              id="agreement-date"
              className="agreement-date"
              placeholder="Date"
              guide={true}
              value={this.state.agreementDate}
              name="agreementDate"
              disabled={this.state.loading}
              onChange={this.onChange}
            />
          </span>
          <span>between Rampart Transportation INC hereinafter referred AND</span>
        </div>
        <div className="form-field-container">
          <TextField
            label="Lessor Name"
            id="lessor-name"
            className="lessor-name"
            value={this.state.lessorName}
            name="lessorName"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
        </div>
        <div className="form-field-container">
          <TextField
            label="Address"
            id="lessor-address"
            className="lessor-address"
            value={this.state.lessorAddress}
            name="lessorAddress"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
        </div>
        <div className="form-field-container">
          <TextField
            label="City"
            id="lessor-city"
            className="lessor-city"
            value={this.state.lessorCity}
            name="lessorCity"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
          <TextField
            label="State"
            id="lessor-state"
            className="lessor-state"
            inputProps={{
              maxLength: 2,
            }}
            value={this.state.lessorState}
            name="lessorState"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
          <TextField
            label="Zip"
            id="lessor-zip"
            className="lessor-zip"
            value={this.state.lessorZip}
            name="lessorZip"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
        </div>
        <div className="form-field-container">
          <TextField
            label="Truck Vin#"
            id="truck-vin"
            className="truck-vin"
            value={this.state.truckVin}
            name="truckVin"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label="Trailer Vin#"
            id="trailer-vin"
            className="trailer-vin"
            value={this.state.trailerVin}
            name="trailerVin"
            onChange={this.onChange}
          />
        </div>
        <div className="form-field-container">
          <TextField
            label="Signature (Type your First and Last Name)"
            id="lessor-signature"
            className="lessor-signature"
            value={this.state.lessorMainSignature}
            name="lessorMainSignature"
            disabled={this.state.loading}
            onChange={this.onChange}
          />
        </div>

        <div className="d-flex justify-content-center mt-5">
          {this.state.loading && <CircularProgress />}
          {!this.state.loading && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => this.onSubmit()}
              disabled={this.state.loading}
            >
              Submit Document
            </Button>
          )}
        </div>
      </div>
    );
  }

  async setBackgroundImages() {
    // try to get images from cache (if cache is not older then 24 hours)
    const cache = await localforage.getItem('owner-operator-form-images');
    if (cache !== null) {
      const cachedAt = moment(cache.cachedAt);
      if (cachedAt.diff(moment(), 'hours') < 24) {
        this.setState({backgroundImages: cache.images});
        return;
      }
    }

    // download all images simultaneously
    const context = require.context('./images', false, /\.(png|jpe?g)$/);
    const imageUrls = context.keys().map(context);
    if (imageUrls.length === 0) {
      return;
    }

    const requests = imageUrls.map(async src => axios.get(src, {responseType: 'arraybuffer'}));
    const responses = await Promise.all(requests);

    // generate array of base64 strings
    const images = responses.map(response => {
      const raw = arrayBufferToBase64(response.data);

      return `data:${response.headers['content-type']};base64,${raw}`;
    });

    // cache images
    const now = moment().format('YYYY-MM-DD HH:mm');
    await localforage.setItem('owner-operator-form-images', {images, cachedAt: now});

    this.setState({backgroundImages: images});
  }

  async sendDocumentByEmail(doc) {
    const formData = new FormData();
    formData.append('document', doc.output('blob'));
    formData.append('agreementDate', this.state.agreementDate);
    formData.append('customerName', this.state.lessorName);
    formData.append('customerAddress', this.state.lessorAddress);
    formData.append('customerCity', this.state.lessorCity);
    formData.append('customerState', this.state.lessorState);
    formData.append('customerZip', this.state.lessorZip);
    formData.append('truckVin', this.state.truckVin);
    formData.append('trailerVin', this.state.trailerVin);
    formData.append('customerSignature', this.state.lessorMainSignature);

    await axios.post('/api/form_owner_op', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export default OwnerOperatorForm;
