let num = 0;
let count = document.getElementById('count');

increment=()=>{
    num=num+1;
    count.innerText = num;
}

decrement=()=>{
    if(num >0){
        num = num-1;
        count.innerText = num;
    }

}