import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Laskin from './Laskin';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Laskin />
  </React.StrictMode>
);

