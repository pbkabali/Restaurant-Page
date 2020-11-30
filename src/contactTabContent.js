import './css/tab-content.css';
import contactItem from './contactItem';

const contactTab = () => {
  const tab = document.createElement('div');
  tab.classList.add('tab-content');
  tab.appendChild(
    contactItem('fa-home', '62A Luthili Avenue, Upper Kololo, Kampala Uganda'),
  );
  tab.appendChild(contactItem('fa-phone', '0-800-JYUMMY, +256-772-111122'));
  tab.appendChild(contactItem('fa-envelope', 'justyummy@justyammy.food'));
  tab.appendChild(contactItem('fa-whatsapp', '+256-772-111122'));
  return tab;
};

export default contactTab;
