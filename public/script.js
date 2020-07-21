const masterContainer = document.querySelector('.master-container');
const loaderContainer = document.querySelector('.loader-container');
var video = document.getElementById("video");

let flag = false;
setInterval( () => {
    if ( video.readyState === 4 && !flag) {
        masterContainer.classList.remove("remove");
        loaderContainer.parentNode.removeChild(loaderContainer);
        document.body.appendChild(masterContainer);
        flag = true;
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


