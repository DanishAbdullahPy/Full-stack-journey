Exercise
In this exercise, you must construct an if inside the checkNumber function statement that checks if the number myNumber is equal to 42. If that is the case, the function must print out using console.log the word correct. If myNumber is not equal to 42, the function must print out using console.log the word incorrect. You can name the argument passed to a function by supplying the name inside the parentheses. For example, function myFunction(myArgument).



  function checkNumber(myNumber) {
    if (myNumber === 42) {
        console.log("correct");
    } else {
        console.log("incorrect");
    }
}


checkNumber(42); // This will print "correct" to the console.
checkNumber(42); // This will print "incorrect" to the console.
