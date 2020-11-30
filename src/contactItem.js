import './css/contact-item.css';

const contactItem = (icon, desc) => {
  const card = document.createElement('div');
  card.classList.add('flex', 'contact-card');
  const img = document.createElement('i');
  img.classList.add('fa', icon, 'fa-3x', 'icon');
  const description = document.createElement('p');
  description.innerText = desc;
  card.appendChild(img);
  card.appendChild(description);
  return card;
};

export default contactItem;
