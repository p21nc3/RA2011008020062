import React, { useState } from 'react';
import TrainList from './AllTrainsPage';
import TrainDetail from './SingleTrainPage';
import './App.css';

const dummyTrains = [
  { id: '1', name: 'Rajdhani Express', departureTime: '08:00 AM', price: 1500, seatAvailability: 50 },
  { id: '2', name: 'Shatabdi Express', departureTime: '09:30 AM', price: 1000, seatAvailability: 30 },
  { id: '3', name: 'Duronto Express', departureTime: '11:00 AM', price: 1200, seatAvailability: 40 },
  { id: '4', name: 'Garib Rath', departureTime: '01:00 PM', price: 800, seatAvailability: 60 },
  { id: '5', name: 'Jan Shatabdi', departureTime: '03:30 PM', price: 900, seatAvailability: 25 },
  { id: '6', name: 'Kolkata Mail', departureTime: '06:00 PM', price: 700, seatAvailability: 70 },
];

function App() {
  const [currentPage, setCurrentPage] = useState('allTrains');
  const [selectedTrain, setSelectedTrain] = useState(null);

  const handleViewDetails = trainId => {
    const train = dummyTrains.find(train => train.id === trainId);
    setSelectedTrain(train);
    setCurrentPage('singleTrain');
  };

  const handleBack = () => {
    setSelectedTrain(null);
    setCurrentPage('allTrains');
  };

  return (
    <div className="app">
      <header>
        <h1>John Doe Railways</h1>
      </header>
      <marquee>Book Your Train Tickets Online</marquee>
      {currentPage === 'allTrains' && <TrainList trains={dummyTrains} onViewDetails={handleViewDetails} />}
      {currentPage === 'singleTrain' && <TrainDetail train={selectedTrain} onBack={handleBack} />}
    </div>
  );
}

export default App;
