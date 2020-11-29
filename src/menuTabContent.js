// import { headLine } from "./headLine";
import "./css/tab-content.css";

const menuTab = () => {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  tab.innerText = "Menu Menu Menu";
  return tab;
};

export default menuTab;
