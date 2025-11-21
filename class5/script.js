let but = document.querySelector("button")
let h1 = document.querySelector("h1")
let down = document.querySelector(".inner")
let grow = 0;

let num = 50 + (Math.floor(Math.random()*50))

but.addEventListener('click', function(){

    but.style.pointerEvents = "none"

    let set = setInterval(() => {
        grow++
        h1.innerHTML = grow+"%"
        down.style.width = grow+"%"
    }, num);

    setTimeout(() => {
        clearInterval(set)
        but.innerHTML = "DOWNLOADED.."
        but.style.opacity = "0.8"
        console.log(`downloaded in time ${num/10}`)
    }, num*100);
})
