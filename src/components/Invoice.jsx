import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

import '../App.css';

class Invoice extends Component {
  state = {
    name: '',
    receiptId: 0,
    price1: 0,
    price2: 0,
  };

  handleChange = ({ target: { value, name } }) =>
    this.setState({ [name]: value });

  createAndDownloadPdf = () => {
    axios
      .post('/create-pdf', this.state)
      .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
      .then((res) => {
        const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
        saveAs(pdfBlob, 'newPDF.pdf');
      });
  };

  render() {
    return (
      <div className='App'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Invoice ID'
          name='receiptId'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Total'
          name='price1'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Ins Coverage Amt'
          name='price2'
          onChange={this.handleChange}
        />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default Invoice;
