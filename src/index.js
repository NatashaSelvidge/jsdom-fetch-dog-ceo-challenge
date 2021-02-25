console.log("%c HI", "color: firebrick");

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener("DOMContentLoaded", () => {
  fetch(imgUrl)
    .then((response) => response.json())
    .then((images) => {
      showImages(images.message);
    });

  return fetch(breedUrl)
    .then((response) => response.json())
    .then((breeds) => {
      showBreeds(Object.keys(breeds.message), Object.values(breeds.message));
    });
});

function showImages(images) {
  let div = document.querySelector("#dog-image-container");
  images.forEach((image) => {
    let img = document.createElement("img");
    img.src = image;
    div.appendChild(img);
  });
}

function showBreeds(breeds) {
  let ul = document.querySelector("#dog-breeds");
  breeds.forEach((breed) => {
    let li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);

    li.addEventListener("click", function (breed) {
      breed.target.style.color = "red";
    });
  });

  // function dropChange(e) {
  //   let dropBox = document.querySelector("#breed-dropdown");
  //   dropBox.addEventListener("change", () => dropChange(event, function(e){
  //     filterLetter = e.target.value;
  //     const result = array.filter((breed) => breed[0] == e.target.value);
  //     renderBreed(result);

  //   }));
  // }

}
