import './css/menu-item.css';

const menuItem = (image, dish, desc, price) => {
  const card = document.createElement('div');
  const cardLeft = document.createElement('div');
  card.classList.add('flex', 'menu-card');
  cardLeft.classList.add('flex');
  const img = document.createElement('img');
  img.src = image;
  img.classList.add('menu-item-img');
  const details = document.createElement('div');
  details.classList.add('menu-item-details');
  const dishName = document.createElement('h3');
  dishName.innerText = dish;
  const description = document.createElement('p');
  description.innerText = desc;
  const cost = document.createElement('h2');
  cost.innerText = price;
  details.appendChild(dishName);
  details.appendChild(description);
  cardLeft.appendChild(img);
  cardLeft.appendChild(details);
  card.appendChild(cardLeft);
  card.appendChild(cost);
  return card;
};

export default menuItem;
