const saveCartItems = (imput) => {
  localStorage.setItem('carItems', imput);  
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

 /*  Recebi ajuda do aluno Sandro Bistene Turma 19-C na semana OnTrack */