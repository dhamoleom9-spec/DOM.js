
let arr = ['Eat, sleep, code, repeat..','Not a bug, a feature...!','Error 404: Coffee not found..','It works on my machine..','Have you tried restarting?..!','Talk is cheap; show code','We re only in it for the bugs','Logic is our superpower.','Debugging is life...!','Binary brilliance','Precision in every byte','Innovate, create, dominate.','Solutions born from code','Eat, sleep, code, repeat..!','The best code is no code']

let main = document.querySelector("main")
let but = document.querySelector("button")

but.addEventListener('click', function(){
    let h1 = document.createElement("h1");
    let a = Math.floor(Math.random() * arr.length)
    main.appendChild(h1)

    let x = Math.random()*80;
    let y = Math.random()*90;
    let rot = Math.random()*180;
    let sc = Math.random()*3;
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    h1.innerHTML=arr[a];
    h1.style.color = `rgb(${c1}, ${c2}, ${c3})`
    h1.style.position = "absolute"
    h1.style.top = y+"%"
    h1.style.left = x+"%"
    h1.style.rotate = rot+"deg"
    h1.style.scale = sc

})