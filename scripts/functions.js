// Void Function
// Step 1: declare the function
function login(){
    console.log("Welcome to the system!")
    console.log("Hi my name is")
};

// Step 2: Cal the function
login();

// Functions with parameters
function logout(user){// "Thai"
    console.log("Goodbye " + user + " see you later!");
};

logout("Thai,");
logout("John,");

function gradeExam(student, correctItem, points){
    let totalPoints = correctItem * points;
    console.log(`${student} grade of the exam is: ${totalPoints}`);// or
    console.log(student + " grade of the exam is: " + totalPoints);
};

gradeExam("Thai",10,.33);
gradeExam("John",2,0.33);
gradeExam();
// console.log(student);//failed code, no variable

// Functions with return
function add(num1, num2){// can be strings with ""
    let total = num1 + num2;
    return total;
};

let x = add(10,12);
console.log("The result is: " + x);
console.log(x - 5 + " or whatever");