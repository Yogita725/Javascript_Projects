// localStorage.clear();

let user={
    userName:'Yogita',
    emailId:'yogitaverma725@gmail.com',
    age:24,
    city:'Indore'
}

//Storing the user object inside local or session storage
localStorage.setItem('userInfo',user); //object Object (both key and value should be in the form of a string)

localStorage.setItem('users',JSON.stringify(user));

let users = JSON.parse(localStorage.getItem('users'));

console.log(users.emailId);

console.log('users' in localStorage);


console.log('userInfo' in localStorage);

//Template Variables

let name='Yogita';
let email='yogita@gmail.com';

console.log(`User name is ${name} and email id is ${email}`);

