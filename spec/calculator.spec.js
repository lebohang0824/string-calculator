const { StringCalculator } = require('../src/calculator.js');

const calculator = new StringCalculator();

describe('String calculator', () => {

	it('Should return 0', () => {
		expect(calculator.add('')).toEqual(0);
	});

	it('Should return 1', () => {
		expect(calculator.add('1')).toEqual(1);
	});

	it('Should return 3', () => {
		expect(calculator.add('1,2')).toEqual(3);
	});

	it('Should return 6', () => {
		expect(calculator.add('1\n2,3')).toEqual(6);
	});

	it('Should return 3', () => {
		expect(calculator.add('//;\n1;2')).toEqual(3);
	});

	it('Negative number will throw an exception', () => {
		expect(calculator.add('-1, 1')).toEqual(2);
	});

	it('Negative numbers will throw an exceptions', () => {
		expect(calculator.add('-1, -8')).toEqual(9);
	});

	it('Should return 2', () => {
		expect(calculator.add('2+1001')).toEqual(2);
	});

	it('Should return 6', () => {
		expect(calculator.add('//[***]\n1***2***3')).toEqual(6);
	});

	it('Should return 6', () => {
		expect(calculator.add('//[*][%]\n1*2%3')).toEqual(6);
	});

	it('Should return 6', () => {
		expect(calculator.add('//[**][%%]\n1**2%%3')).toEqual(6);
	});

});