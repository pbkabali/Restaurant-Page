/* eslint-disable*/
import pageLoad from "./pageLoad";
import homeTab from "./homeTabContent";
import menuTab from "./menuTabContent";
import contactTab from "./contactTabContent";

pageLoad();

const tabContentDiv = document.getElementById("tab");

export const switchTabs = (name) => {
  const tabs = {
    home: homeTab,
    menu: menuTab,
    contact: contactTab,
  };
  tabContentDiv.innerText = "";
  tabContentDiv.appendChild(tabs[name.toLowerCase()]());
};

/* eslint-enable */
