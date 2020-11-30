import './css/headline.css';

const headLine = () => {
  const element = document.createElement('h1');
  element.innerText = '... just YUMMY';
  element.classList.add('headline');
  return element;
};

export default headLine;
