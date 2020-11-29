// import { headLine } from "./headLine";
import "./css/tab-content.css";

const contactTab = () => {
  const tab = document.createElement("div");
  tab.classList.add("tab-content");
  tab.innerText = "This is the contact tab";
  return tab;
};

export default contactTab;
