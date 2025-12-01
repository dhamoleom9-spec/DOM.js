

let main = document.querySelector("main")
let box = document.querySelector(".box")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")

let arr = ['Eat, sleep, code, repeat..', 'Not a bug, a feature...!', 'Error 404: Coffee not found..', 'It works on my machine..', 'Have you tried restarting?..!', 'Talk is cheap; show code', 'We re only in it for the bugs', 'Logic is our superpower.', 'Debugging is life...!', 'Binary brilliance', 'Precision in every byte', 'Innovate, create, dominate.', 'Solutions born from code', 'Eat, sleep, code, repeat..!', 'The best code is no code']

box.addEventListener('mousemove', () => {
    let h1 = document.createElement("h1")
    main.appendChild(h1)

    let a = Math.floor(Math.random() * arr.length)

    let x = Math.floor(Math.random() * 100)
    let y = Math.floor(Math.random() * 100)
    let rot = Math.floor(Math.random() * 180)
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * 256)
    let sc = Math.floor(Math.random() * 3)

    h1.innerHTML = arr[a];
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`
    h1.style.position = "absolute"
    h1.style.top = y + "%"
    h1.style.left = x + "%"
    h1.style.rotate = rot + "deg"
    h1.style.scale = sc
})