let one = document.querySelector('.first h1')
let two = document.querySelector('.second h1')
let three = document.querySelector('.third button')
let four = document.querySelector('.fifth button')

let a = 0;
three.addEventListener('click', function(){
    a++
    one.innerHTML=a
})
four.addEventListener('click', function(){
    a--
    one.innerHTML=a
})



// let b = 0;
// four.addEventListener('click',function(){
//     b--
//     two.innerHTML=b
// })
