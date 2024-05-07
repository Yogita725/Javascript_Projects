//On Click 
// function test(event){
//     // console.log('Button is clicked');
//     console.log(event.target.innerText);
// }

// let btns = document.querySelectorAll('#btn');
// btns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
//         let btnText = e.target;
//         console.log(btnText.innerText + ' clicked!');
//         btnText.innerText='Clicked';
//         btn.setAttribute('disabled',true);
//         btn.classList.add('btnDisable');
//         btn.classList.remove('btn');
//     })
// })
// btn.addEventListener('click',test); 

//Mouse over and Mouse out
// let box=document.querySelector('.box');
// let btn = document.querySelector('.btn');
// box.addEventListener('mouseover',()=>{
//     btn.innerText ='Cursor is Inside the box';
// })
// box.addEventListener('mouseout',()=>{
//     btn.innerText ='Cursor is Outside the box';
// })


//OnChange

// let inputs = document.querySelectorAll('input');
// inputs.forEach((input)=>{
//     input.addEventListener('change', ()=>{
//         console.log(input.value)
//     })
// })


//keyup and keydown
// let inputs = document.querySelectorAll('input');
// inputs.forEach((input)=>{
//     input.addEventListener('keydown', ()=>{
//         console.log(input.value)
//     })
// })


// Load event
// let loader=document.querySelector('#loader');
// loader.classList.add('loader');
// loader.classList.remove('hidden');
// window.addEventListener('load',()=>{
//     loader.classList.remove('loader');
//     loader.classList.add('hidden');
// })


// Scroll event

let page = document.querySelector('page');
let btn=document.querySelector('#btn');
window.addEventListener('scroll',()=>{
    if(window.scrollY > 1000){
        btn.classList.add('btn');
        btn.classList.remove('hidden');
    }
    else{
        btn.classList.remove('btn');
        btn.classList.add('hidden');
    }
})





