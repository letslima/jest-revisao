const { toUpperCaseString, firstLetter, concatStrings } = require('./outroarq');
jest.mock('./outroarq.js');

describe('Exercício 4 - primeira função', () => {
  test('Testa se a função vai retornar em caixa baixa', () => {
    toUpperCaseString.mockImplementation((string) => {
      return string.toLowerCase();
    })
    expect(toUpperCaseString('STRING')).toBe('string');
  })
})

describe('Exercício 4 - segunda função', () => {
  test('Testa se a função vai retornar a última letra', () => {
    firstLetter.mockImplementation((string) => {
      const length = string.length -1;
      return string.charAt(length);
    })
    expect(firstLetter('string')).toBe('g');
  })
})

describe('Exercício 4 - terceira função', () => {
  test('Testa se a função concatena as 3 strings', () => {
    concatStrings.mockImplementation((...string) => {
      return string.join(' ');
    })
    expect(concatStrings('vai', 'que', 'vai')).toBe('vai que vai');
  })
})

