import nav from "./nav";
import hoemTab from "./homeTabContent";
import "./css/styles.css";
import homeTab from "./homeTabContent";

const contentDiv = document.getElementById("content");

const tab = () => {
  const tab = document.createElement("div");
  tab.id = "tab";
  tab.classList.add("tab", "flex");
  tab.appendChild(homeTab());
  return tab;
};

const pageLoad = () => {
  contentDiv.classList.add("container");
  contentDiv.appendChild(nav());
  contentDiv.appendChild(tab());
};

export default pageLoad;
