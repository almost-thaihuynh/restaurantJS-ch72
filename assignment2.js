function showRestaurantName() {
    console.log("Welcome to La Cantina");
}

showRestaurantName();


function greetCustomer(customerName) {
    console.log(
        "Welcome, " + customerName + "! We are happy to have you at La Cantina."
    );
    console.log(`Welcome, ${customerName}! We are happy to have you.`);
}

greetCustomer("Maria");
greetCustomer("James");
greetCustomer("Sofia");


function calculateTotal(price, tax) {
    return price + (price * tax);
}

let tacosTotal = calculateTotal(10, 0.08);
let enchiladasTotal = calculateTotal(12.50, 0.08);
let aguaTotal = calculateTotal(3, 0.08);

console.log("Tacos al pastor — Total with tax: $" + tacosTotal);
console.log("Enchiladas verdes — Total with tax: $" + enchiladasTotal);
console.log("Agua fresca — Total with tax: $" + aguaTotal);

console.log(
    "Tacos al pastor — Total with tax: $" + tacosTotal + "\n" +
    "Enchiladas verdes — Total with tax: $" + enchiladasTotal + "\n" +
    "Agua fresca — Total with tax: $" + aguaTotal
);