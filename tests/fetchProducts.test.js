require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Verifica se fetchProducts é uma função', () =>  {
    expect(typeof fetchProducts).toBe('function');
  });
  it('Verifica se fetch foi chamado', async () => {
   await fetchProducts('computador');
   expect(fetch).toHaveBeenCalled()
  });
  it('Verifica se fetch foi chamado com endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
   });
   it('Testa se o objeto é igual ao esperado', async () => {
    const computador = await fetchProducts('computador');
    expect(computador).toMatchObject(computadorSearch.results)
});
it('Testa se ao chamar o fetchProducts sem argumento retorna um erro', async () => {
  const fetchSemArgumento = await fetchProducts();
  const erro = new Error('You must provide an url');
  expect(fetchSemArgumento).toEqual(erro);  
});
});

 /*  Recebi ajuda do aluno Sandro Bistene Turma 19-C na semana OnTrack */
