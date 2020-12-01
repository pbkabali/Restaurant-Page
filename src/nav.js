import NavItem from './navItem';
import homeTab from './homeTabContent';
import menuTab from './menuTabContent';
import contactTab from './contactTabContent';
import './css/nav.css';

export const switchTabs = (name) => {
  const tabContentDiv = document.getElementById('tab');
  const tabs = {
    home: homeTab,
    menu: menuTab,
    contact: contactTab,
  };
  tabContentDiv.innerText = '';
  tabContentDiv.appendChild(tabs[name.toLowerCase()]());
};

const nav = () => {
  const element = document.createElement('div');
  const navItems = [
    new NavItem('Home', true),
    new NavItem('Menu', false),
    new NavItem('Contact', false),
  ];

  const clearSelected = (itemsArr) => {
    itemsArr.forEach((item) => {
      if (item.selected) {
        item.deSelect();
      }
    });
  };

  navItems.forEach((obj) => {
    obj.element.onclick = () => {
      if (!obj.selected) {
        clearSelected(navItems);
        switchTabs(obj.label);
        obj.select();
      }
    };
    element.appendChild(obj.element);
  });
  element.classList.add('flex', 'nav');
  return element;
};

export default nav;
