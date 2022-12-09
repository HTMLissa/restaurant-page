export const createAboutUsPage = () => {
  const mainContainer = document.querySelector("main");
  mainContainer.innerHTML = "";

  //   create #main-content-container and append to main
  const mainContentContainer = document.createElement("div");

  mainContentContainer.setAttribute("class", "main-content-container");
  mainContainer.classList.add("main-section");

  mainContainer.appendChild(mainContentContainer);

  //   create <p> and append to #main-content-container
  const aboutUsArticle = document.createElement("p");

  aboutUsArticle.setAttribute("id", "about-us-article");
  aboutUsArticle.innerHTML = `<span id="about-us-span">Our story begins in</span> <br> rubber cheese bocconcini boursin. Swiss cheddar fondue cheese and wine cottage
  cheese who moved my cheese fromage stilton. Who moved my cheese
  mozzarella smelly cheese mascarpone pecorino jarlsberg caerphilly
  fromage frais. When the cheese comes out everybody's happy fromage
  cheese triangles feta babybel bavarian bergkase cheesy feet fromage
  frais. Boursin macaroni cheese.`;

  mainContentContainer.appendChild(aboutUsArticle);
};
