const saveCartItems = (imput) => {
  localStorage.setItem('carItems', imput);  
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
