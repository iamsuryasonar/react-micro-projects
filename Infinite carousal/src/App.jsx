import React, { useEffect } from 'react';
import './index.css';
import { cardDetails } from './cardDetails';
import Slider from './components/slider';

export default function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Slider data={cardDetails} />
      </div>
    </div>
  );
}
