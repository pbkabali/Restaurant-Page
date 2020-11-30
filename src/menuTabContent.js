import menuSectionHeading from "./menuSectionHeading";
import menuItem from "./menuItem";
import "./css/tab-content.css";

const menuTab = () => {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  tab.appendChild(menuSectionHeading("Breakfast"));
  const breakfastImg1 =
    "https://content.jdmagicbox.com/comp/chennai/a8/044pxx44.xx44.190716183052.z1a8/catalogue/sandwitch-chennai-fast-food-delivery-services-44jx9vznst.jpg";
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  tab.appendChild(menuSectionHeading("Lunch"));
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  tab.appendChild(menuSectionHeading("Dinner"));
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  tab.appendChild(
    menuItem(
      breakfastImg1,
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables"
    )
  );
  return tab;
};

export default menuTab;
