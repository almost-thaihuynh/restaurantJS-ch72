console.log("Conditonals");

// if-statement condition (y/n)
// --- Syntax ---
// if(condition){
// code to be run if the condition is true
//}

let result = 50;
// this result is not true, so it doesn't print
if(result > 60){
    console.log("You passesd the exam!");
};

// results shows after statement is true
result = 80;
if(result > 60){
    console.log("You passesd the exam!");
};
// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true
// case 3: 5 === "5" -> false


// if-else statement condition (y/n)
// --- Sytax ---
// if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}

let points = 10;
if(points > 60){
    console.log("You Won!")
}else{
    console.log("You Lose!");
}

let temp = 12
if(temp > 100){
    console.log("Hot AF!")
}else{
    console.log("Brrr")
};

// else-if condition
// code to be run if the condition is true
//}else if(condition){
// code to run if the condition1 is true
//}else{
// code to be run if the conditions are false
//}

let age = 67;

if(age < 13){
    console.log("You are a Child");
    }else if(age < 21){
    console.log("You are a teenager");
    }else if(age < 64){
        console.log("You are an Adult");
    }else{
        console.log("You are a Senior");
}

let color = "green" //prompt("Input a traffic light color").toLowerCase();

if(color === "green"){
    console.log("Go!");
}else if(color === "yellow"){
    console.log("Slow down");
}else if(color === "red"){
    console.log("Stop");
}else{
    console.log("Invalid input")
}

// && and || operators
// && = AND - both conditions must be true
// || = OR - at least one condition must be true

let hour = 13;

if(hour>= 12 && hour <= 16){
    console.log("Lunch time");
}

let isWeekend = false;
let isHoliday = false;

if(isWeekend || isHoliday){
    console.log("Restaurant is closed today");
}else{
    console.log("Restaurat is open");
}

// if inside a function
// you will need this for the assignment

function checkAge(age){
    if(age >= 21){
        return "Can order alcohol";
    }else{
        return "Cannot order alcohol";
    }
}

let message1 = checkAge(22);
console.log(message1);

let message2 = checkAge(15);
console.log(message2)