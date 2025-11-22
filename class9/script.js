// var a = new Audio('./28.mp3')
// var b = new Audio('./29.mp3')
// var c = new Audio('./30.mp3')
// var d = new Audio('./31.mp3')
// var e = new Audio('./40.mp3')
// var f = new Audio('./41.mp3')
// var g = new Audio('./42.mp3')
// var h = new Audio('./43.mp3')
// var i = new Audio('./44.mp3')
// var j = new Audio('./45.mp3')
// var k = new Audio('./46.mp3')
// var l = new Audio('./47.mp3')
// var m = new Audio('./48.mp3')
// var n = new Audio('./49.mp3')
// var o = new Audio('./50.mp3')
// var p = new Audio('./51.mp3')
// var q = new Audio('./52.mp3')
// var r = new Audio('./53.mp3')
// var s = new Audio('./54.mp3')
// var t = new Audio('./55.mp3')
// var u = new Audio('./56.mp3')
// var v = new Audio('./57.mp3')
// var w = new Audio('./58.mp3')
// var x = new Audio('./59.mp3')
// var y = new Audio('./60.mp3')
// var z = new Audio('./61.mp3')
// var as = new Audio('./62.mp3')
// var kl = new Audio('./63.mp3')

// document.body.addEventListener('keydown', function(e){

//     switch(e.key.toLowerCase()){
//         case 'a':
//             a.currentTime = 0; // reset so it can replay quickly
//             a.play();
//             console.log("a is clicked");
//             break;
//         case 'b':
//             b.currentTime = 0;
//             b.play();
//             break;
//         case 'c':
//             c.currentTime = 0;
//             c.play();
//             break;
//         case 'd':
//             d.currentTime = 0;
//             d.play();
//             break;
//         case 'e':
//             e.currentTime = 0;
//             e.play();
//             break;
//         case 'f':
//             f.currentTime = 0;
//             f.play();
//             break;
//         case 'g':
//             g.currentTime = 0;
//             g.play();
//             break;
//         case 'h':
//             h.currentTime = 0;
//             h.play();
//             break;
//         case 'i':
//             i.currentTime = 0;
//             i.play();
//             break;
//         case 'j':
//             j.currentTime = 0;
//             j.play();
//             break;
//         case 'k':
//             k.currentTime = 0;
//             k.play();
//             break;
//         case 'l':
//             l.currentTime = 0;
//             l.play();
//             break;
//         case 'm':
//             m.currentTime = 0;
//             m.play();
//             break;
//         case 'n':
//             n.currentTime = 0;
//             n.play();
//             break;
//         case 'o':
//             o.currentTime = 0;
//             o.play();
//             break;
//         case 'p':
//             p.currentTime = 0;
//             p.play();
//             break;
//         case 'q':
//             q.currentTime = 0;
//             q.play();
//             break;
//         case 'r':
//             r.currentTime = 0;
//             r.play();
//             break;
//         case 's':
//             s.currentTime = 0;
//             s.play();
//             break;
//         case 't':
//             t.currentTime = 0;
//             t.play();
//             break;
//         case 'u':
//             u.currentTime = 0;
//             u.play();
//             break;
//         case 'v':
//             v.currentTime = 0;
//             v.play();
//             break;
//         case 'w':
//             w.currentTime = 0;
//             w.play();
//             break;
//         case 'x':
//             x.currentTime = 0;
//             x.play();
//             break;
//         case 'y':
//             y.currentTime = 0;
//             y.play();
//             break;
//         case 'z':
//             z.currentTime = 0;
//             z.play();
//             break;
//         case 'as':
//             as.currentTime = 0;
//             as.play();
//             break;
//         case 'kl':
//             kl.currentTime = 0;
//             kl.play();
//             break;
//     }
// })

// ek object jithe key → Audio object map kela aahe
const sounds = {
    a: new Audio('./28.mp3'),
    b: new Audio('./29.mp3'),
    c: new Audio('./30.mp3'),
    d: new Audio('./31.mp3'),
    e: new Audio('./40.mp3'),
    f: new Audio('./41.mp3'),
    g: new Audio('./42.mp3'),
    h: new Audio('./43.mp3'),
    i: new Audio('./44.mp3'),
    j: new Audio('./45.mp3'),
    k: new Audio('./46.mp3'),
    l: new Audio('./47.mp3'),
    m: new Audio('./48.mp3'),
    n: new Audio('./49.mp3'),
    o: new Audio('./50.mp3'),
    p: new Audio('./51.mp3'),
    q: new Audio('./52.mp3'),
    r: new Audio('./53.mp3'),
    s: new Audio('./54.mp3'),
    t: new Audio('./55.mp3'),
    u: new Audio('./56.mp3'),
    v: new Audio('./57.mp3'),
    w: new Audio('./58.mp3'),
    x: new Audio('./59.mp3'),
    y: new Audio('./60.mp3'),
    z: new Audio('./61.mp3'),
    as: new Audio('./62.mp3'),
    kl: new Audio('./63.mp3')
};



let h1 = document.querySelector('h1')
document.body.addEventListener('keydown', function (e) {
    let key = e.key.toLowerCase();   // normalize to lowercase
    if (sounds[key]) {
        let c = Math.floor(Math.random() * 256);
        let c1 = Math.floor(Math.random() * 256);
        let c2 = Math.floor(Math.random() * 256);
        h1.innerHTML = `${key} is clicked`
        h1.style.color = `rgb(${c}, ${c1}, ${c2})`
        sounds[key].currentTime = 0; // reset so it can replay quickly
        sounds[key].play();
    }
});

let img = document.querySelector('.img')
let main = document.querySelector('.main')
main.addEventListener('mousemove', function (dets) {
    img.style.left = dets.x + 'px'
    img.style.top = dets.y + 'px'
})

// let h2 = document.querySelector('h2')
// let imk = document.querySelector('img')
// imk.addEventListener('click', function () {
//     let c = Math.floor(Math.random() * 256);
//     let c1 = Math.floor(Math.random() * 256);
//     let c2 = Math.floor(Math.random() * 256);
//     h2.style.color = `rgb(${c}, ${c1}, ${c2})`;
//     h2.style.opacity = 1;
//     console.log("hello");
// })


