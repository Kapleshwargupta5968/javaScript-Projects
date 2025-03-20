const hInput = document.querySelector("#height");
const WInput = document.querySelector("#Weight");
const calculateBtn = document.querySelector("#calculate");
const score = document.querySelector("#bmiScore");
const result = document.querySelector("#bmiResult");

calculate.addEventListener('click', () => {
    const height  = parseFloat(hInput.value);
    const weight = parseFloat(WInput.value);

    const BMI = weight*(height**2);
    
},false);