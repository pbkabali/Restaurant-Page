import "./css/nav-item.css";

class NavItem {
  constructor(label, selected) {
    this.label = label;
    this.selected = selected;
    this.element = document.createElement("div");
    this.element.innerText = this.label;
    this.element.classList.add(
      "nav-item",
      this.selected && "nav-item-selected"
    );
  }

  select() {
    this.selected = true;
    this.element.classList.add("nav-item-selected");
  }

  deSelect() {
    this.selected = false;
    this.element.classList.remove("nav-item-selected");
  }
}

export default NavItem;
