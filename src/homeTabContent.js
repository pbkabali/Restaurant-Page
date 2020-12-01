import headLine from './headLine';
import tagLine from './tagLine';
import './css/tab-content.css';

const homeTab = () => {
  const tab = document.createElement('div');
  tab.classList.add('tab-content');
  tab.appendChild(headLine());
  tab.appendChild(tagLine());
  const element = document.createElement('p');
  element.classList.add('welcome-msg');
  element.innerText = 'Welcome! Our professional and friendly staff are waiting to serve you. Ejoy your meal  in a warm and cozy environment.';
  tab.appendChild(element);
  return tab;
};

export default homeTab;
