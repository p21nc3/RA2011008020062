import React from 'react';
import './TrainCard.css';

function TrainCard({ train, onClick }) {
  return (
    <div className="train-card">
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Price: {train.price}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <button onClick={() => onClick(train.id)}>View Details</button>
    </div>
  );
}

export default TrainCard;
