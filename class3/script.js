let main = document.querySelector("main")
let div = document.querySelector(".text")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")
let btn = document.querySelector("button")

let arr = [
    {
        team:"MI",
        primerycol:"royslblue",
        seconderycol:"golden",
        fullform:"Munbai Indians",
        trophis:"FIVE [5]"
    },
    {
         team:"RCB",
        primerycol:"red",
        seconderycol:"marhoon",
        fullform:"Royal Challengers Banglore",
        trophis:"ONE [1]"
    },
    {
         team:"CSK",
        primerycol:"yellow",
        seconderycol:"lightblue",
        fullform:"Channi Super Kings",
        trophis:"FIVE [5]"
    },
    {
         team:"SRH",
        primerycol:"orange",
        seconderycol:"darkred",
        fullform:"SunRisers HYdrabad",
        trophis:"THREE [3]"
    },
    {
         team:"RR",
        primerycol:"pink",
        seconderycol:"lightpink",
        fullform:"Rajasthan Royals",
        trophis:"ONE [1]"
    },
    {
         team:"PBKS",
        primerycol:"red",
        seconderycol:"golden",
        fullform:"Punjab SUper Kings",
        trophis:"ZERO [0]"
    },
    {
         team:"DC",
        primerycol:"royalblue",
        seconderycol:"darkblue",
        fullform:"Delhi Capital",
        trophis:"ONE [1]"
    },
    {
         team:"KKR",
        primerycol:"purple",
        seconderycol:"green",
        fullform:"Kolkatta Knight Riders",
        trophis:"THREE [3]"
    },
    {
         team:"GT",
        primerycol:"darkblue",
        seconderycol:"lightgolden",
        fullform:"Gugrat Titans",
        trophis:"one [1]"
    },
    {
         team:"LSG",
        primerycol:"lightblue",
        seconderycol:"blue",
        fullform:"Lakhnow Super Giants",
        trophis:"ZERO [0]"
    }
]

btn.addEventListener('click', function(){
    var newarr = Math.floor(Math.random() * arr.length)


    main.style.backgroundColor= arr[newarr].seconderycol
    h1.innerHTML= arr[newarr].team
    h2.innerHTML= arr[newarr].fullform
    h3.innerHTML= `TROPHIES = ${arr[newarr].trophis}`
    div.style.backgroundColor=arr[newarr].primerycol
    btn.style.border=`5px solid ${arr[newarr].primerycol}`
})


console.log(arr[newarr])