//Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
//(principal * rate * time) / 100.


function interestCalculator(p,r,t){

    let interest = ((p*r*t) /100)
    console.log(`You have to give the interest of Rs. ${interest}`);
}

interestCalculator(20000,13,5)