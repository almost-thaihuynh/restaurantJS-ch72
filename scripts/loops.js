console.log("Loops");
// document.write vs console.log prints to console or HTML

document.write("<li>2 x 1 =2</li>");
document.write("<li>2 x 2 =4</li>");
document.write("<li>2 x 3 =6</li>");


document.write("My loop is working")

let num =5;
document.write(`<h3>My Multiplication table of ${num} is working`);

for(let i=0;i<=10;i++){
    let tot = i*num
    document.write(`<p>2 x ${i} = ${2*i}</p>`);// written (works specifically for whatever is written)
    document.write(`<p>${num} x ${i} = ${num*i}</p>`);// assigned let value
    document.write(`<p>${num} x ${i} = ${tot}</p>`);// assigned let value condensed
}

// different increments
// one by one
for(let i=0;i<5;i++){
    console.log(i);
}
// increment by 5
for(let i=0;i<=20;i+=5){
    console.log(i);
}


// Arrays
// and array is a list of value stored in one variable
// without an array:
let temp1 = 30;
let temp2 = 40;
let temp3 = 50;
let temp4 = 60;
let temp5 = 70;


// ... this gets messy fast
// with an array:
//

let temperatures = [30,40,50,60,70];

console.table(temperatures);

//temperatures[0] = 50;//change the value

console.log(temperatures[0]);
console.log(temperatures[1]);
console.log(temperatures[2]);


// loop to travel the array
for (let i=0;i<5;i++){
    console.log(temperatures[i])
}

// two parralel arrays
//the arrays share the index to store related data

const days = ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturaday","Sunday"];
const sales = [320,410,290,505,480,620,710];

// Monday: $320

for (let i=0;i<7;i++){
    console.log(`${days[i]}: $${sales[i]}`)
}