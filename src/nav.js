import NavItem from "./navItem";
import { switchTabs } from "./index";
import "./css/nav.css";

const nav = () => {
  const element = document.createElement("div");
  const navItems = [
    new NavItem("Home", true),
    new NavItem("Menu", false),
    new NavItem("Contact", false),
  ];

  const clearSelected = (items_arr) => {
    items_arr.forEach((item) => {
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
  element.classList.add("flex", "nav");
  return element;
};

export default nav;
