import React from 'react';
import './SingleTrainPage.css';

function TrainDetail({ train, onBack }) {
  return (
    <div className='train-detail-card'>
      <h2>Train Details</h2>
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <button onClick={onBack}>Back to All Trains</button>
    </div>
  );
}

export default TrainDetail;
