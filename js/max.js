var slideIndex = 0;
var numbersPhotos = 3;
var replaceInterval = 8000;
var typingInterval = 200;
let captions = ["Жил-был рыжий кот", "Любил, чтобы ему чесали пузяку", "Хулиганил по мере возможностей"];

function showSlides() {

    var slide = document.getElementById("photo");
    var nameFile = "img/max" + (slideIndex + 1) + ".jpg";
    loop_print(captions[slideIndex]);
    slide.setAttribute("src", nameFile);
    slideIndex = (slideIndex + 1) % numbersPhotos;
    setTimeout(showSlides, replaceInterval);
}

function loop_print(pattern) {
    for(let i = 0; i < pattern.length; i++) {
        document.getElementsByTagName('h2')[0].innerHTML = pattern.slice(0, i + 1);
        sleep(typingInterval);
    }
}