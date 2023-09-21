const accessKey = "28jmzXXtV1tHdDkUgVSpV44dBtQBV4wfrevh04FubOxgqBGfZhnDSpgl";
const link = "https://api.pexels.com/v1/search?query=";
const headerAuthorization = { headers: { Authorization: `${accessKey}` } };
let page = 1;

function loadImages(category) {
  fetch(`${link}${category}&page=${page}`, headerAuthorization)
    .then((response) => response.json())

    .then(imagesExtract)

    .catch((error) => {
      console.log(error.message);
    });
}

function imagesExtract(object) {
    
  const results = object.photos;
  
  // Seleziona la sezione delle card
  const resultsSection = document.querySelector(".search-results");
  // Ripulisco la sezione al click
  if (page === 1) {
    resultsSection.innerHTML = "";
  } 

  results.forEach((result) => {
    // Creo la card
    const card = document.createElement("div");
    card.classList.add("card");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardImage = document.createElement("img");
    cardImage.classList.add("card-img-top");
    cardImage.src = result.src.small;

    const cardText = document.createElement("p");
    cardText.classList.add("card-text");
    const cardSentence = result.alt;
    cardText.innerText = cardSentence;

    resultsSection.appendChild(card);
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    cardBody.appendChild(cardText);
  });

  page += 1
  if (page > 1 ) {
    showMoreButton.style.display = "block"
  }
}

const searchButton = document.getElementById("button-search");
const showMoreButton = document.getElementById("show-more-button");

searchButton.addEventListener("click", function () {
  page = 1;
  const inputText = document.querySelector("#search-input").value;
  console.log(inputText);
  loadImages(inputText);
});

showMoreButton.addEventListener("click", function () {
    const inputText = document.querySelector("#search-input").value;
    console.log(inputText);
    loadImages(inputText);
  });
  

// const results = loadImages("cats")
