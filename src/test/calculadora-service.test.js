import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from '../service/calculadora-service';

describe('Calculadora Service', () => {
    const [calcular, SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO] = CalculadoraService();
    
    test('Deve garantir que 1 + 4 = 5', () => {
        let soma = calcular(1, 4, SOMA);
        expect(soma).toEqual(5);
    });

    test('Deve garantir que 1 - 4 = -3', () => {
        let soma = calcular(1, 4, SUBTRACAO);
        expect(soma).toEqual(-3);
    });

    test('Deve garantir que 2 * 4 = 8', () => {
        let soma = calcular(2, 4, MULTIPLICACAO);
        expect(soma).toEqual(8);
    });

    test('Deve garantir que 1 / 4 = 0.25', () => {
        let soma = calcular(1, 4, DIVISAO);
        expect(soma).toEqual(0.25);
    });

    test('Deve retornar 0 para operação inválida', () => {
        let soma = calcular(1, 4, '%');
        expect(soma).toEqual(0);
    });

});
