import Menu from "./gouda-menu.svg";

export const createRestaurantMenu = () => {
  // creating .main-content-container and appending to .main-section
  const mainContentContainer = document.createElement("div");
  const mainSection = document.querySelector(".main-section");
  mainSection.innerHTML = "";

  mainContentContainer.setAttribute("class", "main-content-container");

  mainSection.appendChild(mainContentContainer);

  // creating .menu-wrapper and appending to .main-content-container
  const menuWrapper = document.createElement("div");

  menuWrapper.setAttribute("class", "menu-wrapper");

  mainContentContainer.appendChild(menuWrapper);
  // creating img (src = menu) and appending to .menu-wrapper
  const menuImg = new Image();
  menuImg.src = Menu;

  menuImg.setAttribute("alt", "menu");
  menuImg.setAttribute("id", "gouda-menu");

  menuWrapper.appendChild(menuImg);
};
