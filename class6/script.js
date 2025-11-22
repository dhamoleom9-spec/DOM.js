var action = document.querySelector(".two")
var one = document.querySelector("#one")

one.addEventListener('dblclick', function () {
    action.style.opacity = 1
    action.style.transform = 'translate(0%,0%) scale(1) rotate(0deg)'

    setTimeout(() => {
        action.style.transform = 'translate(0%,-250%) scale(1) rotate(-60deg)'
    }, 1000);
    setTimeout(() => {
        action.style.opacity = 0
    }, 1200);
    setTimeout(() => {
        action.style.transform = 'translate(0%,0%) scale(0) rotate(-60deg)'
    }, 1400);

})