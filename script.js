const accessKey = "28jmzXXtV1tHdDkUgVSpV44dBtQBV4wfrevh04FubOxgqBGfZhnDSpgl";
const link = "https://api.pexels.com/v1/search?query=";
const headerAuthorization = {headers: {Authorization: `${accessKey}`}}



function loadImages(category) {
  fetch(`${link}${category}`, headerAuthorization)
    .then((response) => response.json())

    .then(imagesExtract)

    .catch((error) => {
      console.log(error.message);
    });
}

// const searchButton = document.getElementById('button-search')

// searchButton.addEventListener("click", function() {
//     const inputText = document.querySelector('.form-control').value;
//     loadImages(inputText);
//     console.log(inputText);
//   });

function imagesExtract(object) {
    return console.log(object.photos[0].photographer);
}

const results = loadImages("cats")


