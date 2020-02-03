import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Calculator from './components/Calculator';
//import Display from './components/Display';

const App = () => {
  return (
    <div>
      <h1>Simple Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
