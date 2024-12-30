// start variables
let angle = 0;

// functions
function load() {}

function rotate(element) {
    angle += 90; // angle will loop back to 360 every 4 clicks
    element.style.transform = `rotate(${angle}deg)`;
}

// functions to run when page is loaded
let el = document.getElementById("heading-icon");
el.addEventListener("click", function () {
    rotate(el);
});
