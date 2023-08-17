import React from 'react';
import {Routes, Route} from 'react-router';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import './styles.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </div>
  );
};

export default App;
