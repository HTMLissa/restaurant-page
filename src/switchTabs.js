import { createAboutUsPage } from "./aboutUs";
import { createRestaurantMenu } from "./menu";
import { createLocationPage } from "./locationPage";
import { recommendCheese } from "./cheeseOfTheWeek";

const changeTab = () => {
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
};

export default changeTab;
