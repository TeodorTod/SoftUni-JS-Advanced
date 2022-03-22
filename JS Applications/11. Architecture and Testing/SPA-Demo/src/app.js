import { showSection } from "./dom.js";
import { showHomePage, showAboutPage } from "./home.js";
import { showCatalogePage } from "./catalog.js";

document.querySelector("nav").addEventListener("click", onNavigate);

const sections = {
  'homeBtn': showHomePage,
  'catalogBtn': showCatalogePage,
  'aboutBtn': showAboutPage
};

//Start app in home view
showHomePage();

function onNavigate(event) {
  if (event.target.tagName == "A") {
    const view = sections[event.target.id];
    if (typeof view == "function") {
      event.preventDefault();
      view();
    }
  }
}
