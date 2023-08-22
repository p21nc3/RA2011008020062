import React from 'react';
import TrainCard from './TrainCard';
import './AllTrainsPage.css';

function TrainList({ trains, onViewDetails }) {
  return (
    <div>
      <h2>All Trains</h2>
      {trains.map(train => (
        <TrainCard key={train.id} train={train} onClick={onViewDetails} />
      ))}
    </div>
  );
}

export default TrainList;
