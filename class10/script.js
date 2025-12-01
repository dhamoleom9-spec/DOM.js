// document.querySelector('main').addEventListener('mousemove', function(dets){
//     document.body.style.setProperty("--x", e.clintx + "px")
//     document.body.style.setProperty("--y", e.clinty + "px")
// })

addEventListener('mousemove', function (e) {
    document.body.style.setProperty("--x", e.clientX + "px")
    document.body.style.setProperty("--y", e.clientY + "px")
})