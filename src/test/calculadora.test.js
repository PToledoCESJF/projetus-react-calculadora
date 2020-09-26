import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from '../calculadora';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Calculadora', () => {

  test('Deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Calculadora />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('Deve limpar o campo de números', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));

// BUG >> O método limpar não esta funcionando
    fireEvent.click(getByText('C'));
    expect(getByTestId('txtNumeros')).toHaveValue('2');
  });

  test('Deve realizar a soma de dois números corretamente', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5');
  });

  test('Deve realizar a subtração de dois números corretamente', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('1'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('1');
  });

  test('Deve realizar a multiplicação de dois números corretamente', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('*'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('6');
  });

  test('Deve realizar a divisão de dois números corretamente', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('/'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('1');
  });

  test('Deve considerar o (.) separador de decimais corretamente', () => {
    const { getByTestId, getByText } = render(<Calculadora />);
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('.'));
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('3'));
    fireEvent.click(getByText('='));
    expect(getByTestId('txtNumeros')).toHaveValue('5.5');
  });
});
