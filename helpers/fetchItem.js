const fetchItem = (async (item) => {
  try { 
      const mercadoLivre = `https://api.mercadolibre.com/items/${item}`;
      const response = await fetch(mercadoLivre);
      const object = await response.json();
      return object;
    } catch (error) {
      return new Error('You must provide an url');
  }
  });
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }

 /*  Recebi ajuda do aluno Sandro Bistene Turma 19-C na semana OnTrack */