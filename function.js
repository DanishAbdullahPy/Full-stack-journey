//Function ek set of instructions hai 
//jo ek specific task ko perform karta hai. Jaise ki aapke pass ek "kitchen recipe" hoti hai 
//jo aapko step-by-step guide karti hai ki kaise ek dish banani hai, waise hi function bhi ek set of 
//instructions hai jo aapke code mein reusability aur organization laata hai. Aap ek function ko define karte hain, 
//usmein required actions ko perform karte hain, aur phir aap us function ko baar-baar call karke us task ko execute kar sakte hain, bina ki har baar wahi code ko dubara likhne ki zaroorat ho.


// Function to make a cheese sandwich
function makeCheeseSandwich() {
    // Actions to make a cheese sandwich
    var sandwich = "Bread + Cheese + Bread";
    return sandwich; // Output: Completed sandwich
}

// Function to make a ham sandwich
function makeHamSandwich() {
    // Actions to make a ham sandwich
    var sandwich = "Bread + Ham + Bread";
    return sandwich; // Output: Completed sandwich
}

// Function to make a veggie sandwich
function makeVeggieSandwich(veggies) {
    // Actions to make a veggie sandwich
    var sandwich = "Bread + " + veggies.join(" + ") + " + Bread";
    return sandwich; // Output: Completed sandwich
}

//This line of code is constructing a string that represents a sandwich, 
//with the vegetables listed between two slices of bread. Let's break it down:
var sandwich = "Bread + " + veggies.join(" + ") + " + Bread";

//"Bread + ": This part of the string represents the first slice of bread.

//veggies.join(" + "): This part joins the elements of the veggies array into a single string, with each vegetable separated 
//by " + ". For example, if veggies contains ["Lettuce", "Tomato", "Cucumber"], this part would result in "Lettuce + Tomato + Cucumber".

//" + Bread": This part represents the last slice of bread.

//So, when you put it all together, the sandwich variable will contain a string representation of a sandwich, with the vegetables listed between two slices of bread, like this:

Bread + Lettuce + Tomato + Cucumber + Bread
//This string can be used for various purposes, such as displaying the sandwich in a user interface, 
//logging it to the console, or passing it to another function. 
//It's a way of representing the contents of the sandwich in a readable format.



// Making sandwiches
console.log(makeCheeseSandwich()); // Output: Bread + Cheese + Bread
console.log(makeHamSandwich()); // Output: Bread + Ham + Bread
console.log(makeVeggieSandwich(["Lettuce", "Tomato", "Cucumber"])); // Output: Bread + Lettuce + Tomato + Cucumber + Bread


function makechickebiryani(){
    var biryani = "chicken + garam masala + dahi";
    return biryani;
}

console.log(makechickebiryani()); // Corrected function name and added parentheses
