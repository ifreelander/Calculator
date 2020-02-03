import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';

const Calculator = () => {
  const Calculator = styled.div`
    border: 3px solid #a52a2a;
    width: 700px;
    height: 1050px;
    padding: 2%;
    margin: 20px auto;
    background-color: #fdf5e6;
  `;

  const Display = styled.div`
    font-size: 6em;
    border: 1px;
    padding: 2px;
    width: 600px;
    height: 180px;
    margin: 5px auto;
    background-color: #faebd7;
  `;

  const Keypad = styled.div`
    border: 1px solid brown;
    padding: 1px auto;
    width: 600px;
    height: 820px;
    margin: 1px auto;
  `;

  const Button = styled.button`
    font-size: 3em;
    margin: 21px;
    width: 110px;
    height: 90px;
    padding: 20px auto;
    border: 2px solid brown;
    background-color: #d2b48c;
  `;

  const BigButton = styled.button`
    font-size: 3em;
    width: 100px;
    height: 170px;
    padding: 20px auto;
    background-color: orange;
  `;

  const [currentNumber, setCurrentNumber] = useState('');
  const [total, setTotal] = useState(0);
  const [lastOperation, setLastOperation] = useState('start');

  const handleOperation = currentOperation => {
    debugger;
    if (lastOperation === 'start') {
      setTotal(parseInt(currentNumber));
    }
    if (lastOperation === 'plus') {
      setTotal(parseInt(total) + parseInt(currentNumber));
    }
    if (lastOperation === 'multiply') {
      setTotal(parseInt(total) * parseInt(currentNumber));
    }

    if (lastOperation === 'minus') {
      setTotal(parseInt(total) - parseInt(currentNumber));
    }

    if (lastOperation === 'divide') {
      setTotal(parseInt(total) / parseInt(currentNumber));
    }

    setCurrentNumber('');
    setLastOperation(currentOperation);

    if (currentOperation === 'clear') {
      setCurrentNumber('');
      setTotal(0);
    }
  };

  const handleNumber = e => {
    setCurrentNumber(currentNumber + e);
  };

  return (
    <div>
      <Calculator>
        <Display>{total}</Display>
        <Keypad>
          <Button
            onClick={e => {
              handleNumber(7);
            }}
          >
            7
          </Button>
          <Button
            onClick={e => {
              handleNumber(8);
            }}
          >
            8
          </Button>
          <Button
            onClick={e => {
              handleNumber(9);
            }}
          >
            9
          </Button>
          <Button
            onClick={e => {
              handleNumber(4);
            }}
          >
            4
          </Button>
          <Button
            onClick={e => {
              handleNumber(5);
            }}
          >
            5
          </Button>
          <Button
            onClick={e => {
              handleNumber(6);
            }}
          >
            6
          </Button>
          <Button
            onClick={e => {
              handleNumber(1);
            }}
          >
            1
          </Button>
          <Button
            onClick={e => {
              handleNumber(2);
            }}
          >
            2
          </Button>
          <Button
            onClick={e => {
              handleNumber(3);
            }}
          >
            3
          </Button>
          <Button
            onClick={e => {
              handleNumber(0);
            }}
          >
            0
          </Button>
          <Button
            onClick={e => {
              handleNumber();
            }}
          >
            .
          </Button>
          <Button
            onClick={e => {
              handleOperation('eval');
            }}
          >
            =
          </Button>
          <Button
            onClick={e => {
              handleOperation('clear');
            }}
          >
            C
          </Button>
          <Button
            onClick={e => {
              handleOperation('multiply');
            }}
          >
            x
          </Button>
          <Button
            onClick={e => {
              handleOperation('minus');
            }}
          >
            -
          </Button>
          <BigButton
            onClick={e => {
              handleOperation('plus');
            }}
          >
            +
          </BigButton>
          <Button
            onClick={e => {
              handleOperation('divide');
            }}
          >
            ÷
          </Button>
        </Keypad>
      </Calculator>
    </div>
  );
};

export default Calculator;
