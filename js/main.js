// generate pin 
function generatePin(){
    const randomPin = Math.round(Math.random()*10000);
    const pinDigit = (randomPin+'').length;
    if(pinDigit == 4){
        return randomPin;
    }
    else{
        generatePin();
    }
}
// generate pin display 
function pinDisplay(){
    const displayPins = generatePin();
    document.getElementById('display-pin').value = displayPins;
}

// keypad section
document.getElementById('key-pad').addEventListener('click', function(event){
    const yourPin = event.target.innerText;
    let yourPinId = document.getElementById('your-pin');
    if(isNaN(yourPin)){
        if(yourPin == 'C'){
            yourPinId.value = '';
        }
    }
    else{
        const previousValue = yourPinId.value;
        const newNumber = previousValue + yourPin;
        yourPinId.value = newNumber;
    }
    
})

// submit
function submitButton(){
    const autoPin = document.getElementById('display-pin');
    const inputPin = document.getElementById('your-pin');
    const falsePin = document.getElementById('false-pin');
    const truePin = document.getElementById('true-pin');
    if(autoPin.value == inputPin.value){
        truePin.style.display = 'block';
        falsePin.style.display = 'none';
    }
    else{
        falsePin.style.display = 'block';
        truePin.style.display = 'none';

    }
}
