let btn1 = document.querySelector('.mybtn1');
let div1 = document.querySelector('.none');
let input = document.querySelector('input')
let btn2 = document.querySelector('.mybtn2')
let tasks = document.querySelector('h2')
let alert = document.querySelector('.tasks')

btn1.onclick = function (){
div1.classList.toggle('none')
}

function print() {
    myValue = input.value ;
    tasks.textContent += myValue 
    alert.remove('alert')

}
btn2.addEventListener('click' , print)