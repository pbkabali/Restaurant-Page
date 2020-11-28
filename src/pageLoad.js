import nav from "./nav";
import { headLine } from "./headLine";
import { tagLine } from "./tagLine";
import "./css/styles.css";

const contentDiv = document.getElementById("content");

const pageLoad = () => {
  contentDiv.classList.add("container", "flex");
  contentDiv.appendChild(nav());
  contentDiv.appendChild(headLine());
  contentDiv.appendChild(tagLine());
};

export default pageLoad;
