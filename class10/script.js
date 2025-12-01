// document.querySelector('main').addEventListener('mousemove', function(dets){
//     document.body.style.setProperty("--x", e.clintx + "px")
//     document.body.style.setProperty("--y", e.clinty + "px")
// })

addEventListener('mousemove', function (e) {
    document.body.style.setProperty("--x", e.clientX + "px")
    document.body.style.setProperty("--y", e.clientY + "px")
})

let h2 = document.querySelector("h1")
let charactors = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let text = h2.innerHTML

// let iteration = 0

// h1.addEventListener('mouseenter', () => {

//     setInterval(() => {
//         const str = text.split("").map((char, index) => {

//             if (index < iteration) {
//                 return char;
//             }

//             return charactors.split("")[Math.floor(Math.random() * 52)]

//         })
//         h1.innerHTML = str

//         iteration += 0.2
//     }, 30)

// })


let i = 0

function play() {

    let str = text.split("").map((char, index) => {
        if(index < i){
            return char;
        }
        return charactors.split("")[Math.floor(Math.random() * 52)]
    }).join("")

    h2.innerHTML = str

    i += 0.2
}

h2.addEventListener('mouseenter', ()=>{

setInterval(play, 20)

})