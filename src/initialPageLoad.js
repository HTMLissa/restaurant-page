import Logo from "./gouda-logo.svg";

export const createLandingPage = () => {
  const contentContainer = document.querySelector("#content");
  // ********************** HEADER *******************************

  // creating header and appending to #content
  const indexHeader = document.createElement("header");

  indexHeader.setAttribute("class", "header");
  indexHeader.setAttribute("id", "index-header");

  contentContainer.appendChild(indexHeader);

  // creating nav element and appending to header
  const nav = document.createElement("div");

  nav.setAttribute("class", "nav");

  indexHeader.appendChild(nav);

  // creating logo-img and appending to nav
  const headerLogo = new Image();
  headerLogo.src = Logo;

  headerLogo.setAttribute("alt", "gouda logo");
  headerLogo.setAttribute("id", "header-logo");
  headerLogo.setAttribute("width", "180px");

  nav.appendChild(headerLogo);

  // creating left nav and appending to nav
  const navLeft = document.createElement("div");

  navLeft.setAttribute("class", "nav-left");

  nav.appendChild(navLeft);

  // creating right nav and appending to nav
  const navRight = document.createElement("div");

  navRight.setAttribute("class", "nav-right");

  nav.appendChild(navRight);

  // creating left nav ul and appending to .nav-left
  const ulLeftNav = document.createElement("ul");

  ulLeftNav.setAttribute("class", "nav-ul");
  ulLeftNav.setAttribute("id", "nav-ul-left");

  navLeft.appendChild(ulLeftNav);

  // creating right nav ul and appending to .nav-right
  const ulRightNav = document.createElement("ul");

  ulRightNav.setAttribute("class", "nav-ul");
  ulRightNav.setAttribute("id", "nav-ul-right");

  navRight.appendChild(ulRightNav);

  // creating 2 li and appending to ul of left nav
  const liLeftNav1 = document.createElement("li");
  const liLeftNav2 = document.createElement("li");

  liLeftNav1.innerHTML = "about us";
  liLeftNav2.innerHTML = "menu";

  liLeftNav1.setAttribute("class", "about-us-btn");
  liLeftNav2.setAttribute("class", "menu-btn");

  ulLeftNav.appendChild(liLeftNav1);
  ulLeftNav.appendChild(liLeftNav2);

  // creating 2 li and appending to ul of right nav
  const liRightNav1 = document.createElement("li");
  const liRightNav2 = document.createElement("li");

  liRightNav1.innerHTML = "location";
  liRightNav2.innerHTML = "cheese of the week";

  ulRightNav.appendChild(liRightNav1);
  ulRightNav.appendChild(liRightNav2);

  // ********************** MAIN *******************************

  // creating #index-main and appending to #content
  const indexMain = document.createElement("main");

  indexMain.setAttribute("class", "main");
  indexMain.setAttribute("id", "index-main");

  contentContainer.appendChild(indexMain);

  // creating #welcome-section and appending to #index-main
  const welcomeSection = document.createElement("section");

  welcomeSection.setAttribute("id", "welcome-section");
  indexMain.appendChild(welcomeSection);

  // creating h1 and appending to #welcome-section
  const h1 = document.createElement("h1");

  h1.innerHTML = "Welcome to <br /><span>Gouda</span>";
  welcomeSection.appendChild(h1);

  // ********************** FOOTER *******************************

  // creating #index-footer and appending to #content
  const indexFooter = document.createElement("footer");

  indexFooter.setAttribute("class", "footer");
  indexFooter.setAttribute("id", "index-footer");

  contentContainer.appendChild(indexFooter);

  // creating paragraphs and appending to #index-footer
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.innerHTML = "Made by HTMLissa, 2022";
  p2.innerHTML = "Photo by Cody Pulliam on Unsplash";
  indexFooter.appendChild(p1);
  indexFooter.appendChild(p2);
};
