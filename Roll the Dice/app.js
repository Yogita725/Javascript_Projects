roll=()=>{
    let dice = document.getElementById('dice');
    let random = Math.floor(Math.random()*6)+1;
    let audioDice = document.getElementById('audioDice');
    audioDice.play();
    dice.classList.add('spin');
    setTimeout(function(){
        dice.classList.remove('spin');
        dice.innerText=random;
    },1000);
}