let topelement = document.querySelector(".top")
let firstelem = document.querySelector(".first")
let action = document.querySelector(".topaction")
let start = document.querySelector(".startaction")

// function mousemovee(dets) {
//     action.style.left = dets.x + "px"
//     action.style.top = dets.y + "px"
// }

// topelement.addEventListener("contextmenu", function (event) {
//     event.preventDefault();
//     action.style.display = "block"
//     topelement.addEventListener("mousemove", mousemovee);
// })
// topelement.addEventListener("click", function () {
//     action.style.display = "none"
// })

function showAtPosition(e) {
    action.style.left = e.clientX + "px";
    action.style.top = e.clientY + "px";
    action.style.display = "block";
}

// Right-click (contextmenu)
topelement.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // disable default menu
    showAtPosition(event);
});

// Left-click
topelement.addEventListener("click", function (event) {
        action.style.display = "none"
        start.style.display = "none"
});





firstelem.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    start.style.display = "block"
    start.style.flexDirection = "row"
})
firstelem.addEventListener("click", function (event) {
    event.preventDefault();
    start.style.display = "block"
    start.style.flexDirection = "row"
})