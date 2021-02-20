const { toUpperCaseString } = require('./outroarq');
const objFunctions = require('./outroarq');

describe('Exercício 5 - primeira função', () => {
  test('Testa se a função vai retornar em caixa baixa', () => {
    const upperFunction = jest.spyOn(objFunctions, 'toUpperCaseString');
    upperFunction.mockImplementation((string) => {
      return string.toLowerCase();
    })
    expect(upperFunction('STRING')).toBe('string');
  })
  test('Testa se a função voltou a forma original', () => {
    objFunctions.toUpperCaseString.mockRestore();
    expect(toUpperCaseString('string')).toBe('STRING');
  })
})