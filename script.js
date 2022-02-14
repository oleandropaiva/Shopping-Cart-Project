const saveCartItems = require('./helpers/saveCartItems');

const buttonAdd = document.getElementsByClassName('item__add');
const listCart = document.querySelector('.cart__items');
const emptyCart = document.querySelector('.empty-cart');

emptyCart.addEventListener('click', () => {
  listCart.innerHTML = '';
});

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  saveCartItems(listCart.innerHTML);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function addCart(event) {
  const clickButton = event.target.parentNode.firstChild.innerText;
  const item = await fetchItem(clickButton);
  listCart.appendChild(createCartItemElement(item));
  saveCartItems(listCart.innerHTML);
}

function addEventBtn() {
  for (let index = 0; index < buttonAdd.length; index += 1) {
    buttonAdd[index].addEventListener('click', addCart);    
  }
}
window.onload = async () => {
  const lista = document.getElementById('items');
  const products = await fetchProducts('computador');
  products.forEach((element) => {
    lista.appendChild(createProductItemElement(element));
  });
  addEventBtn();
 };
