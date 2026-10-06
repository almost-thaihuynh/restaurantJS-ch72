const restaurantName = "La Cantina";
const cuisine = "Mexican";
const city = "San Diego";

let todaysSpecial = "Tacos al pastor";
let availableTables = 5;
let status = "Open";

console.log(
    "Restaurant Report\n" +
    "Restaurant: " + restaurantName + "\n" +
    "Cuisine: " + cuisine + "\n" +
    "City: " + city + "\n" +
    "Today's special: " + todaysSpecial + "\n" +
    "Available tables: " + availableTables + "\n" +
    "Status: " + status
);

todaysSpecial = "Enchiladas verdes";
availableTables = 2;

console.log(
    "\nUpdated Report\n" +
    "Restaurant: " + restaurantName + "\n" +
    "Cuisine: " + cuisine + "\n" +
    "City: " + city + "\n" +
    "Today's special: " + todaysSpecial + "\n" +
    "Available tables: " + availableTables + "\n" +
    "Status: " + status
);