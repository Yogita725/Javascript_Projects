function split(){
    let amount = document.getElementById('amount');
    let person = document.getElementById('person');
    let result = (amount.value/person.value).toFixed(2);
    let heading = document.getElementById('heading');
    heading.innerText = result +" per head!";
    amount.value='';
    person.value='';
}