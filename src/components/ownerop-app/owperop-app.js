import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'typeface-roboto';
import './ownerop-app.css';
import jspdf from 'jspdf';
import SignatureFont from './SignatureFont';

export default class OwperopApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dateOfAgr: '',
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
  generateOwnerOp() {
    const {
      dateOfAgr,
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
    const images = importAll(
      require.context('./images/', false, /\.(png|jpe?g)$/)
    );
    doc.setFontSize(12);
    doc.setTextColor('black');

    doc.addImage(createImage(images[0]), 'JPG', 0, 0, 210, 297);
    doc.text(55, 50.3, dateOfAgr);
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
    doc.addImage(createImage(images[1]), 'JPG', 0, 0, 210, 297);
    doc.text(80, 56, lessorGross);
    doc.text(16, 286, mainCompanyName);
    doc.addPage();
    doc.addImage(createImage(images[2]), 'JPG', 0, 0, 210, 297);
    doc.text(117, 155, dateOfAgr);
    doc.text(30, 217.5, mainCompanyName);
    doc.text(26, 238.5, lessorName);
    doc.text(168, 217.5, dateOfAgr);
    doc.text(160, 238.5, dateOfAgr);
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.text(105, 238.5, lessorMainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    doc.text(16, 286, mainCompanyName);

    doc.save('rampart-ownerop.pdf');
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { loading } = this.state;
    return (
      <div className='container mainContent'>
        <div className='row agreemContent'>
          <p>AGREEMENT made on</p>
          <span>
            <MaskedInput
              mask={(value) =>
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
              id='dateOfAgr'
              className='dateOfAgr'
              placeholder='Date'
              guide={true}
              value={this.state.dateOfAgr}
              name='dateOfAgr'
              onChange={this.onChange}
            />
          </span>
          <p>between Rampart Transportation INC hereinafter referred</p>
        </div>
        <div>
          {' '}
          <span>AND</span>{' '}
        </div>
        <div>
          <TextField
            label='Lessor Name'
            id='lessorName'
            className='lessorName'
            value={this.state.lessorName}
            name='lessorName'
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label='Address'
            id='lessorAddress'
            className='lessorAddress'
            value={this.state.lessorAddress}
            name='lessorAddress'
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label='City'
            id='lessorCity'
            className='lessorCity'
            value={this.state.lessorCity}
            name='lessorCity'
            onChange={this.onChange}
          />
          <TextField
            label='State'
            id='lessorState'
            className='lessorState'
            inputProps={{
              maxLength: 2,
            }}
            value={this.state.lessorState}
            name='lessorState'
            onChange={this.onChange}
          />
          <TextField
            label='Zip'
            id='lessorZip'
            className='lessorZip'
            value={this.state.lessorZip}
            name='lessorZip'
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label='Truck Vin#'
            id='truckVin'
            className='truckVin'
            value={this.state.truckVin}
            name='truckVin'
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label='Trailer Vin#'
            id='trailerVin'
            className='trailerVin'
            value={this.state.trailerVin}
            name='trailerVin'
            onChange={this.onChange}
          />
        </div>
        <div>
          <TextField
            label='Signature(Type your First and Last Name)'
            id='signature'
            className='lessorMainSignature'
            value={this.state.lessorMainSignature}
            name='lessorMainSignature'
            onChange={this.onChange}
          />
        </div>

        <div className='MainBtnDiv'>
          <span
            onClick={() => this.generateOwnerOp()}
            disabled={loading}
            color='primary'
            className='mainCircProg'
          >
            {loading && <CircularProgress />}
            {loading && <span />}
            {!loading && (
              <Button
                variant='contained'
                color='primary'
                size='large'
                className='mainBtn'
              >
                Submit Document
              </Button>
            )}
          </span>
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
