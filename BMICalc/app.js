function bmi(){
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let level;
    let bmi = (weight.value)/((height.value)*(height.value));
    let result = document.getElementById('result');
    if(bmi <= 18.5){
        result.innerHTML= "<h1 class='text-yellow-500'>It's Underweight, but don't worry with proper diet and exercise we can achieve normal weight! ❤️</h1>";
    }
    else if(bmi>18.5 && bmi<=24.9 ){
        result.innerHTML= "<h1 class='text-green-500'>Hurray! 🥳 Normal Weight</h1>";
    }
    else if(bmi>24.9 && bmi<=29.9){
        result.innerHTML= "<h1 class='text-yellow-500'>It's Overweight, but don't worry with proper diet and exercise we can achieve normal weight! ❤️</h1>";
    }
    else if(bmi>29.9 && bmi<=35){
        result.innerHTML= "<h1 class='text-orange-500'>Obesity, Please take care of your health! ❤️</h1>";
    }
    else if(bmi>35){
        result.innerHTML= "<h1 class='text-red-500'>Severe Obesity, Please take extra care of your health! ❤️</h1>";
    }
}