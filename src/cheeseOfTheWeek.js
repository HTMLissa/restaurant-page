import Picture from "./camembert.jpg";

export const recommendCheese = () => {
  // cteating #cheese-container and appending to .main-section
  const cheeseContainer = document.createElement("div");
  const mainSection = document.querySelector(".main-section");
  mainSection.innerHTML = "";

  cheeseContainer.setAttribute("class", "main-content-container");
  cheeseContainer.setAttribute("id", "cheese-recommendation-container");

  mainSection.appendChild(cheeseContainer);

  //   creating <p> <h2>, <img> & <p> and appending to #cheese-recommendation-container
  const p = document.createElement("p");
  const h2 = document.createElement("h2");
  const cheeseImg = new Image();
  const artistInfo = document.createElement("p");

  p.textContent = "Come try our";
  p.setAttribute("id", "come-try");
  h2.textContent = "Camembert";
  cheeseImg.src = Picture;
  cheeseImg.setAttribute("alt", "camembert");
  cheeseImg.setAttribute("id", "cheese-img");
  cheeseImg.setAttribute("width", "300px");
  artistInfo.textContent = "Photo by Adana Eisagholian on Unsplash";
  artistInfo.setAttribute("id", "artist-info");

  cheeseContainer.appendChild(p);
  cheeseContainer.appendChild(h2);
  cheeseContainer.appendChild(cheeseImg);
  cheeseContainer.appendChild(artistInfo);
};
