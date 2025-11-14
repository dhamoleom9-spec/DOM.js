let a = document.querySelector("div.one")
let b = document.querySelector("button")

let arr = ["om","aditya","aditya n","achyut","akash","sachin","sanket","rushikesh","vivek dada"]

b.addEventListener('click',function(){
    let c = Math.floor(Math.random() * 256)
    let c1 = Math.floor(Math.random() * 256)
    let c2 = Math.floor(Math.random() * 256)
    let c3 = Math.floor(Math.random() * arr.length)

    a.innerHTML=arr[c3]
    a.style.backgroundColor= `rgb(${c}, ${c1}, ${c2})`
    b.style.border= `5px solid rgb(${c}, ${c1}, ${c2})`
})