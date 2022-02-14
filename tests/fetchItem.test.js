require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Verifica se fetchItem é uma função', () =>  {
    expect(typeof fetchItem).toBe('function');
  });
  it('Verifica se fetch foi chamado', async () => {
   await fetchItem('MLB1615760527');
   expect(fetch).toHaveBeenCalled()
  });
  it('Verifica se fetch foi chamado com endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
   });
   it('Testa se o objeto é igual ao esperado', async () => {
    const computador = await fetchItem('MLB1615760527');
    expect(computador).toMatchObject(item)
});
  it('Testa se ao chamar o fetchProducts sem argumento retorna um erro', async () => {
    const fetchSemArgumento = await fetchItem();
    const erro = new Error('You must provide an url');
    expect(fetchSemArgumento).toEqual(erro);
})
});
