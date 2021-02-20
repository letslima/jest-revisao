const dogAPI = require('./dogpic');

describe('Exercício 6', () => {
  const dogpic = jest.spyOn(dogAPI, 'fetchURL');
  afterEach(dogpic.mockReset);
  test('Testa se a requisição obteve sucesso', async () => {
    dogpic.mockResolvedValue('request sucess');
    expect(dogpic()).resolves.toBe('request sucess');
  });
  test('Testa se a função foi chamada e quantas vezes foi chamada', async () => {
    dogpic();
    expect(dogpic).toHaveBeenCalled();
    expect(dogpic).toHaveBeenCalledTimes(1);
  });
  test('Testa se a requisição falhou', async () => {
    dogpic.mockRejectedValue('request failed');
    expect(dogpic()).rejects.toBe('request failed');
  });
})
