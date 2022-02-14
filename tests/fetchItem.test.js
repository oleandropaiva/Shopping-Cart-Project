require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchProducts é uma função', () =>  {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se fetch foi chamado', async () => {
   await fetchProducts('MLB1615760527');
   expect(fetch).toHaveBeenCalled()
  });
  it('Verifica se fetch foi chamado com endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
   });
   it('Testa se o objeto é igual ao esperado', async () => {
    const computador = await fetchProducts('computador');
    expect(computador).toMatchObject(item)
});
it('Testa se ao chamar o fetchProducts sem argumento retorna um erro', async () => {
  const fetchSemArgumento = await fetchProducts();
  const erro = new Error('You must provide an url');
  expect(fetchSemArgumento).toEqual(erro);  
});
});
