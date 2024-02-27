// Prototype JavaScript mein ek mechanism hai jisme ek object dusre objects se properties aur methods inherit karta hai. 
// Har JavaScript object ka ek associated prototype hota hai, jo seedhe object par moujood properties aur methods ke liye ek fallback ka kaam karta hai. 

// Jab aap kisi object par koi property ya method access karte hain, toh JavaScript pehle check karta hai ki woh seedhe object par hai ya nahi. Agar nahi,
// toh woh object ka prototype dekhta hai aur prototype chain ke upar jaakar property ya method ko dhundhta hai. Ye code reuse, inheritance, 
// aur dynamic behavior modification ko possible banata hai, kyunki aap ek object ke prototype par properties aur methods add ya modify kar sakte hain.

// Define an object
const car = {
    name: "car",
    model: "30xdiva",
    
    // Add a method to the object
    introduce: function() {
      console.log(`This is a ${this.name} model named ${this.model}`);
    }
  };
  
  // Call the introduce method
  car.introduce(); // Output: This is a car model named 30xdiva


//alag

  //using function

  
  // Define a function to create car objects
function Car(name, model) {
    // Assign properties to the newly created object
    this.name = name;
    this.model = model;
  
    // Add a method to the object
    this.introduce = function() {
      console.log(`This is a ${this.name} model named ${this.model}`);
    };
  }
  
  // Create a new car object
  const myCar = new Car("car", "30xdiva");
  
  // Call the introduce method
  myCar.introduce(); // Output: This is a car model named 30xdiva
  

//alag

  // Define a constructor function
function Student(name, marks) {
    this.name = name; // Set the name property to the value passed as argument
    this.marks = marks; // Initialize the marks property with the value passed as argument
  }
  
  // Adding a method to the prototype of the Student constructor function
  Student.prototype.printNameAndMarks = function() {
    console.log("Name:", this.name); // Access and print the name property
    console.log("Marks:", this.marks); // Access and print the marks property
  };
  
  // Create Student objects with different marks
  const student1 = new Student("Danish", 90);
  const student2 = new Student("Mohit", 80);
  
  // Call the method to print the name and marks for each student
  student1.printNameAndMarks(); // Output: Name: Danish, Marks: 90
  student2.printNameAndMarks(); // Output: Name: Mohit, Marks: 80
  