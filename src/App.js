import React, { useState } from 'react';
import styled from 'styled-components';
import Calculator from './components/Calculator';
import './App.css';
import Flexbox from 'flexbox-react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: cornflowerblue;
`;

const Header = styled.h1`
  font-size: 32px;
  margin: 20px;
`;

const App = () => {
  return (
    <Container>
      <Header>Simple Calculator</Header>
      <Calculator />
    </Container>
  );
};

export default App;
