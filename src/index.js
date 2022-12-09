import "./style.css";
import { createLandingPage } from "./initialPageLoad";
import changeTab from "./switchTabs";
import { createAboutUsPage } from "./aboutUs";
import { createRestaurantMenu } from "./menu";
import { createLocationPage } from "./locationPage";
import { recommendCheese } from "./cheeseOfTheWeek";

createLandingPage();

// adding functionality
changeTab();

// add about us section
const aboutUsBtn = document.querySelector(".about-us-btn");
aboutUsBtn.addEventListener("click", createAboutUsPage);

// add menu section
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", createRestaurantMenu);

// add location section
const locationBtn = document.querySelector(".location-btn");
locationBtn.addEventListener("click", createLocationPage);

// add cheese of the week section
const recommendCheeseBtn = document.querySelector(".cheese-of-week-btn");
recommendCheeseBtn.addEventListener("click", recommendCheese);
