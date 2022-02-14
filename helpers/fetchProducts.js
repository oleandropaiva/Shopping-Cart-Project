const fetchProducts = async (item) => {
  try { 
      const mercadoLivre = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
      const response = await fetch(mercadoLivre);
      const object = await response.json();
      return object.results;
    } catch (error) {
      return new Error('You must provide an url');
  }
  };
  console.log(fetchProducts('computador'));
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchProducts,
    };
  }
