function load() {}

let position = 0;
function rotate(element) {
    position += 90;
    element.style.transform = `rotate(${position}deg)`;
}

let el = document.getElementById("heading-icon");
el.addEventListener("click", function () {
    rotate(el);
});
