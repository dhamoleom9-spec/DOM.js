let main = document.querySelector(".mainn")
let cur = document.querySelector(".bat")

main.addEventListener('mousemove', function(dets){
    cur.style.left = dets.x + "px"
    cur.style.top = dets.y + "px"
})
