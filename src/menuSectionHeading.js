import './css/menu-heading.css';

const menuSectionHeading = (text) => {
  const heading = document.createElement('h2');
  heading.classList.add('menu-heading');
  heading.innerText = text;
  return heading;
};

export default menuSectionHeading;
