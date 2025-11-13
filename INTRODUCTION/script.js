//FOUR PILLERS OF DOM

//SELLECTION
let one = document.querySelector('.first');
        //queryselectorALL
        //queryselectorbyID
        //queryselectorbyClass
//TO ADD INNERHTML
one.innerHTML = "helo this is DOM"

//TO ADD STYLE
one.style.color="white"

//EVENTLISTNER
 one.addEventListener('click', function(){
    one.innerHTML = "this is on addeventlistner click magic"
    one.style.color="red"
    one.style.backgroundColor="white"
 })

