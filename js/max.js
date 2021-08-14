var slideIndex = 0;
var numbersPhotos = 2;
var replaceInterval = 8000;
let captions = ["Жил-был рыжий кот...", "Любил, чтобы ему чесали пузяку"];

function showSlides() {

    var slide = document.getElementById("photo");
    var nameFile = "img/max" + (slideIndex + 1) + ".jpg";
    document.getElementsByTagName('h2')[0].innerHTML = captions[slideIndex];
    slide.setAttribute("src", nameFile);
    slideIndex = (slideIndex + 1) % numbersPhotos;
    setTimeout(showSlides, replaceInterval);
}