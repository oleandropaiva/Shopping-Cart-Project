const getSavedCartItems = () => localStorage.getItem('carItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

 /*  Recebi ajuda do aluno Sandro Bistene Turma 19-C na semana OnTrack */