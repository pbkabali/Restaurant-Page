import menuSectionHeading from "./menuSectionHeading";
import menuItem from "./menuItem";
import "./css/tab-content.css";

const menuTab = () => {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  tab.appendChild(menuSectionHeading("Light Meals"));
  const breakfastImg1 =
    "https://content.jdmagicbox.com/comp/chennai/a8/044pxx44.xx44.190716183052.z1a8/catalogue/sandwitch-chennai-fast-food-delivery-services-44jx9vznst.jpg";
  tab.appendChild(
    menuItem(
      "https://content.jdmagicbox.com/comp/chennai/a8/044pxx44.xx44.190716183052.z1a8/catalogue/sandwitch-chennai-fast-food-delivery-services-44jx9vznst.jpg",
      "Club Sandwich",
      "Marinated steak on brown bread (sweet or salt) with vegetables",
      "$3.55"
    )
  );
  tab.appendChild(
    menuItem(
      "https://pejoweb.com/photos/9979rolex-1024x768.jpg",
      "Kampala Rolex",
      "Ugandan-style wrap made out of the finest chapati, eggs, minced meat and select vegetables",
      "$2.70"
    )
  );
  tab.appendChild(menuSectionHeading("Main Dishes"));
  tab.appendChild(
    menuItem(
      "https://gimmedelicious.com/wp-content/uploads/2016/10/easy-chicken-tikka-masala-13-of-14-500x500.jpg",
      "Easy Chicken Tikka Masala",
      "A Delicious Creamy Tomato Sauce Based Indian Recipe Made With White Meat Chicken And Plenty Of Bold Spices Including Garlic, Ginger, Cumin And Coriander.",
      "$12.50"
    )
  );
  tab.appendChild(
    menuItem(
      "https://c.ndtvimg.com/2020-01/n7thfo2o_spaghetti_625x300_28_January_20.jpg",
      "Spaghetti With Lamb Meatballs",
      "A heavenly combination of soft lamb meatballs in tomato sauce with the silkiness of the spaghetti. Try this delicious recipe high on tomatoes and herbs.",
      "$9.80"
    )
  );
  tab.appendChild(menuSectionHeading("Beverages"));
  tab.appendChild(
    menuItem(
      "https://www.cellarmasters.com.au/media/99008/sparkling-white-mobile-banner.jpg?anchor=center&mode=crop&width=640&height=800&rnd=131974789000000000",
      "Sparkling Wine - Wine Varieties",
      "Assorted wines to go with your meals",
      "$3.00"
    )
  );
  tab.appendChild(
    menuItem(
      "https://previews.123rf.com/images/verca/verca1508/verca150800061/44049737-fresh-juice-with-fruits-on-wooden-table-with-nature-green-background.jpg",
      "Fresh juice",
      "Freshly squeezed juice made out of a variety of fruits from the hills of western Uganda",
      "$4.50"
    )
  );
  return tab;
};

export default menuTab;
