import React, { Component } from 'react';
import MaskedInput from 'react-text-mask';
import InputBase from '@material-ui/core/InputBase';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import 'typeface-roboto';
import jspdf from 'jspdf';
import './driver-app.css';
import SignatureFont from './SignatureFont';

class DriverApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainCompanyName: 'Rampart Transportation INC',
      name: '',
      dateOfApp: '',
      address: '',
      hlfield: '',
      city: '',
      state: '',
      zipCode: '',
      telephone: '',
      mobile: '',
      socialNumber: '',
      birthDate: '',
      driverLic: '',
      stateIssue: '',
      expDate: '',

      address1: '',
      city1: '',
      state1: '',
      zipCode1: '',
      address2: '',
      city2: '',
      state2: '',
      zipCode2: '',
      address3: '',
      city3: '',
      state3: '',
      zipCode3: '',

      expCheck: false,
      typeOf1: '',
      typeOf2: '',
      typeOf3: '',
      typeOf4: '',
      typeOf5: '',
      typeOf6: '',

      nOfM1: '',
      nOfM2: '',
      nOfM3: '',
      nOfM4: '',
      nOfM5: '',
      nOfM6: '',

      tableDateFrom1: '',
      tableDateFrom2: '',
      tableDateFrom3: '',
      tableDateFrom4: '',
      tableDateFrom5: '',
      tableDateFrom6: '',

      tableDateTo1: '',
      tableDateTo2: '',
      tableDateTo3: '',
      tableDateTo4: '',
      tableDateTo5: '',
      tableDateTo6: '',

      accCheck: false,
      accidentDate1: '',
      accidentDate2: '',
      accidentDate3: '',

      accidentNature1: '',
      accidentNature2: '',
      accidentNature3: '',

      accidentFatal1: '',
      accidentFatal2: '',
      accidentFatal3: '',

      accidentPers1: '',
      accidentPers2: '',
      accidentPers3: '',
      // page2
      violCheck: false,
      violatLoc1: '',
      violatLoc2: '',
      violatLoc3: '',
      violatLoc4: '',

      violatDate1: '',
      violatDate2: '',
      violatDate3: '',
      violatDate4: '',

      violatCharge1: '',
      violatCharge2: '',
      violatCharge3: '',
      violatCharge4: '',

      violatPenal1: '',
      violatPenal2: '',
      violatPenal3: '',
      violatPenal4: '',

      violCheckQYes1: false,
      violCheckQNo1: false,
      violCheckQYes2: false,
      violCheckQNo2: false,
      //employment record table 1
      emplname1: '',
      empladdress1: '',
      emplcity1: '',
      emplconpers1: '',
      emplphone1: '',

      emplDateFromM1: '',
      emplDateFromY1: '',
      emplDateToM1: '',
      emplDateToY1: '',
      emplPosHeld1: '',
      emplReasLeave1: '',
      emplSalary1: '',
      emplDrug1: '',
      //employment record table 2
      emplname2: '',
      empladdress2: '',
      emplcity2: '',
      emplconpers2: '',
      emplphone2: '',

      emplDateFromM2: '',
      emplDateFromY2: '',
      emplDateToM2: '',
      emplDateToY2: '',
      emplPosHeld2: '',
      emplReasLeave2: '',
      emplSalary2: '',
      emplDrug2: '',
      //employment record table 3
      emplname3: '',
      empladdress3: '',
      emplcity3: '',
      emplconpers3: '',
      emplphone3: '',

      emplDateFromM3: '',
      emplDateFromY3: '',
      emplDateToM3: '',
      emplDateToY3: '',
      emplPosHeld3: '',
      emplReasLeave3: '',
      emplSalary3: '',
      emplDrug3: '',
      mainSignature: '',
      signDate: '',
      //alco-drug
      //1
      alcDrugCheckQYes1: false,
      alcDrugCheckQNo1: false,
      //2
      alcDrugCheckQYes2: false,
      alcDrugCheckQNo2: false,
      //3
      alcDrugCheckQYes3: false,
      alcDrugCheckQNo3: false,
      //4
      alcDrugCheckQYes4: false,
      alcDrugCheckQNo4: false,
      //certification of violations
      sertOfViolCheck: false,

      sertOfViolTableDate1: '',
      sertOfViolTableOffense1: '',
      sertOfViolTableLoc1: '',
      sertOfViolTableTypeOf1: '',

      sertOfViolTableDate2: '',
      sertOfViolTableOffense2: '',
      sertOfViolTableLoc2: '',
      sertOfViolTableTypeOf2: '',

      sertOfViolTableDate3: '',
      sertOfViolTableOffense3: '',
      sertOfViolTableLoc3: '',
      sertOfViolTableTypeOf3: '',

      sertOfViolTableDate4: '',
      sertOfViolTableOffense4: '',
      sertOfViolTableLoc4: '',
      sertOfViolTableTypeOf4: '',

      sertOfViolTableDate5: '',
      sertOfViolTableOffense5: '',
      sertOfViolTableLoc5: '',
      sertOfViolTableTypeOf5: '',
      //page14
      inspCargoCheck: false,
      genSecCargoCheck: false,
      perfCritCheck: false,
      standartsSecuCheck: false,
      secuPartCheck: false,
      determWorkCheck: false,
      determAggrCheck: false,
      determMinNumbCheck: false,
      frontStructCheck: false,
      //page19
      receiptAcknowCheck: false,
      reviewInfoCheck: false,
      requestCorrCheck: false,
      rebutInfoCheck: false,
      //page23
      havingAlco: false,
      beingUnderAlco: false,
      beingUnderCont: false,
      refuseTakeAlco: false,
      leaveScene: false,
      useVenicle: false,
      driveSusp: false,
      speedExc: false,
      followClose: false,
      violatTraffic: false,
      causeFatal: false,
      makingImprop: false,
      //emegnecy form page 27
      emMainName: '',
      emDepart: '',
      emHomeAddr: '',
      emMainCsz: '',
      emMainHomeTel: '',
      emMainCell: '',

      emerMainName1: '',
      emerMainRel1: '',
      emMainAddr1: '',
      emerMainCsz1: '',
      emerHomeTel1: '',
      emerCell1: '',
      emerWorkTel1: '',
      emerEmpl1: '',

      emerMainName2: '',
      emerMainRel2: '',
      emMainAddr2: '',
      emerMainCsz2: '',
      emerHomeTel2: '',
      emerCell2: '',
      emerWorkTel2: '',
      emerEmpl2: '',

      emerMedDocName: '',
      emerMedDocPhone: '',

      emerMedDenName: '',
      emerMedDenPhone: '',

      emplEmerCheck: false,
      loading: false,
    };
  }
  generatePdf = () => {
    this.setState({ loading: true });

    const doc = new jspdf();
    const images = importAll(
      require.context('./images/', false, /\.(png|jpe?g)$/)
    );

    doc.setFontSize(12);
    doc.setTextColor('black');
    //page0

    doc.addImage(createImage(images[0]), 'JPG', 0, 0, 210, 297);
    // doc.addImage(this.state.page0Image, "JPG", 0, 0, 210, 297);

    //text(x, y, this.state)
    //page1
    doc.addPage();
    doc.addImage(createImage(images[1]), 'JPG', 0, 0, 210, 297);
    doc.text(42, 70.1, this.state.name);
    //page2 Application for independent driver
    doc.addPage();
    doc.addImage(createImage(images[2]), 'JPG', 0, 0, 210, 297);

    doc.text(32, 50.5, this.state.name);
    doc.text(35, 58.5, this.state.address);
    doc.text(35, 66.5, this.state.city);
    doc.text(100, 66.5, this.state.state);
    doc.text(123, 66.5, this.state.zipCode);
    doc.text(166.5, 50.5, this.state.dateOfApp);
    doc.text(160, 58.5, this.state.hlfield);
    doc.text(39, 77.5, this.state.telephone);
    doc.text(127.5, 77.5, this.state.mobile);
    doc.text(48.5, 85, this.state.socialNumber);
    doc.text(133, 85, this.state.birthDate);
    doc.text(67, 93, this.state.driverLic);
    doc.text(125, 93, this.state.stateIssue);
    doc.text(157, 93, this.state.expDate);

    doc.text(34, 108.5, this.state.address1);
    doc.text(100, 108.5, this.state.city1);
    doc.text(145, 108.5, this.state.state1);
    doc.text(163, 108.5, this.state.zipCode1);

    doc.text(34, 118, this.state.address2);
    doc.text(100, 118, this.state.city2);
    doc.text(145, 118, this.state.state2);
    doc.text(163, 118, this.state.zipCode2);

    doc.text(34, 127, this.state.address3);
    doc.text(100, 127, this.state.city3);
    doc.text(145, 127, this.state.state3);
    doc.text(163, 127, this.state.zipCode3);

    // experience in the operation table
    doc.text(113.5, 143.8, this.state.expCheck ? 'x' : '');
    doc.setFontSize(9.5);
    let typeOf1 = doc.splitTextToSize(this.state.typeOf1, 41);
    doc.text(58, 157, typeOf1);
    doc.setFontSize(12);
    doc.text(97.5, 159, this.state.tableDateFrom1);
    doc.text(120, 159, this.state.tableDateTo1);
    doc.text(144, 159, this.state.nOfM1);

    doc.setFontSize(9.5);
    let typeOf2 = doc.splitTextToSize(this.state.typeOf2, 41);
    doc.text(58, 162.5, typeOf2);
    doc.setFontSize(12);
    doc.text(97.5, 165, this.state.tableDateFrom2);
    doc.text(120, 165, this.state.tableDateTo2);
    doc.text(144, 165, this.state.nOfM2);

    doc.setFontSize(9.5);
    let typeOf3 = doc.splitTextToSize(this.state.typeOf3, 41);
    doc.text(58, 168.5, typeOf3);
    doc.setFontSize(12);
    doc.text(97.5, 171, this.state.tableDateFrom3);
    doc.text(120, 171, this.state.tableDateTo3);
    doc.text(144, 171, this.state.nOfM3);

    doc.setFontSize(9.5);
    let typeOf4 = doc.splitTextToSize(this.state.typeOf4, 41);
    doc.text(58, 174.5, typeOf4);
    doc.setFontSize(12);
    doc.text(97.5, 177, this.state.tableDateFrom4);
    doc.text(120, 177, this.state.tableDateTo4);
    doc.text(144, 177, this.state.nOfM4);

    doc.setFontSize(9.5);
    let typeOf5 = doc.splitTextToSize(this.state.typeOf5, 41);
    doc.text(58, 180.5, typeOf5);
    doc.setFontSize(12);
    doc.text(97.5, 183, this.state.tableDateFrom5);
    doc.text(120, 183, this.state.tableDateTo5);
    doc.text(144, 183, this.state.nOfM5);

    doc.setFontSize(9.5);
    let typeOf6 = doc.splitTextToSize(this.state.typeOf6, 41);
    doc.text(58, 186.5, typeOf6);
    doc.setFontSize(12);
    doc.text(97.5, 189, this.state.tableDateFrom6);
    doc.text(120, 189, this.state.tableDateTo6);
    doc.text(144, 189, this.state.nOfM6);

    doc.text(179.5, 206, this.state.accCheck ? 'x' : '');

    doc.text(22, 220, this.state.accidentDate1);
    doc.setFontSize(9.5);
    let accidentNature1 = doc.splitTextToSize(this.state.accidentNature1, 41);
    doc.text(56, 217.5, accidentNature1);
    let accidentFatal1 = doc.splitTextToSize(this.state.accidentFatal1, 41);
    doc.text(98.5, 217.5, accidentFatal1);
    let accidentPers1 = doc.splitTextToSize(this.state.accidentPers1, 41);
    doc.text(142, 217.5, accidentPers1);

    doc.setFontSize(12);
    doc.text(22, 225.5, this.state.accidentDate2);
    doc.setFontSize(9.5);
    let accidentNature2 = doc.splitTextToSize(this.state.accidentNature2, 41);
    doc.text(56, 223.5, accidentNature2);
    let accidentFatal2 = doc.splitTextToSize(this.state.accidentFatal2, 41);
    doc.text(98.5, 223.5, accidentFatal2);
    let accidentPers2 = doc.splitTextToSize(this.state.accidentPers2, 41);
    doc.text(142, 223.5, accidentPers2);

    doc.setFontSize(12);
    doc.text(22, 232, this.state.accidentDate3);
    doc.setFontSize(9.5);
    let accidentNature3 = doc.splitTextToSize(this.state.accidentNature3, 41);
    doc.text(56, 230, accidentNature3);
    let accidentFatal3 = doc.splitTextToSize(this.state.accidentFatal3, 41);
    doc.text(98.5, 230, accidentFatal3);
    let accidentPers3 = doc.splitTextToSize(this.state.accidentPers3, 41);
    doc.text(142, 230, accidentPers3);
    doc.setFontSize(12);
    doc.text(15, 286, this.state.mainCompanyName);

    doc.addPage(); //PAGE 3 Violations of motor
    doc.addImage(createImage(images[3]), 'PNG', 0, 0, 210, 297);
    doc.text(177, 29, this.state.violCheck ? 'x' : '');
    doc.text(22.5, 42.5, this.state.violatLoc1);
    doc.text(92.5, 42.5, this.state.violatDate1);
    doc.setFontSize(9.5);
    let violatCharge1 = doc.splitTextToSize(this.state.violatCharge1, 35);
    doc.text(122.5, 40.5, violatCharge1);
    let violatPenal1 = doc.splitTextToSize(this.state.violatPenal1, 35);
    doc.text(155, 40.5, violatPenal1);
    doc.setFontSize(12);
    doc.text(22.5, 49.5, this.state.violatLoc2);
    doc.text(92.5, 49.5, this.state.violatDate2);
    doc.setFontSize(9.5);
    let violatCharge2 = doc.splitTextToSize(this.state.violatCharge2, 35);
    doc.text(122.5, 46.5, violatCharge2);
    let violatPenal2 = doc.splitTextToSize(this.state.violatPenal2, 35);
    doc.text(155, 46.5, violatPenal2);
    doc.setFontSize(12);
    doc.text(22.5, 55, this.state.violatLoc3);
    doc.text(92.5, 55, this.state.violatDate3);
    doc.setFontSize(9.5);
    let violatCharge3 = doc.splitTextToSize(this.state.violatCharge3, 35);
    doc.text(121.5, 52.5, violatCharge3);
    let violatPenal3 = doc.splitTextToSize(this.state.violatPenal3, 35);
    doc.text(154, 52.5, violatPenal3);
    doc.setFontSize(12);
    doc.text(22.5, 61, this.state.violatLoc4);
    doc.text(92.5, 61, this.state.violatDate4);
    doc.setFontSize(9.5);
    let violatCharge4 = doc.splitTextToSize(this.state.violatCharge4, 35);
    doc.text(121.5, 58.5, violatCharge4);
    let violatPenal4 = doc.splitTextToSize(this.state.violatPenal4, 35);
    doc.text(154, 58.5, violatPenal4);
    doc.setFontSize(12);

    doc.text(167.5, 72.2, this.state.violCheckQYes1 ? 'x' : '');
    doc.text(178, 72.2, this.state.violCheckQNo1 ? 'x' : '');
    doc.text(167.5, 78.5, this.state.violCheckQYes2 ? 'x' : '');
    doc.text(178, 78.5, this.state.violCheckQNo2 ? 'x' : '');

    doc.text(29.5, 115, this.state.emplname1);
    doc.text(33, 122, this.state.empladdress1);
    doc.text(30, 127.5, this.state.emplcity1);
    doc.text(23, 135, this.state.emplconpers1);
    doc.text(75, 135, this.state.emplphone1);
    doc.text(135, 116, this.state.emplDateFromM1);
    doc.text(146.5, 116, this.state.emplDateFromY1);
    doc.text(161, 116, this.state.emplDateToM1);
    doc.text(171, 116, this.state.emplDateToY1);
    doc.setFontSize(9.5);
    let emplPosHeld1 = doc.splitTextToSize(this.state.emplPosHeld1, 35);
    doc.text(150, 119, emplPosHeld1);
    doc.setFontSize(12);
    doc.text(133, 128, this.state.emplSalary1);
    doc.text(158, 128, this.state.emplReasLeave1);
    doc.text(131.5, 138, this.state.emplDrug1);

    doc.text(29.5, 152.5, this.state.emplname2);
    doc.text(33, 158.5, this.state.empladdress2);
    doc.text(30, 164.5, this.state.emplcity2);
    doc.text(23, 174, this.state.emplconpers2);
    doc.text(75, 174, this.state.emplphone2);
    doc.text(135, 152.5, this.state.emplDateFromM2);
    doc.text(146.5, 152.5, this.state.emplDateFromY2);
    doc.text(161, 152.5, this.state.emplDateToM2);
    doc.text(171, 152.5, this.state.emplDateToY2);
    doc.setFontSize(9.5);
    let emplPosHeld2 = doc.splitTextToSize(this.state.emplPosHeld2, 35);
    doc.text(150, 155.5, emplPosHeld2);
    doc.setFontSize(12);
    doc.text(133, 164.5, this.state.emplSalary2);
    doc.text(158, 164.5, this.state.emplReasLeave2);
    doc.text(131.5, 174.5, this.state.emplDrug2);

    doc.text(29.5, 188.5, this.state.emplname3);
    doc.text(33, 194.5, this.state.empladdress3);
    doc.text(30, 200.5, this.state.emplcity3);
    doc.text(23, 209, this.state.emplconpers3);
    doc.text(75, 209, this.state.emplphone3);
    doc.text(135, 189, this.state.emplDateFromM3);
    doc.text(146.5, 189, this.state.emplDateFromY3);
    doc.text(161, 189, this.state.emplDateToM3);
    doc.text(171.5, 189, this.state.emplDateToY3);
    doc.setFontSize(9.5);
    let emplPosHeld3 = doc.splitTextToSize(this.state.emplPosHeld3, 35);
    doc.text(150, 192, emplPosHeld3);
    doc.setFontSize(12);
    doc.text(133, 201, this.state.emplSalary3);
    doc.text(158, 201, this.state.emplReasLeave3);
    doc.text(131.5, 209.5, this.state.emplDrug3);

    doc.text(15, 286, this.state.mainCompanyName);
    // setting main signature font
    doc.addFileToVFS('Meddon.ttf', SignatureFont);
    doc.addFont('Meddon.ttf', 'Meddon', 'cursive');
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(17);
    doc.text(25, 245, this.state.mainSignature);
    //switching back to normal font
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(138, 245, this.state.signDate);

    //page 4 driver's written authr to release
    doc.addPage();
    doc.addImage(createImage(images[4]), 'JPG', 0, 0, 210, 297);
    doc.text(24, 170, this.state.name);
    doc.text(130, 189, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(24, 189, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    //page 5-1 info from employer
    doc.addPage();
    doc.addImage(createImage(images[5]), 'JPG', 0, 0, 210, 297);
    doc.text(46, 29.5, this.state.name);
    doc.text(139, 29.5, this.state.driverLic);
    doc.text(36, 35.5, this.state.address);
    doc.text(141, 36, this.state.stateIssue);
    doc.text(30, 41.5, this.state.city);
    doc.text(125, 41.5, this.state.socialNumber);
    doc.text(19, 54.7, this.state.emplname1);
    doc.text(19, 59.8, this.state.empladdress1);
    doc.text(19, 64.5, this.state.emplcity1);
    doc.text(19, 69.5, this.state.emplconpers1);
    doc.text(70, 69.5, this.state.emplphone1);
    doc.text(26, 82.5, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(17, 103.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(78, 103.5, this.state.signDate);
    doc.text(15, 285, this.state.mainCompanyName);

    //page 5-2
    doc.addPage();
    doc.addImage(createImage(images[5]), 'JPG', 0, 0, 210, 297);
    doc.text(46, 29.5, this.state.name);
    doc.text(139, 29.5, this.state.driverLic);
    doc.text(36, 35.5, this.state.address);
    doc.text(141, 36, this.state.stateIssue);
    doc.text(30, 41.5, this.state.city);
    doc.text(125, 41.5, this.state.socialNumber);
    doc.text(19, 54.7, this.state.emplname2);
    doc.text(19, 59.8, this.state.empladdress2);
    doc.text(19, 64.5, this.state.emplcity2);
    doc.text(19, 69.5, this.state.emplconpers2);
    doc.text(70, 69.5, this.state.emplphone2);
    doc.text(26, 82.5, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(17, 103.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(78, 103.5, this.state.signDate);
    doc.text(15, 285, this.state.mainCompanyName);

    //page 5-3
    doc.addPage();
    doc.addImage(createImage(images[5]), 'JPG', 0, 0, 210, 297);
    doc.text(46, 29.5, this.state.name);
    doc.text(139, 29.5, this.state.driverLic);
    doc.text(36, 35.5, this.state.address);
    doc.text(141, 36, this.state.stateIssue);
    doc.text(30, 41.5, this.state.city);
    doc.text(125, 41.5, this.state.socialNumber);
    doc.text(19, 54.7, this.state.emplname3);
    doc.text(19, 59.8, this.state.empladdress3);
    doc.text(19, 64.5, this.state.emplcity3);
    doc.text(19, 69.5, this.state.emplconpers3);
    doc.text(70, 69.5, this.state.emplphone3);
    doc.text(26, 82.5, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(17, 103.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(78, 103.5, this.state.signDate);
    doc.text(15, 285, this.state.mainCompanyName);

    //page6 DMV
    doc.addPage();
    doc.addImage(createImage(images[6]), 'JPG', 0, 0, 210, 297);
    doc.text(24, 85, this.state.name);
    doc.text(142, 85, this.state.driverLic);
    doc.text(55, 92.5, this.state.mainCompanyName);
    doc.text(42, 132, '3029 Wolfe CT');
    doc.text(120, 132, 'Antelope');
    doc.text(178, 132, 'CA');
    doc.text(27, 143, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(85, 143, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(110, 153, this.state.mainCompanyName);
    doc.text(42, 205, '3029 Wolfe CT');
    doc.text(120, 205, 'Antelope');
    doc.text(178, 205, 'CA');
    doc.text(27, 215.5, this.state.signDate);

    //page7 annual review
    doc.addPage();
    doc.addImage(createImage(images[7]), 'JPG', 0, 0, 210, 297);
    doc.text(49, 41.4, this.state.name);
    doc.text(139, 41.4, this.state.driverLic);
    doc.text(40, 47.5, this.state.address);
    doc.text(140, 47.5, this.state.stateIssue);
    doc.text(32, 53, this.state.city);
    doc.text(124, 53, this.state.socialNumber);
    doc.text(34, 99, 'X');
    doc.text(125, 130, this.state.signDate);
    doc.text(15, 286, this.state.mainCompanyName);

    //page8 motor venicle
    doc.addPage();
    doc.addImage(createImage(images[8]), 'JPG', 0, 0, 210, 297);
    doc.text(49, 40.5, this.state.name);
    doc.text(141, 41, this.state.driverLic);
    doc.text(40, 46, this.state.address);
    doc.text(140, 46, this.state.stateIssue);
    doc.text(32, 51.5, this.state.city);
    doc.text(124, 52.5, this.state.socialNumber);
    doc.text(182.7, 75, this.state.sertOfViolCheck ? 'X' : '');
    doc.text(23, 95, this.state.sertOfViolTableDate1);
    doc.text(54.5, 95, this.state.sertOfViolTableOffense1);
    doc.text(110, 95, this.state.sertOfViolTableLoc1);
    doc.text(161.5, 95, this.state.sertOfViolTableTypeOf1);

    doc.text(23, 100.7, this.state.sertOfViolTableDate2);
    doc.text(54.5, 100.7, this.state.sertOfViolTableOffense2);
    doc.text(110, 100.7, this.state.sertOfViolTableLoc2);
    doc.text(161, 100.7, this.state.sertOfViolTableTypeOf2);

    doc.text(23, 107, this.state.sertOfViolTableDate3);
    doc.text(54.5, 107, this.state.sertOfViolTableOffense3);
    doc.text(110, 107, this.state.sertOfViolTableLoc3);
    doc.text(161, 107, this.state.sertOfViolTableTypeOf3);

    doc.text(23, 113.5, this.state.sertOfViolTableDate4);
    doc.text(54.5, 113.5, this.state.sertOfViolTableOffense4);
    doc.text(110, 113.5, this.state.sertOfViolTableLoc4);
    doc.text(161, 113.5, this.state.sertOfViolTableTypeOf4);

    doc.text(23, 119.5, this.state.sertOfViolTableDate5);
    doc.text(54.4, 119.5, this.state.sertOfViolTableOffense5);
    doc.text(110, 119.5, this.state.sertOfViolTableLoc5);
    doc.text(161, 119.5, this.state.sertOfViolTableTypeOf5);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(25, 227, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(133, 227, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page9 education material and alco policy
    doc.addPage();
    doc.addImage(createImage(images[9]), 'JPG', 0, 0, 210, 297);
    doc.setFontSize(18);
    doc.text(77, 178, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.text(72, 192, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //-page10
    doc.addPage();
    doc.addImage(createImage(images[10]), 'JPG', 0, 0, 210, 297);
    doc.text(68, 55.5, this.state.name);
    doc.text(66.5, 61.5, this.state.driverLic);
    doc.text(58, 67, this.state.address);
    doc.text(68, 73, this.state.stateIssue);
    doc.text(51, 79, this.state.city);
    doc.text(51, 86.5, this.state.socialNumber);
    doc.text(171.5, 116, this.state.alcDrugCheckQYes2 ? 'X' : '');
    doc.text(179.5, 116, this.state.alcDrugCheckQNo2 ? 'X' : '');
    doc.text(171.5, 125, this.state.alcDrugCheckQYes3 ? 'X' : '');
    doc.text(179.5, 125, this.state.alcDrugCheckQNo3 ? 'X' : '');
    doc.text(171.5, 135.5, this.state.alcDrugCheckQYes4 ? 'X' : '');
    doc.text(179.5, 135.5, this.state.alcDrugCheckQNo4 ? 'X' : '');
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(36, 212.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(148, 212.5, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page11 Acknowledge receipt of
    doc.addPage();
    doc.addImage(createImage(images[11]), 'JPG', 0, 0, 210, 297);
    doc.text(45, 124.5, this.state.name);
    doc.text(152, 124.5, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(107, 124.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page12 gergun regular form
    doc.addPage();
    doc.addImage(createImage(images[12]), 'JPG', 0, 0, 210, 297);

    //page13-w9
    doc.addPage();
    doc.addImage(createImage(images[13]), 'JPG', 0, 0, 210, 297);

    //page14 inspection report
    doc.addPage();
    doc.addImage(createImage(images[14]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(56, 240.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(133, 240.5, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page15 certificate of driver's road test
    doc.addPage();
    doc.addImage(createImage(images[15]), 'JPG', 0, 0, 210, 297);
    doc.text(68, 87, this.state.name);
    doc.text(82, 95.5, this.state.socialNumber);
    doc.text(115, 104, this.state.driverLic);
    doc.text(54, 112, this.state.stateIssue);
    doc.text(65, 235.4, '3029 Wolfe CT Antelope CA 95843');

    //page16 cargo training
    doc.addPage();
    doc.addImage(createImage(images[16]), 'JPG', 0, 0, 210, 297);
    doc.text(25, 99.5, this.state.inspCargoCheck ? 'X' : '');
    doc.text(25, 109.8, this.state.genSecCargoCheck ? 'X' : '');
    doc.text(25, 119, this.state.perfCritCheck ? 'X' : '');
    doc.text(25, 128.5, this.state.standartsSecuCheck ? 'X' : '');
    doc.text(25, 138, this.state.secuPartCheck ? 'X' : '');
    doc.text(25, 147.5, this.state.determWorkCheck ? 'X' : '');
    doc.text(25, 156.5, this.state.determAggrCheck ? 'X' : '');
    doc.text(25, 165.5, this.state.determMinNumbCheck ? 'X' : '');
    doc.text(25, 175, this.state.frontStructCheck ? 'X' : '');
    doc.setFontSize(16);
    doc.text(27, 193.5, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.text(27, 211.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(133, 211.5, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page17 disclosure of info
    doc.addPage();
    doc.addImage(createImage(images[17]), 'JPG', 0, 0, 210, 297);
    doc.text(135, 227.5, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(25, 227.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page18
    doc.addPage();
    doc.addImage(createImage(images[18]), 'JPG', 0, 0, 210, 297);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page19
    doc.addPage();
    doc.addImage(createImage(images[19]), 'JPG', 0, 0, 210, 297);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page20 disqualifying offenses
    doc.addPage();
    doc.addImage(createImage(images[20]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(40, 187, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(115, 187.5, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page21 receipt of driver rights
    doc.addPage();
    doc.addImage(createImage(images[21]), 'JPG', 0, 0, 210, 297);
    doc.text(25.7, 92.5, this.state.receiptAcknowCheck ? 'X' : '');
    doc.text(24.3, 128.7, this.state.reviewInfoCheck ? 'X' : '');
    doc.text(24.3, 142.7, this.state.requestCorrCheck ? 'X' : '');
    doc.text(24.3, 156, this.state.rebutInfoCheck ? 'X' : '');
    doc.setFontSize(16);
    doc.text(28, 180, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.text(28, 198, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(134, 199.5, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page22 Unauthorized passengers
    doc.addPage();
    doc.addImage(createImage(images[22]), 'JPG', 0, 0, 210, 297);
    doc.text(128, 238.5, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(24, 237, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page23
    doc.addPage();
    doc.addImage(createImage(images[23]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(25, 121.5, this.state.mainSignature);
    doc.text(25, 242.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(135, 121.5, this.state.signDate);
    doc.text(135, 242.5, this.state.signDate);

    //page24
    doc.addPage();
    doc.addImage(createImage(images[24]), 'JPG', 0, 0, 210, 297);
    doc.text(46, 195, this.state.name);
    doc.text(120, 196.5, this.state.socialNumber);
    doc.text(38, 204, this.state.address);
    doc.text(120, 206, this.state.city);
    doc.text(150, 207, this.state.stateIssue);
    doc.text(160, 207, this.state.zipCode);
    doc.text(48, 214, this.state.stateIssue);
    doc.text(132, 216, this.state.driverLic);
    doc.text(130, 229.5, this.state.signDate);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(50, 228, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page25
    doc.addPage();
    doc.addImage(createImage(images[25]), 'JPG', 0, 0, 210, 297);
    doc.text(24.5, 80.3, this.state.havingAlco ? 'X' : '');
    doc.text(24.5, 90.8, this.state.beingUnderAlco ? 'X' : '');
    doc.text(24.5, 100, this.state.beingUnderCont ? 'X' : '');
    doc.text(24.5, 109.5, this.state.refuseTakeAlco ? 'X' : '');
    doc.text(24.5, 119, this.state.leaveScene ? 'X' : '');
    doc.text(24.5, 128, this.state.useVenicle ? 'X' : '');
    doc.text(24.5, 137.5, this.state.driveSusp ? 'X' : '');
    doc.text(24.5, 147, this.state.speedExc ? 'X' : '');
    doc.text(24.5, 156.3, this.state.followClose ? 'X' : '');
    doc.text(24.5, 165.6, this.state.violatTraffic ? 'X' : '');
    doc.text(24.5, 174.7, this.state.causeFatal ? 'X' : '');
    doc.text(24.5, 184, this.state.makingImprop ? 'X' : '');
    doc.setFontSize(16);
    doc.text(26, 202, this.state.name);
    doc.setFont('Meddon', 'cursive');
    doc.text(26, 215.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(133, 216, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page26
    doc.addPage();
    doc.addImage(createImage(images[26]), 'JPG', 0, 0, 210, 297);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page27
    doc.addPage();
    doc.addImage(createImage(images[27]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(14);
    doc.text(44, 42, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page28
    doc.addPage();
    doc.addImage(createImage(images[28]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(25, 247, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(130, 248, this.state.signDate);
    doc.text(15, 286.5, this.state.mainCompanyName);

    //page29
    doc.addPage();
    doc.addImage(createImage(images[29]), 'JPG', 0, 0, 210, 297);
    doc.setFont('Meddon', 'cursive');
    doc.setFontSize(16);
    doc.text(45, 258.5, this.state.mainSignature);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(45, 267, this.state.signDate);

    //page30
    doc.addPage();
    doc.addImage(createImage(images[30]), 'JPG', 0, 0, 210, 297);
    doc.text(37, 50.5, this.state.emMainName);
    doc.text(42, 57.5, this.state.emHomeAddr);
    doc.text(26, 65.5, this.state.emMainCsz);
    doc.text(142, 51, this.state.emMainHomeTel);
    doc.text(142, 58.5, this.state.emMainCell);

    doc.text(37, 97.5, this.state.emerMainName1);
    doc.text(42, 105.5, this.state.emMainAddr1);
    doc.text(26, 112.5, this.state.emerMainCsz1);
    doc.text(142, 97.5, this.state.emerHomeTel1);
    doc.text(142, 105.5, this.state.emerCell1);
    doc.text(145, 113.5, this.state.emerMainRel1);

    doc.text(37, 128, this.state.emerMainName2);
    doc.text(42, 135, this.state.emMainAddr2);
    doc.text(26, 142, this.state.emerMainCsz2);
    doc.text(142, 128.3, this.state.emerHomeTel2);
    doc.text(142, 135.5, this.state.emerCell2);
    doc.text(145, 143.5, this.state.emerMainRel2);

    //page 31
    doc.addPage();
    doc.addImage(createImage(images[31]), 'JPG', 0, 0, 210, 297);

    doc.save('rampart-transportation.pdf');
    setTimeout(() => {
      this.setState({ loading: false });
    }, 4000);
  };
  static sendPdf(blob) {
    const formData = new FormData();
    formData.append('file', blob, 'Driver_application.pdf');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/sendmail.php', true);
    xhr.send(formData);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onChecked = (e, state) => this.setState({ [e.target.name]: state });
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { loading } = this.state;
    return (
      <div className='container'>
        <div className='page1-content'>
          <div className='headline'>
            <h2>Application for independent driver or owner operator</h2>
            <p>
              In compliance with Federal and state equal employment opportunity
              laws, qualified applicants are considered for all positions
              without regard <br /> to rase, region, sex, national origin, age,
              marital status, or non-job related medical condition or handicap -
              Equal Opportunity Contractor.{' '}
            </p>
          </div>
          <div className='name-content'>
            <TextField
              label='Name'
              id='name'
              className='name'
              value={this.state.name}
              name='name'
              onChange={this.onChange}
            />
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
              id='dateOfApp'
              className='dateOfApp'
              placeholder='Date of Application'
              guide={true}
              value={this.state.dateOfApp}
              name='dateOfApp'
              onChange={this.onChange}
            />
          </div>
          <div className='address-content'>
            <TextField
              label='Address'
              id='address'
              className='address'
              helperText='STREET'
              name='address'
              value={this.state.address}
              onChange={this.onChange}
            />
            <TextField
              label='How long?'
              id='hlfield'
              className='hlfield'
              name='hlfield'
              value={this.state.hlfield}
              onChange={this.onChange}
            />
          </div>
          <div className='row address-row'>
            <TextField
              id='city'
              className='city'
              helperText='CITY'
              name='city'
              value={this.state.city}
              onChange={this.onChange}
            />
            <TextField
              id='state'
              className='state'
              helperText='STATE'
              inputprops={{
                maxLength: 2,
              }}
              name='state'
              value={this.state.state}
              onChange={this.onChange}
            />
            <TextField
              id='zip-code'
              className='zip-code'
              helperText='ZIP CODE'
              inputprops={{
                maxLength: 5,
              }}
              name='zipCode'
              value={this.state.zipCode}
              onChange={this.onChange}
            />
          </div>
          <div className='row telephone-row'>
            <TextField
              id='telephone'
              className='telephone'
              helperText=''
              label='Telephone'
              name='telephone'
              value={this.state.telephone}
              onChange={this.onChange}
            />
            <TextField
              id='mobile'
              className='telephone'
              label='Mobile Phone'
              name='mobile'
              value={this.state.mobile}
              onChange={this.onChange}
            />
          </div>
          <div className='row social-row'>
            <MaskedInput
              id='social-number'
              className='social-number'
              placeholder='Social Security No.'
              mask={(value) =>
                value
                  ? [
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ]
                  : []
              }
              inputprops={{
                maxLength: 9,
              }}
              name='socialNumber'
              value={this.state.socialNumber}
              onChange={this.onChange}
            />
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
              id='birthDate'
              className='dateOfApp'
              placeholder='Date of Birth'
              guide={true}
              value={this.state.birthDate}
              name='birthDate'
              onChange={this.onChange}
            />
          </div>
          <div className='driver-license-row row'>
            <TextField
              id='driver-lic'
              className='driver-lic'
              label="Commercial Driver's Licence No."
              name='driverLic'
              value={this.state.driverLic}
              onChange={this.onChange}
            />
            <TextField
              id='state-issue'
              className='state-issue'
              label='State of Issue'
              name='stateIssue'
              value={this.state.stateIssue}
              onChange={this.onChange}
            />
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
              id='expDate'
              className='dateOfApp'
              placeholder='Exp. Date'
              guide={true}
              value={this.state.expDate}
              name='expDate'
              onChange={this.onChange}
            />
          </div>
          <div className='addresses-label'>
            <p>List your previous addresses for the past 3 years:</p>
          </div>
          <div className='row prev-addresses1'>
            <TextField
              label='Address'
              id='address1'
              className='address1'
              helperText='STREET'
              name='address1'
              value={this.state.address1}
              onChange={this.onChange}
            />
            <TextField
              id='city1'
              className='city1'
              helperText='CITY'
              label='&#8203;'
              name='city1'
              value={this.state.city1}
              onChange={this.onChange}
            />
            <TextField
              id='state1'
              className='state1'
              helperText='STATE'
              inputprops={{
                maxLength: 2,
              }}
              label='&#8203;'
              name='state1'
              value={this.state.state1}
              onChange={this.onChange}
            />
            <TextField
              id='zip-code1'
              className='zip-code1'
              helperText='ZIP CODE'
              inputprops={{
                maxLength: 5,
              }}
              label='&#8203;'
              name='zipCode1'
              value={this.state.zipCode1}
              onChange={this.onChange}
            />
          </div>
          <div className='row prev-addresses2'>
            <TextField
              label='Address'
              id='address2'
              className='address2'
              helperText='STREET'
              name='address2'
              value={this.state.address2}
              onChange={this.onChange}
            />
            <TextField
              id='city2'
              className='city2'
              helperText='CITY'
              label='&#8203;'
              name='city2'
              value={this.state.city2}
              onChange={this.onChange}
            />
            <TextField
              id='state2'
              className='state2'
              helperText='STATE'
              inputprops={{
                maxLength: 2,
              }}
              label='&#8203;'
              name='state2'
              value={this.state.state2}
              onChange={this.onChange}
            />
            <TextField
              id='zip-code2'
              className='zip-code2'
              helperText='ZIP CODE'
              inputprops={{
                maxLength: 5,
              }}
              label='&#8203;'
              name='zipCode2'
              value={this.state.zipCode2}
              onChange={this.onChange}
            />
          </div>
          <div className='row prev-addresses3'>
            <TextField
              label='Address'
              id='address3'
              className='address3'
              helperText='STREET'
              name='address3'
              value={this.state.address3}
              onChange={this.onChange}
            />
            <TextField
              id='city3'
              className='city3'
              helperText='CITY'
              label='&#8203;'
              name='city3'
              value={this.state.city3}
              onChange={this.onChange}
            />
            <TextField
              id='state3'
              className='state3'
              helperText='STATE'
              inputprops={{
                maxLength: 2,
              }}
              label='&#8203;'
              name='state3'
              value={this.state.state3}
              onChange={this.onChange}
            />
            <TextField
              id='zip-code3'
              className='zip-code3'
              helperText='ZIP CODE'
              inputprops={{
                maxLength: 5,
              }}
              label='&#8203;'
              name='zipCode3'
              value={this.state.zipCode3}
              onChange={this.onChange}
            />
          </div>
          <div className='table-headline'>
            <h5>Experience in the operation of motor vehicles</h5>
            <div className='row table-headline-checkbox'>
              <p>
                If don't have any experience in the operation of motor vehicles
                please, check here:
              </p>
              <Checkbox
                name='expCheck'
                onChange={(e, state) => this.onChecked(e, state)}
                color='primary'
                className='expCheckBox'
              />
            </div>
          </div>
          <div className='main-table'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>CLASS OF EQUIPMENT</th>
                  <th scope='col'>
                    TYPE OF EQUIPMENT <br />{' '}
                    <span>(VAN, REEFER, TANK, FLAT. ECT.)</span>
                  </th>
                  <th scope='col' colSpan='2'>
                    DATES <br /> <span className='spanDate1'>FROM</span>{' '}
                    <span className='spanDate2'>TO</span>
                  </th>
                  <th scope='col'>
                    APPROX. NO. OF MILES <br /> <span>(TOTAL)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>TRUCKS</th>
                  <td>
                    {' '}
                    <InputBase
                      id='typeOf1'
                      className='typoOf1'
                      name='typeOf1'
                      value={this.state.typeOf1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />{' '}
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom1'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom1}
                      name='tableDateFrom1'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo1'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo1}
                      name='tableDateTo1'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM1'
                      className='nOfM1'
                      name='nOfM1'
                      value={this.state.nOfM1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>TRUCK TRACTORST</th>
                  <td>
                    <InputBase
                      id='typeOf2'
                      className='typoOf2'
                      name='typeOf2'
                      value={this.state.typeOf2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom2'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom2}
                      name='tableDateFrom2'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo2'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo2}
                      name='tableDateTo2'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM2'
                      className='nOfM2'
                      name='nOfM2'
                      value={this.state.nOfM2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>SEMI TRAILERS</th>
                  <td>
                    <InputBase
                      id='typeOf3'
                      className='typoOf3'
                      name='typeOf3'
                      value={this.state.typeOf3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom3'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom3}
                      name='tableDateFrom3'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo3'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo3}
                      name='tableDateTo3'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM3'
                      className='nOfM3'
                      name='nOfM3'
                      value={this.state.nOfM3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>FULL TRAILERS</th>
                  <td>
                    <InputBase
                      id='typeOf4'
                      className='typoOf4'
                      name='typeOf4'
                      value={this.state.typeOf4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom4'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom4}
                      name='tableDateFrom4'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo4'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo4}
                      name='tableDateTo4'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM4'
                      className='nOfM4'
                      name='nOfM4'
                      value={this.state.nOfM4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>POLE TRAILERS</th>
                  <td>
                    <InputBase
                      id='typeOf5'
                      className='typoOf5'
                      name='typeOf5'
                      value={this.state.typeOf5}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom5'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom5}
                      name='tableDateFrom5'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo5'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo5}
                      name='tableDateTo5'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM5'
                      className='nOfM5'
                      name='nOfM5'
                      value={this.state.nOfM5}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <th scope='row'>OTHER</th>
                  <td>
                    <InputBase
                      id='typeOf6'
                      className='typoOf6'
                      name='typeOf6'
                      value={this.state.typeOf6}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='tableDateFrom'>
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
                      id='tableDateFrom6'
                      className='tableDateFromInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateFrom6}
                      name='tableDateFrom6'
                      onChange={this.onChange}
                    />
                  </td>
                  <td className='tableDateTo'>
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
                      id='tableDateTo6'
                      className='tableDateToInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.tableDateTo6}
                      name='tableDateTo6'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='nOfM6'
                      className='nOfM6'
                      name='nOfM6'
                      value={this.state.nOfM6}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='accident-table-headline'>
              <h5>Accident record</h5>
              <div className='row'>
                <p>
                  Please list all motor vehicle accidents in which you were
                  involved for the past 3 years, listing the most recent
                  accident first. If none, check here:
                </p>
                <Checkbox
                  name='accCheck'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              </div>
            </div>
            <div className='accident-datable'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>DATES</th>
                    <th scope='col'>NATURE OF ACCIDENT</th>
                    <th scope='col'>FATALITIES</th>
                    <th scope='col'>PERSONAL INJURES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='accidentDatetd'>
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
                        id='accidentDate1'
                        className='accidentDateInput'
                        placeholder='M/D/Y'
                        guide={true}
                        value={this.state.accidentDate1}
                        name='accidentDate1'
                        onChange={this.onChange}
                      />
                    </td>
                    <td className='accidentNaturetd'>
                      <InputBase
                        id='accidentNature1'
                        className='accidentNature1'
                        name='accidentNature1'
                        value={this.state.accidentNature1}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td className='accidentFataltd'>
                      <InputBase
                        id='accidentFatal1'
                        className='accidentFatal1'
                        name='accidentFatal1'
                        value={this.state.accidentFatal1}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td>
                      <InputBase
                        id='accidentPers1'
                        className='accidentPers1'
                        name='accidentPers1'
                        value={this.state.accidentPers1}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='accidentDatetd'>
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
                        id='accidentDate2'
                        className='accidentDateInput'
                        placeholder='M/D/Y'
                        guide={true}
                        value={this.state.accidentDate2}
                        name='accidentDate2'
                        onChange={this.onChange}
                      />
                    </td>
                    <td className='accidentNaturetd'>
                      <InputBase
                        id='accidentNature2'
                        className='accidentNature2'
                        name='accidentNature2'
                        value={this.state.accidentNature2}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td className='accidentFataltd'>
                      <InputBase
                        id='accidentFatal2'
                        className='accidentFatal2'
                        name='accidentFatal2'
                        value={this.state.accidentFatal2}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td>
                      <InputBase
                        id='accidentPers2'
                        className='accidentPers2'
                        name='accidentPers2'
                        value={this.state.accidentPers2}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='accidentDatetd'>
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
                        id='accidentDate3'
                        className='accidentDateInput'
                        placeholder='M/D/Y'
                        guide={true}
                        value={this.state.accidentDate3}
                        name='accidentDate3'
                        onChange={this.onChange}
                      />
                    </td>
                    <td className='accidentNaturetd'>
                      <InputBase
                        id='accidentNature3'
                        className='accidentNature3'
                        name='accidentNature3'
                        value={this.state.accidentNature3}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td className='accidentFataltd'>
                      <InputBase
                        id='accidentFatal3'
                        className='accidentFatal3'
                        name='accidentFatal3'
                        value={this.state.accidentFatal3}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                    <td>
                      <InputBase
                        id='accidentPers3'
                        className='accidentPers3'
                        name='accidentPers3'
                        value={this.state.accidentPers3}
                        onChange={this.onChange}
                        fullWidth={true}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='page2-content'>
          <div className='tab-headline-violations'>
            <h5> VIOLATIONS OF MOTOR VEHICLE LAWS OR ORDINANCES</h5>
            <p>Other than violations involving only parking</p>
          </div>
          <div className='row headline-violations'>
            <p>
              Please list all motor vehicle violations of which you were
              convicted or forfeited bond or collateral during the past 3 years.
              If none, check here:
            </p>
            <Checkbox
              name='violCheck'
              onChange={(e, state) => this.onChecked(e, state)}
              color='primary'
              className='expCheckBox'
            />
          </div>
          <div className='violat-table'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col' className='violatLoc'>
                    LOCATION
                  </th>
                  <th scope='col' className='violatDate'>
                    DATE
                  </th>
                  <th scope='col' className='violatCharge'>
                    CHARGE
                  </th>
                  <th scope='col' className='violatPenal'>
                    PENALTY
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <InputBase
                      id='violatLoc1'
                      className='violatLoc'
                      name='violatLoc1'
                      value={this.state.violatLoc1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
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
                      id='violatDate1'
                      className='violatDateInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.violatDate1}
                      name='violatDate1'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatCharge1'
                      className='violatCharge'
                      name='violatCharge1'
                      value={this.state.violatCharge1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatPenal1'
                      className='violatPenal'
                      name='violatPenal1'
                      value={this.state.violatPenal1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='violatLoc2'
                      className='violatLoc'
                      name='violatLoc2'
                      value={this.state.violatLoc2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
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
                      id='violatDate2'
                      className='violatDateInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.violatDate2}
                      name='violatDate2'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatCharge2'
                      className='violatCharge'
                      name='violatCharge2'
                      value={this.state.violatCharge2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatPenal2'
                      className='violatPenal'
                      name='violatPenal2'
                      value={this.state.violatPenal2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='violatLoc3'
                      className='violatLoc'
                      name='violatLoc3'
                      value={this.state.violatLoc3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
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
                      id='violatDate3'
                      className='violatDateInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.violatDate3}
                      name='violatDate3'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatCharge3'
                      className='violatCharge'
                      name='violatCharge3'
                      value={this.state.violatCharge3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatPenal3'
                      className='violatPenal'
                      name='violatPenal3'
                      value={this.state.violatPenal3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='violatLoс4'
                      className='violatLoc'
                      name='violatLoc4'
                      value={this.state.violatLoc4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
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
                      id='violatDate4'
                      className='violatDateInput'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.violatDate4}
                      name='violatDate4'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatCharge4'
                      className='violatCharge'
                      name='violatCharge4'
                      value={this.state.violatCharge4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='violatPenal4'
                      className='violatPenal'
                      name='violatPenal4'
                      value={this.state.violatPenal4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='license-questions'>
            <div className='row licFirstQ'>
              <p>
                Have you ever been denied a license, permit or privilege to
                operate a motor vehicle?
              </p>
              <FormControlLabel
                label='Yes'
                control={
                  <Checkbox
                    name='violCheckQYes1'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='expCheckBox'
                  />
                }
              />
              <FormControlLabel
                label='No'
                control={
                  <Checkbox
                    name='violCheckQNo1'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='expCheckBox'
                  />
                }
              />
            </div>
            <div className='row licSecQ'>
              <p>
                Has any license, permit or privilege ever been suspended or
                revoked?
              </p>
              <FormControlLabel
                label='Yes'
                control={
                  <Checkbox
                    name='violCheckQYes2'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='expCheckBox'
                  />
                }
              />
              <FormControlLabel
                label='No'
                control={
                  <Checkbox
                    name='violCheckQNo2'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='expCheckBox'
                  />
                }
              />
            </div>

            <h5>
              IF THE ANSWER TO THE ABOVE QUESTIONS IS YES, ATTACH A STATEMENT
              GIVING DETAILS.
            </h5>
          </div>
          <div className='epmloyment-headline'>
            <h5>PREVIOUS EMPLOYMENT RECORD</h5>
            <p>
              Dot Requires That Employment for at Least 3 Years and/or
              Commercial Driving Experience for the Past 10 Years Be Shown{' '}
              <br /> Please list the most recent employers first.
            </p>
          </div>
          {/* EMPLOYMENT RECORD table2 */}
          <div className='employment-table'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col' colSpan='2' className='th-empl'>
                    EMPLOYER
                  </th>
                  <th scope='col' colSpan='2' className='th-date'>
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplname1'
                      className='emplname'
                      name='emplname1'
                      placeholder='NAME'
                      value={this.state.emplname1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='emplDateFromTd'>
                    {' '}
                    <p className='emplDateFromP'>FROM</p>{' '}
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateFromM1'
                        className='emplDateFromM'
                        name='emplDateFromM1'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateFromM1}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateFromY1'
                        className='emplDateFromY'
                        name='emplDateFromY1'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateFromY1}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                  <td className='emplDateToTd'>
                    <p className='emplDateToP'>TO</p>
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateToM1'
                        className='emplDateToM'
                        name='emplDateToM1'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateToM1}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateToY1'
                        className='emplDateToY'
                        name='emplDateToY1'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateToY1}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='empladdress1'
                      className='empladdress'
                      name='empladdress1'
                      placeholder='ADDRESS'
                      value={this.state.empladdress1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplPosHeld1'
                      className='emplPosHeld'
                      name='emplPosHeld1'
                      placeholder='POSITION HELD'
                      value={this.state.emplPosHeld1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplcity1'
                      className='empladdress'
                      name='emplcity1'
                      placeholder='CITY'
                      value={this.state.emplcity1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>

                  <td>
                    <InputBase
                      id='emplSalary1'
                      className='emplSalary'
                      name='emplSalary1'
                      placeholder='SALARY/WAGE'
                      value={this.state.emplSalary1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplReasLeave1'
                      className='emplReasLeave'
                      name='emplReasLeave1'
                      placeholder='REASON FOR LEAVING'
                      value={this.state.emplReasLeave1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='emplconpers1'
                      className='emplconpers'
                      name='emplconpers1'
                      placeholder='CONTACT PERSON'
                      value={this.state.emplconpers1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplphone1'
                      className='emplphone'
                      name='emplphone1'
                      placeholder='PHONE NUMBER'
                      value={this.state.emplphone1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplDrug1'
                      className='emplDrug'
                      name='emplDrug1'
                      placeholder='Were you subject to the FMCSR DOT-alcohol and Drug testing?'
                      value={this.state.emplDrug1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* EMPLOYMENT RECORD table2 */}
          <div className='employment-table'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col' colSpan='2' className='th-empl'>
                    EMPLOYER
                  </th>
                  <th scope='col' colSpan='2' className='th-date'>
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplname2'
                      className='emplname'
                      name='emplname2'
                      placeholder='NAME'
                      value={this.state.emplname2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='emplDateFromTd'>
                    {' '}
                    <p className='emplDateFromP'>FROM</p>{' '}
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateFromM2'
                        className='emplDateFromM'
                        name='emplDateFromM2'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateFromM2}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateFromY2'
                        className='emplDateFromY'
                        name='emplDateFromY2'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateFromY2}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                  <td className='emplDateToTd'>
                    <p className='emplDateToP'>TO</p>
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateToM2'
                        className='emplDateToM'
                        name='emplDateToM2'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateToM2}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateToY2'
                        className='emplDateToY'
                        name='emplDateToY2'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateToY2}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='empladdress2'
                      className='empladdress'
                      name='empladdress2'
                      placeholder='ADDRESS'
                      value={this.state.empladdress2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplPosHeld2'
                      className='emplPosHeld'
                      name='emplPosHeld2'
                      placeholder='POSITION HELD'
                      value={this.state.emplPosHeld2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplcity2'
                      className='empladdress'
                      name='emplcity2'
                      placeholder='CITY'
                      value={this.state.emplcity2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>

                  <td>
                    <InputBase
                      id='emplSalary2'
                      className='emplSalary'
                      name='emplSalary2'
                      placeholder='SALARY/WAGE'
                      value={this.state.emplSalary2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplReasLeave2'
                      className='emplReasLeave'
                      name='emplReasLeave2'
                      placeholder='REASON FOR LEAVING'
                      value={this.state.emplReasLeave2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='emplconpers2'
                      className='emplconpers'
                      name='emplconpers2'
                      placeholder='CONTACT PERSON'
                      value={this.state.emplconpers2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplphone2'
                      className='emplphone'
                      name='emplphone2'
                      placeholder='PHONE NUMBER'
                      value={this.state.emplphone2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplDrug2'
                      className='emplDrug'
                      name='emplDrug2'
                      placeholder='Were you subject to the FMCSR DOT-alcohol and Drug testing?'
                      value={this.state.emplDrug2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* EMPLOYMENT RECORD table3 */}
          <div className='employment-table'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col' colSpan='2' className='th-empl'>
                    EMPLOYER
                  </th>
                  <th scope='col' colSpan='2' className='th-date'>
                    DATE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplname3'
                      className='emplname'
                      name='emplname3'
                      placeholder='NAME'
                      value={this.state.emplname3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td className='emplDateFromTd'>
                    {' '}
                    <p className='emplDateFromP'>FROM</p>{' '}
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateFromM3'
                        className='emplDateFromM'
                        name='emplDateFromM3'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateFromM3}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateFromY3'
                        className='emplDateFromY'
                        name='emplDateFromY3'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateFromY3}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                  <td className='emplDateToTd'>
                    <p className='emplDateToP'>TO</p>
                    <div className='datefromtwoinputs'>
                      <InputBase
                        id='emplDateToM3'
                        className='emplDateToM'
                        name='emplDateToM3'
                        placeholder='Month'
                        inputprops={{
                          maxLength: 2,
                        }}
                        value={this.state.emplDateToM3}
                        onChange={this.onChange}
                      />

                      <InputBase
                        id='emplDateToY3'
                        className='emplDateToY'
                        name='emplDateToY3'
                        placeholder='Year'
                        inputprops={{
                          maxLength: 4,
                        }}
                        value={this.state.emplDateToY3}
                        onChange={this.onChange}
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='empladdress3'
                      className='empladdress'
                      name='empladdress3'
                      placeholder='ADDRESS'
                      value={this.state.empladdress3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplPosHeld3'
                      className='emplPosHeld'
                      name='emplPosHeld3'
                      placeholder='POSITION HELD'
                      value={this.state.emplPosHeld3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <InputBase
                      id='emplcity3'
                      className='empladdress'
                      name='emplcity3'
                      placeholder='CITY'
                      value={this.state.emplcity3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>

                  <td>
                    <InputBase
                      id='emplSalary3'
                      className='emplSalary'
                      name='emplSalary3'
                      placeholder='SALARY/WAGE'
                      value={this.state.emplSalary3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplReasLeave3'
                      className='emplReasLeave'
                      name='emplReasLeave3'
                      placeholder='REASON FOR LEAVING'
                      value={this.state.emplReasLeave3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <InputBase
                      id='emplconpers3'
                      className='emplconpers'
                      name='emplconpers3'
                      placeholder='CONTACT PERSON'
                      value={this.state.emplconpers3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='emplphone3'
                      className='emplphone'
                      name='emplphone3'
                      placeholder='PHONE NUMBER'
                      value={this.state.emplphone3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td colSpan='2'>
                    <InputBase
                      id='emplDrug3'
                      className='emplDrug'
                      name='emplDrug3'
                      placeholder='Were you subject to the FMCSR DOT-alcohol and Drug testing?'
                      value={this.state.emplDrug3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='page2-sign'>
            <h5>TO BE READ AND SIGNED BY APPLICANT</h5>
            <p className='page2-sign-p'>
              This certifies that this application was completed by me, and that
              all entries on it and information in it are true and complete to
              the best of my knowledge. I authorize you to <br />
              make such investigations and Inquiries of my personal, employment,
              financial or medical history and other related matters as may be
              necessary in arriving at an employment <br /> decision.
              (Generally, inquiries regarding medical history will be made only
              if and after a conditional offer of employment has been extended)
              I hereby release employers from <br />
              all liability In responding to Inquiries and releasing infomnaUon
              In connection with my employment application.
            </p>

            <div className='signature-date'>
              <TextField
                label='Signature(Type your First and Last Name)'
                id='signature'
                className='mainSignature'
                value={this.state.mainSignature}
                name='mainSignature'
                onChange={this.onChange}
              />
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
                id='signDate'
                className='signDateInput'
                placeholder='M/D/Y'
                guide={true}
                value={this.state.signDate}
                name='signDate'
                onChange={this.onChange}
              />
            </div>
          </div>
        </div>
        <div className='page3-content'>
          <h5 className='alcDrug-headline'>Alcohol & Drug History</h5>
          <div className='row alcoDrug-ques1'>
            <p>
              Has the driver participated in the RANDOM controlled substances
              testing program for the previous 12 months?
            </p>
            <FormControlLabel
              label='Yes'
              control={
                <Checkbox
                  name='alcDrugCheckQYes1'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
            <FormControlLabel
              label='No'
              control={
                <Checkbox
                  name='alcDrugCheckQNo1'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
          </div>
          <p className='alcoDrug-semiText'>
            Plaese provide all of the documentation from the driver's past
            alcohol and drug testing results <br /> and documentation of
            participation in another/any drug testing program.
          </p>

          <div className='row alcoDrug-ques2'>
            <p>
              Has the above named driver had an alcoholic test with a result of
              0.04 alcohol concentration or greater?
            </p>
            <FormControlLabel
              label='Yes'
              control={
                <Checkbox
                  name='alcDrugCheckQYes2'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
            <FormControlLabel
              label='No'
              control={
                <Checkbox
                  name='alcDrugCheckQNo2'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
          </div>
          <div className='row alcoDrug-ques3'>
            <p>
              Has the above named driver verified positive for controlled
              substances test result?
            </p>
            <FormControlLabel
              label='Yes'
              control={
                <Checkbox
                  name='alcDrugCheckQYes3'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
            <FormControlLabel
              label='No'
              control={
                <Checkbox
                  name='alcDrugCheckQNo3'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
          </div>
          <div className='row alcoDrug-ques4'>
            <p>
              Has the above named driver refused a request test for alcohol or
              drugs during the past 12 months?
            </p>
            <FormControlLabel
              label='Yes'
              control={
                <Checkbox
                  name='alcDrugCheckQYes4'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
            <FormControlLabel
              label='No'
              control={
                <Checkbox
                  name='alcDrugCheckQNo4'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
          </div>
        </div>
        <div className='page7-content'>
          <h5 className='sertOfViolHeadline'>Certification of violations</h5>
          <div className='row sertOfViol'>
            <p>
              If you have not been convicted of forfeited bond or collateral on
              account of any violations, please check here:
            </p>
            <FormControlLabel
              control={
                <Checkbox
                  name='sertOfViolCheck'
                  onChange={(e, state) => this.onChecked(e, state)}
                  color='primary'
                  className='expCheckBox'
                />
              }
            />
          </div>
          <div className='sertOfViolTable'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th scope='col' className='sertOfViolTableTh1'>
                    DATE
                  </th>
                  <th scope='col' className='sertOfViolTableTh'>
                    OFFENSE
                  </th>
                  <th scope='col' className='sertOfViolTableTh'>
                    LOCATION
                  </th>
                  <th scope='col' className='sertOfViolTableTh4'>
                    TYPE OF VEHICLE OPERATED
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
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
                      id='sertOfViolTableDate1'
                      className='sertOfViolTableDate'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.sertOfViolTableDate1}
                      name='sertOfViolTableDate1'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableOffense1'
                      className='sertOfViolTableOffense1'
                      name='sertOfViolTableOffense1'
                      value={this.state.sertOfViolTableOffense1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableLoc1'
                      className='sertOfViolTableLoc1'
                      name='sertOfViolTableLoc1'
                      value={this.state.sertOfViolTableLoc1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableTypeOf1'
                      className='sertOfViolTableTypeOf'
                      name='sertOfViolTableTypeOf1'
                      value={this.state.sertOfViolTableTypeOf1}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                      id='sertOfViolTableDate2'
                      className='sertOfViolTableDate'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.sertOfViolTableDate2}
                      name='sertOfViolTableDate2'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableOffense2'
                      className='sertOfViolTableOffense2'
                      name='sertOfViolTableOffense2'
                      value={this.state.sertOfViolTableOffense2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableLoc2'
                      className='sertOfViolTableLoc2'
                      name='sertOfViolTableLoc2'
                      value={this.state.sertOfViolTableLoc2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableTypeOf2'
                      className='sertOfViolTableTypeOf2'
                      name='sertOfViolTableTypeOf2'
                      value={this.state.sertOfViolTableTypeOf2}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                      id='sertOfViolTableDate3'
                      className='sertOfViolTableDate'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.sertOfViolTableDate3}
                      name='sertOfViolTableDate3'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableOffense3'
                      className='sertOfViolTableOffense3'
                      name='sertOfViolTableOffense3'
                      value={this.state.sertOfViolTableOffense3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableLoc3'
                      className='sertOfViolTableLoc3'
                      name='sertOfViolTableLoc3'
                      value={this.state.sertOfViolTableLoc3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableTypeOf3'
                      className='sertOfViolTableTypeOf3'
                      name='sertOfViolTableTypeOf3'
                      value={this.state.sertOfViolTableTypeOf3}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                      id='sertOfViolTableDate4'
                      className='sertOfViolTableDate'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.sertOfViolTableDate4}
                      name='sertOfViolTableDate4'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableOffense4'
                      className='sertOfViolTableOffense4'
                      name='sertOfViolTableOffense4'
                      value={this.state.sertOfViolTableOffense4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableLoc4'
                      className='sertOfViolTableLoc4'
                      name='sertOfViolTableLoc4'
                      value={this.state.sertOfViolTableLoc4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableTypeOf4'
                      className='sertOfViolTableTypeOf4'
                      name='sertOfViolTableTypeOf4'
                      value={this.state.sertOfViolTableTypeOf4}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
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
                      id='sertOfViolTableDate5'
                      className='sertOfViolTableDate'
                      placeholder='M/D/Y'
                      guide={true}
                      value={this.state.sertOfViolTableDate5}
                      name='sertOfViolTableDate5'
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableOffense5'
                      className='sertOfViolTableOffense5'
                      name='sertOfViolTableOffense5'
                      value={this.state.sertOfViolTableOffense5}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableLoc5'
                      className='sertOfViolTableLoc5'
                      name='sertOfViolTableLoc5'
                      value={this.state.sertOfViolTableLoc5}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                  <td>
                    <InputBase
                      id='sertOfViolTableTypeOf5'
                      className='sertOfViolTableTypeOf5'
                      name='sertOfViolTableTypeOf5'
                      value={this.state.sertOfViolTableTypeOf5}
                      onChange={this.onChange}
                      fullWidth={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='cargoTrainingAcknow'>
          <div className='cargoTrainingHeadline'>
            <h5>Cargo Training acknowledgment</h5>
            <p>
              I have been trained and instructed on the regulations for
              inspection, tying down and securing cargo that went into effect
              January 1, 2004. <br /> The training included:{' '}
            </p>
          </div>
          <div className='cargo-check-boxes'>
            <div className='row insp-Cargo-Check'>
              <FormControlLabel
                label='Inspecting cargo'
                control={
                  <Checkbox
                    name='inspCargoCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='inspCargoCheck'
                  />
                }
              />
            </div>
            <div className='row gen-Sec-Cargo-Check'>
              <FormControlLabel
                label='General securing cargo standards'
                control={
                  <Checkbox
                    name='genSecCargoCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='genSecCargoCheck'
                  />
                }
              />
            </div>
            <div className='row perf-Crit-Check'>
              <FormControlLabel
                label='Performance criteria of securing cargo system'
                control={
                  <Checkbox
                    name='perfCritCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='perfCritCheck'
                  />
                }
              />
            </div>
            <div className='row standarts-Secu-Check'>
              <FormControlLabel
                label='Standards for securing cargo devices'
                control={
                  <Checkbox
                    name='standartsSecuCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='standartsSecuCheck'
                  />
                }
              />
            </div>
            <div className='row secu-Part-Check'>
              <FormControlLabel
                label='Securing particular articles of cargo'
                control={
                  <Checkbox
                    name='secuPartCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='secuPartCheck'
                  />
                }
              />
            </div>
            <div className='row determ-Work-Check'>
              <FormControlLabel
                label='Determining working load limits'
                control={
                  <Checkbox
                    name='determWorkCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='determWorkCheck'
                  />
                }
              />
            </div>
            <div className='row determ-Aggr-Check'>
              <FormControlLabel
                label='Determining aggregate working load limits'
                control={
                  <Checkbox
                    name='determAggrCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='determAggrCheck'
                  />
                }
              />
            </div>
            <div className='row determ-Min-Numb-Check'>
              <FormControlLabel
                label='Determining the minimum number of tie downs needed to secure cargo of different lengths and weight'
                control={
                  <Checkbox
                    name='determMinNumbCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='determMinNumbCheck'
                  />
                }
              />
            </div>
            <div className='row front-Struct-Check'>
              <FormControlLabel
                label='Front-end structure requirements'
                control={
                  <Checkbox
                    name='frontStructCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='frontStructCheck'
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className='receipt-drivers'>
          <div className='receipt-headline'>
            <h5>Receipt of driver's rights</h5>
          </div>
          <div className='receipt-checkboxes'>
            <div className='row receipt-acknow'>
              <FormControlLabel
                label='I acknowledge that Gergun Transportation INC has provided me with written instruction regarding my Rights defined in Part 391.23(i)-(j) of the Federal Motor Carrier Safety Regulations. I have reviewed these materials which include information on the following:'
                control={
                  <Checkbox
                    name='receiptAcknowCheck'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='receiptAcknow'
                  />
                }
              />
            </div>
            <div className='inner-checkboxes'>
              <div className='row receipt-review-info'>
                <FormControlLabel
                  label='Right to Review Information - I have the right to review the information provided by my previous DOT-regulated employer(s)'
                  control={
                    <Checkbox
                      name='reviewInfoCheck'
                      onChange={(e, state) => this.onChecked(e, state)}
                      color='primary'
                      className='reviewInfoCheck'
                    />
                  }
                />
              </div>
              <div className='row receipt-req-corr'>
                <FormControlLabel
                  label='Right to Request Corrections - I have the right to request corrections to information that my previous DOT-regulated employer(s) provides, which I believe contains errors'
                  control={
                    <Checkbox
                      name='requestCorrCheck'
                      onChange={(e, state) => this.onChecked(e, state)}
                      color='primary'
                      className='requestCorrCheck'
                    />
                  }
                />
              </div>
              <div className='row receipt-rebut-info'>
                <FormControlLabel
                  label='Right to Rebut Information - I have the right to rebut the information provided by my previous DOT-regulated employer(s)'
                  control={
                    <Checkbox
                      name='rebutInfoCheck'
                      onChange={(e, state) => this.onChecked(e, state)}
                      color='primary'
                      className='rebutInfoCheck'
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className='cdl-regul'>
          <div className='cdl-regul-headline'>
            <h5>Driver's Certificate of training on the cdl regulations</h5>
            <p>
              The Commercial Driver's License, regulations define offenses that
              if committed can cause a driver's license to be suspended,
              revoked, canceled or cause the driver to be disqualified from
              operating a commercial motor vehicle.
            </p>
            <p>
              I have been trained and instructed on the DOT regulations and
              penalties that I am subject to if convicted of any of the
              following offenses while operating a commercial or non-commercial
              motor vehicle.
            </p>
          </div>
          <div className='cdl-regul-checkboxs'>
            <div className='row '>
              <FormControlLabel
                label='Having an alcohol concentration of 0.04 or greater while operating a commercial vehicle'
                control={
                  <Checkbox
                    name='havingAlco'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='havingAlco'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Being under the influence of alcohol as by State law'
                control={
                  <Checkbox
                    name='beingUnderAlco'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='beingUnderAlco'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Being under the influence of a controlled substance'
                control={
                  <Checkbox
                    name='beingUnderCont'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='beingUnderCont'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Refusing to take an alcohol test as required by State law'
                control={
                  <Checkbox
                    name='refuseTakeAlco'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='refuseTakeAlco'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Leaving the scene of an accident'
                control={
                  <Checkbox
                    name='leaveScene'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='leaveScene'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Using a vehicle to commit a felony'
                control={
                  <Checkbox
                    name='useVenicle'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='useVenicle'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='1. Driving with a suspended, canceled or revoked CDL. 2.driving a commercial vehicle without a CDL'
                control={
                  <Checkbox
                    name='driveSusp'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='driveSusp'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='1. Speeding excessively. 2.Driving recklessly'
                control={
                  <Checkbox
                    name='speedExc'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='speedExc'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='1. Following too closely. 2.Driving a commercial vehicle without a proper class of commercial license'
                control={
                  <Checkbox
                    name='followClose'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='followClose'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Violating a traffic law arising in connection with a fatal accident'
                control={
                  <Checkbox
                    name='violatTraffic'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='violatTraffic'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Causing a fatality with a commercial vehicle'
                control={
                  <Checkbox
                    name='causeFatal'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='causeFatal'
                  />
                }
              />
            </div>
            <div className='row '>
              <FormControlLabel
                label='Making improper or erratic lane changes'
                control={
                  <Checkbox
                    name='makingImprop'
                    onChange={(e, state) => this.onChecked(e, state)}
                    color='primary'
                    className='makingImprop'
                  />
                }
              />
            </div>
          </div>
        </div>
        <div className='emergency-form'>
          <div className='emergency-form-headline'>
            <h5>employee emergency contact form</h5>
          </div>
          <div className='emergency-form-main'>
            <div className='em-name-row row'>
              <TextField
                label='Name'
                id='em-main-name'
                className='em-main-name'
                name='emMainName'
                value={this.state.emMainName}
                onChange={this.onChange}
              />
            </div>
            <p className='em-p-title'>Personal Contact Info:</p>
            <TextField
              label='Home Address'
              id='em-main-addr'
              className='em-main-addr'
              name='emMainHomeAddr'
              value={this.state.emMainHomeAddr}
              onChange={this.onChange}
            />
            <TextField
              label='City, State, ZIP'
              id='em-main-csz'
              className='em-main-csz'
              name='emMainCsz'
              value={this.state.emMainCsz}
              onChange={this.onChange}
            />
            <div className='em-tel-row row'>
              <TextField
                label='Home Telephone #'
                id='em-main-homet'
                className='em-main-homet'
                name='emMainHomeTel'
                value={this.state.emMainHomeTel}
                onChange={this.onChange}
              />
              <TextField
                label='Cell #'
                id='em-main-cell'
                className='em-main-cell'
                name='emMainCell'
                value={this.state.emMailCell}
                onChange={this.onChange}
              />
            </div>
            <p className='em-p-title'>Emergency Contact Info:</p>
            <div className='em-emer-cont1'>
              <div className='emer-name1 row'>
                <TextField
                  label='(1) Name'
                  id='emer-main-name1'
                  className='emer-main-name1'
                  name='emerMainName1'
                  value={this.state.emerMainName1}
                  onChange={this.onChange}
                />
                <TextField
                  label='Relationship'
                  id='emer-main-rel1'
                  className='emer-main-rel1'
                  name='emerMainRel1'
                  value={this.state.emerMainRel1}
                  onChange={this.onChange}
                />
              </div>
              <TextField
                label='Address'
                id='emer-main-addr1'
                className='emer-main-addr1'
                name='emMainAddr1'
                value={this.state.emMainAddr1}
                onChange={this.onChange}
              />
              <TextField
                label='City, State, ZIP'
                id='emer-main-csz1'
                className='emer-main-csz1'
                name='emerMainCsz1'
                value={this.state.emerMainCsz1}
                onChange={this.onChange}
              />
              <div className='emer-tel1 row'>
                <TextField
                  label='Home Telephone #'
                  id='emer-home-tel1'
                  className='emer-home-tel1'
                  name='emerHomeTel1'
                  value={this.state.emerHomeTel1}
                  onChange={this.onChange}
                />
                <TextField
                  label='Cell #'
                  id='emer-cell1'
                  className='emer-cell1'
                  name='emerCell1'
                  value={this.state.emerCell1}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className='em-emer-cont2'>
              <div className='emer-name2 row'>
                <TextField
                  label='(2) Name'
                  id='emer-main-name2'
                  className='emer-main-name2'
                  name='emerMainName2'
                  value={this.state.emerMainName2}
                  onChange={this.onChange}
                />
                <TextField
                  label='Relationship'
                  id='emer-main-rel2'
                  className='emer-main-rel2'
                  name='emerMainRel2'
                  value={this.state.emerMainRel2}
                  onChange={this.onChange}
                />
              </div>
              <TextField
                label='Address'
                id='emer-main-addr2'
                className='emer-main-addr2'
                name='emMainAddr2'
                value={this.state.emMainAddr2}
                onChange={this.onChange}
              />
              <TextField
                label='City, State, ZIP'
                id='emer-main-csz2'
                className='emer-main-csz2'
                name='emerMainCsz2'
                value={this.state.emerMainCsz2}
                onChange={this.onChange}
              />
              <div className='emer-tel2 row'>
                <TextField
                  label='Home Telephone #'
                  id='emer-home-tel2'
                  className='emer-home-tel2'
                  name='emerHomeTel2'
                  value={this.state.emerHomeTel2}
                  onChange={this.onChange}
                />
                <TextField
                  label='Cell #'
                  id='emer-cell2'
                  className='emer-cell2'
                  name='emerCell2'
                  value={this.state.emerCell2}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='MainBtnDiv'>
          <span
            onClick={() => this.generatePdf()}
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
      </div> //main div
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

export default DriverApp;
