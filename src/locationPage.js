export const createLocationPage = () => {
  // create #location-container and append to .main-section
  const locationContainer = document.createElement("div");
  const mainSection = document.querySelector(".main-section");
  mainSection.innerHTML = "";

  locationContainer.setAttribute("class", "main-content-container");
  locationContainer.setAttribute("id", "location-container");

  mainSection.appendChild(locationContainer);

  // create 2 <p> elements and append to #location-container
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  p1.textContent = "You can find us at:";
  p2.innerHTML = `1234 Lorem Ipsum Street <br />
  12345 Lorem Ipsum, LI`;

  locationContainer.appendChild(p1);
  locationContainer.appendChild(p2);
};
