import React from 'react';

// Import the components
import Receipt from './components/Receipt';

// import axios from 'axios';
// import { saveAs } from 'file-saver';
// import { render } from '@testing-library/react';

import './App.css';
import Invoice from './components/Invoice';

export default function App() {
  return (
    <div className='App'>
      <h1>Reciept</h1>
      <Receipt />
      <h1>Invoice</h1>
      <Invoice />
    </div>
  );
}
