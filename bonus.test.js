const fetchJoke = require('./bonus.js');

describe('Testa a função', () => {
  const apiJoke = jest.spyOn(fetchJoke, 'fetchJoke');
  test('Testa a chamada da API', async () => {
    const objJoke = {
      'id': '7h3oGtrOfxc',
      'joke': 'Whiteboards ... are remarkable.',
      'status': 200
    };
    apiJoke.mockResolvedValue(objJoke);
    expect(apiJoke()).resolves.toEqual(objJoke);
    expect(apiJoke).toHaveBeenCalled();
    expect(apiJoke).toHaveBeenCalledTimes(1);
  })
})
