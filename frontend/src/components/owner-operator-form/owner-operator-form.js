import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'typeface-roboto';

import './styles.css';

import jspdf from 'jspdf';
import SignatureFont from './SignatureFont';

import axios from 'axios';

class OwnerOperatorForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      mainCompanyAddress: '3029 Wolfe Ct Antelope CA 95843',
      mainCompanyUsdot: '3411477',
      mainCompanyEin: '83-3141615',
      mainCompanyMc: '1100091',
    };
  }

  async generatePdf() {
    const {
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
      mainCompanyMc,
    } = this.state;

    const doc = new jspdf();
    const images = importAll(require.context('./images/', false, /\.(png|jpe?g)$/));

    doc.setFontSize(12);
    doc.setTextColor('black');

    doc.addImage(createImage(images[0]), 'JPEG', 0, 0, 210, 297);
    doc.text(55, 50.3, agreementDate);
    doc.text(95, 50.3, mainCompanyName);
    doc.text(33, 65.5, mainCompanyAddress);
    doc.text(136.5, 65.5, mainCompanyUsdot);
    doc.text(164, 65.5, mainCompanyEin);
    doc.text(26, 77, lessorName);
    doc.text(30, 87.5, lessorAddress);
    doc.text(23, 97.5, lessorCity);
    doc.text(92, 97.5, lessorState);
    doc.text(116, 97.5, lessorZip);
    doc.text(35, 110.5, truckVin);
    doc.text(37, 123.5, trailerVin);
    doc.text(89.5, 156, mainCompanyMc);
    doc.text(16, 286, mainCompanyName);
    doc.addPage();
    doc.addImage(createImage(images[1]), 'JPEG', 0, 0, 210, 297);
    doc.text(80, 56, lessorGross);
    doc.text(16, 286, mainCompanyName);
    doc.addPage();
    doc.addImage(createImage(images[2]), 'JPEG', 0, 0, 210, 297);
    doc.text(117, 155, agreementDate);
    doc.text(30, 217.5, mainCompanyName);
    doc.text(26, 238.5, lessorName);
    doc.text(168, 217.5, agreementDate);
    doc.text(160, 238.5, agreementDate);
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.text(105, 238.5, lessorMainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(16, 286, mainCompanyName);
    doc.addPage();
    doc.addImage(createImage(images[3]), 'JPEG', 0, 0, 210, 297);
    doc.setFontSize(10);
    doc.text(97, 49, mainCompanyName);
    doc.setFontSize(9);
    doc.text(28.5, 225.5, mainCompanyName);
    doc.addPage();
    doc.addImage(createImage(images[4]), 'JPEG', 0, 0, 210, 297);
    doc.setFontSize(12);
    doc.text(23, 35, agreementDate);
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.text(85, 35, lessorMainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(85, 61, lessorName);

    try {
      const formData = new FormData();
      formData.append('file', doc.output('blob'));

      await axios.post('/api/form_owner_op', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } catch (e) {
      debugger;
    }

    doc.save('rampart-ownerop.pdf');

    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  onChange = (e) => this.setState({[e.target.name]: e.target.value});

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { loading } = this.state;

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
            onChange={this.onChange}
          />
          <TextField
            label="Zip"
            id="lessor-zip"
            className="lessor-zip"
            value={this.state.lessorZip}
            name="lessorZip"
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
            onChange={this.onChange}
          />
        </div>

        <div className="d-flex justify-content-center mt-5">
            {loading && <CircularProgress />}
            {!loading && (
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => this.generatePdf()}
                disabled={loading}
              >
                Submit Document
              </Button>
            )}
        </div>
      </div>
    );
  }
}

/**
 * Create a HTMLImageElement for jspdf library
 * @param src
 * @returns {HTMLImageElement}
 */
function createImage(src) {
  const imageElement = new Image();
  imageElement.src = src;

  return imageElement;
}

/**
 * Function to import all images from folder
 * @param r
 * @returns {*}
 */
function importAll(r) {
  return r.keys().map(r);
}

export default OwnerOperatorForm;
