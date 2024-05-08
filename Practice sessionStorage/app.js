let incrementBtn = document.querySelector('#incrementBtn');
let decrementBtn = document.querySelector('#decrementBtn');
let count = document.querySelector('#count');

incrementBtn.addEventListener('click',()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter +1;
    sessionStorage.setItem('counter',counter);
    updateSession();
})

decrementBtn.addEventListener('click',()=>{
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    counter = counter - 1;
    sessionStorage.setItem('counter',counter);
    updateSession();
})

function updateSession(){
    let counter = parseInt(sessionStorage.getItem('counter')) || 0;
    count.innerText = counter;
}

updateSession();