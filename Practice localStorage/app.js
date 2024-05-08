


// localStorage.clear();

let userName = document.querySelector('input');
let submitBtn = document.querySelector('#submitBtn');
let welcomeForm = document.querySelector('#welcomeForm');
let nameSpan = document.querySelector('#name');
let heading = document.querySelector('#heading');
let intro = document.querySelector('#intro');

function userExist(){
    let userExists = 'name' in localStorage;
    if(userExists){
        nameSpan.innerText = localStorage.getItem('name');
        welcomeForm.classList.add('hidden');
        heading.classList.add('text-violet-800');
        intro.classList.add('text-gray-300');
    }
}

submitBtn.addEventListener('click',()=>{
    localStorage.setItem('name',userName.value) ;
    userExist();
})

userExist();