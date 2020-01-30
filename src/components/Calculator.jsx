import React, { useState } from 'react';
import styled from 'styled-components';
//import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {

  const Calculator = styled.div`
  border: 2px solid red ;
  width: 700px;
  height: 1000px;
  padding: 1%;
  margin: 10px auto;
  `;

  const Display = styled.div`
  border: 2px solid green ;
  padding: 1%;
  width: 600px;
  height: 200px;
  margin: 10px auto;
  `; 

  const Keypad = styled.div`
  border: 2px solid blue ;
  padding: 1%;
  width: 600px;
  height: 700px;
  margin: 10px auto;
  `;
  
  const Button = styled.button`
  font-size: 2em;
  margin: 1em;
  padding: 0.20em 1em;
  border: 3px solid palevioletred;
  border-radius: 3px;
  `;

  
  const [currentNumber, setCurrentNumber] = useState("");
  const [total, setTotal] = useState(0)
  const [currentOperation, setCurrentOperation] = useState('plus')
     
  const handleOperation = (e) => { 
    //debugger
    if (currentOperation === 'plus'){
      setTotal(parseInt(total) + parseInt(currentNumber))
      setCurrentNumber("")
      setCurrentOperation(e)
      
     
    }
    if (currentOperation === 'multiply'){
      setTotal(parseInt(total) * parseInt(currentNumber))
      setCurrentNumber("")
      setCurrentOperation(e)
    }

    if (currentOperation === 'minus'){
      setTotal(parseInt(total) - parseInt(currentNumber))
      setCurrentNumber("")
      setCurrentOperation(e)
    }

    if (e === 'eval'){
      //setTotal(parseInt(total))
      
      
    }
        
  }

  const handleNumber = (e) => {
    setCurrentNumber(currentNumber + e)
  }
 
  return (
    <div><Calculator><Display></Display><Keypad>
      
      <Button onClick={e => {handleNumber(1)}}>1</Button>
      <Button onClick={e => {handleNumber(2)}}>2</Button>
      <Button onClick={e => {handleNumber(3)}}>3</Button>
      <Button onClick={e => {handleNumber(4)}}>4</Button>
      <Button onClick={e => {handleNumber(5)}}>5</Button>
      <Button onClick={e => {handleNumber(6)}}>6</Button>
      <Button onClick={e => {handleNumber(7)}}>7</Button>
      <Button onClick={e => {handleNumber(8)}}>8</Button>
      <Button onClick={e => {handleNumber(9)}}>9</Button>
      <Button onClick={e => {handleNumber(0)}}>0</Button>
      <Button>.</Button>
      <Button onClick={e => {handleOperation("plus")}}>+</Button>
      <Button onClick={e => {handleOperation("multiply")}}>x</Button>
      <Button onClick={e => {handleOperation("minus")}}>-</Button>
      <Button>÷</Button>
      <Button onClick={e => {handleOperation("eval")}}>=</Button>
      <Button>C</Button>
    
    </Keypad>
    </Calculator>
    </div>
  
  )
  
};

export default Calculator;