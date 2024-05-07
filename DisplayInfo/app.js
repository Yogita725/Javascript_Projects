let users = [];
let userContainer = document.getElementById('userContainer');
let btn = document.getElementById('btn');
let userName = document.getElementById('name');
let userEmail = document.getElementById('emailId');
let deleteBtn;


// function deleteInfo(name,email){
//     console.log(name + ' '+email);
// }

function renderInfo(){
    userContainer.innerHTML='';
    
    users.forEach((user, index)=>{
        let div= document.createElement('div');
        let name = document.createElement('p');
        let email = document.createElement('p'); 
        deleteBtn = document.createElement('button');

        div.classList.add('user');
        name.innerText = user.name;
        email.innerText = user.email;
        deleteBtn.innerText='Delete';
        deleteBtn.classList.add('deleteBtn');
        
        userContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(deleteBtn);

        deleteBtn.addEventListener('click',()=>{
            index==users.length ?users.pop():users.splice(index,1);
            userContainer.removeChild(div);
        })

        btn.classList.add('green');
        btn.innerText  ='User added successfully!';
        setTimeout(()=>{
            btn.classList.remove('green');
            btn.innerText  ='Register Here!';
            userName.value = '';
            userEmail.value = '';
        },1000);

    })
}

// let deleteInfo = document.querySelector('.deleteBtn');
// deleteInfo.addEventListener('click',(e)=>{
//     console.log('Delete button clicked');
// })


function emailExist(email){
    let value = 0;
    if(users.length > 0){
        users.forEach((i)=>{
            if(i.email === email){
                value = 1;
            }
        })
    }
    if(value == 1){
        return 1;
    }
    return 0;

}

function userExist(){
    btn.classList.add('red');
    btn.innerText  ='User already exist!';
    setTimeout(()=>{
        btn.classList.remove('red');
        btn.innerText  ='Register Here!';
        userName.value = '';
        userEmail.value = '';
    },1000);
}

function register(){
    
    let user = {
        name:userName.value,
        email:userEmail.value
    } 

    let result = emailExist(userEmail.value);

    if(result == 1){
        userExist();
    }
    else if(result == 0){
        users.push(user);
        renderInfo();
    }
    
}
