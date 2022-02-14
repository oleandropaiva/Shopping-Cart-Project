const saveCartItems = (imput) => {
  localStorage.setItem('cartItems', imput);  
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
