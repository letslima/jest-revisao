const randomNumber = require('./revisaojest');

describe('Exercício 1', () => {
  const randomValue = jest.fn(randomNumber);
  test('Testa o retorno da função', () => {
    randomValue.mockReturnValue(10);
    expect(randomValue()).toBe(10);
  })
  test('Testa se a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalled();
  })
  test('Testa quantas vezes a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalledTimes(1);
  })
})

describe('Exercício 2 - altera a funcionalidade', () => {
  const randomValue = jest.fn(randomNumber);
  randomValue.mockImplementationOnce((a, b) => a / b);
  test('Testa se a função faz o cálculo de divisão', () => {
    expect(randomValue(4, 2)).toBe(2);
  })
  test('Testa se a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalled();
  })
  test('Testa quantas vezes a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalledTimes(1);
  })
})

describe('Exercício 3', () => {
  const randomValue = jest.fn(randomNumber);
  randomValue.mockImplementation((a, b, c) => a * b * c);
  test('Testa se a função faz o cálculo de multiplicação', () => {
    expect(randomValue(2, 4, 6)).toBe(48);
  })
  test('Testa se a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalled();
  })
  test('Testa quantas vezes a função foi chamada', () => {
    expect(randomValue).toHaveBeenCalledTimes(1);
  })
  test('Testa se a função retorna o dobro do parâmetro', () => {
    randomValue.mockReset();
    randomValue.mockImplementation((a) => a + a);
    expect(randomValue(2)).toBe(4);
    expect(randomValue(3)).toBe(6);
  })
})
