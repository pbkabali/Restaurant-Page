import NavItem from "./navItem";
import "./css/nav.css";

const nav = () => {
  const element = document.createElement("div");
  const navItems = [
    new NavItem("Home", null, true),
    new NavItem("Menu", null, false),
    new NavItem("Contact", null, false),
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
        obj.select();
      }
    };
    element.appendChild(obj.element);
  });
  element.classList.add("flex", "nav");
  return element;
};

export default nav;
