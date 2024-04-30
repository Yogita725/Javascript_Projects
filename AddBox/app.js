let count = 0;

function createBox(){
    let boxContainer = document.getElementById('boxContainer');
    let div = document.createElement('div');
    if(count ==0){
        div.classList.add('box');
        count =1;
    }
    else if(count ==1){
        div.classList.add('darkbox');
        count =0;
    }
    boxContainer.appendChild(div);
}