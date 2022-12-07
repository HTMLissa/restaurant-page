import "./style.css";
import { createLandingPage } from "./initialPageLoad";
import changeTab from "./switchTabs";
import { createAboutUsPage } from "./aboutUs";
import { createRestaurantMenu } from "./menu";

createLandingPage();

// adding functionality
changeTab();

// add about us section
const aboutUsBtn = document.querySelector(".about-us-btn");
aboutUsBtn.addEventListener("click", createAboutUsPage);

// add menu section
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", createRestaurantMenu);
