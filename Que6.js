// Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight(kg)/
// height * height.


function BMI(w,h){
    let height = h/100
    let result = w/(height**height)
    console.log(`Your BMI is ${Math.floor(result)}` );
}

BMI(67,173)