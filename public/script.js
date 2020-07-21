const masterContainer = document.querySelector('.master-container');
const loaderContainer = document.querySelector('.loader-container');
var video = document.getElementById("video");

setInterval( () => {
    if ( video.readyState === 4 ) {
        masterContainer.classList.remove("remove");
        loaderContainer.parentNode.removeChild(loaderContainer);
    }
}, 1000);

let button1 = document.querySelectorAll(".button")[0];
button1.addEventListener("click", () => {
    location.href = "roulette";
});

let button2 = document.querySelectorAll(".button")[1];
button2.addEventListener("click", () => {
    location.href = "results";
});


