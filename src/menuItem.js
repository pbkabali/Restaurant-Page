import "./css/menu-item.css";

const menuItem = (image, dish, desc) => {
  const card = document.createElement("div");
  card.classList.add("flex", "menu-card");
  const img = document.createElement("img");
  img.src = image;
  img.classList.add("menu-item-img");
  const details = document.createElement("div");
  details.classList.add("menu-item-details");
  const dishName = document.createElement("h3");
  dishName.innerText = dish;
  const description = document.createElement("p");
  description.innerText = desc;
  details.appendChild(dishName);
  details.appendChild(description);
  card.appendChild(img);
  card.appendChild(details);
  return card;
};

export default menuItem;
