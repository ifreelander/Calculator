import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import React from 'react';

const renderWithExtras = component => {
  const root = render(<App />);
  return { ...root, getButtonByText: text => root.getByText(text, { selector: 'button' }) };
};

test('One plus Two should be equal to Three', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('+'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('3');

  //root.debug();
});

test('One minus One should be equal to Zero', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('-'));
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('0');

  //root.debug();
});

test('Two multiply by Four should be equal to Eight', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('x'));
  fireEvent.click(root.getButtonByText('4'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('8');
});

test('Eight divided by Four should be equal to Two', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('8'));
  fireEvent.click(root.getButtonByText('÷'));
  fireEvent.click(root.getButtonByText('4'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('2');
});

test('Two multiply by Four plus three should be equal to Eleven', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('x'));
  fireEvent.click(root.getButtonByText('4'));
  fireEvent.click(root.getButtonByText('+'));
  fireEvent.click(root.getButtonByText('3'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('11');
});

test('Two multiply by Three minus One should be equal to Five', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('x'));
  fireEvent.click(root.getButtonByText('3'));
  fireEvent.click(root.getButtonByText('-'));
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('5');
});

test('Eight divide by Two should be equal to Four', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('8'));
  fireEvent.click(root.getButtonByText('÷'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('4');
});

test('Ten divided by Two should be equal to Five', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('0'));
  fireEvent.click(root.getButtonByText('÷'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('5');
});

test('Ten divided by Two minus Three multiply by Two should be equal to Four', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('0'));
  fireEvent.click(root.getButtonByText('÷'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('-'));
  fireEvent.click(root.getButtonByText('3'));
  fireEvent.click(root.getButtonByText('x'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('4');
});

test('Seven divided by Two Clear Eight minus Nine should be equal to Minues One', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('7'));
  fireEvent.click(root.getButtonByText('÷'));
  fireEvent.click(root.getButtonByText('2'));
  fireEvent.click(root.getButtonByText('C'));
  fireEvent.click(root.getButtonByText('8'));
  fireEvent.click(root.getButtonByText('-'));
  fireEvent.click(root.getButtonByText('9'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('-1');
});

test('As the default is set to Zero, plus one should return 1', () => {
  const root = renderWithExtras(<App />);
  fireEvent.click(root.getButtonByText('+'));
  fireEvent.click(root.getButtonByText('1'));
  fireEvent.click(root.getButtonByText('='));
  expect(root.getByTestId('display')).toHaveTextContent('1');
});
