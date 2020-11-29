import { headLine } from "./headLine";
import { tagLine } from "./tagLine";
import "./css/tab-content.css";

const homeTab = () => {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  tab.appendChild(headLine());
  tab.appendChild(tagLine());
  return tab;
};

export default homeTab;
