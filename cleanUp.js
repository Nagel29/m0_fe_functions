// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: I added a semi-colon at the end of console.log. Changed function name to start with a verb.
function askName() {
  console.log("Hello, what is your name?");
}

askName()


// EX 2: Added semi-colon on line 20. Indented lines 20 and 21. Moved the closing } back on line 22.
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Fixed "func" to "function". Moved closing } from line 34 to 35. Added space between () and { on line 29.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();


//  EX 4: Moved opening { from line 43 to 42. Indented line 42. Moved back (outdented?) line 44. Renamed function to start with verb.
// Moved period within backticks of console.log. Added code to call function.
function findAverage(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;
  console.log(`the average is: ${avg}.`);
}

findAverage(25, 5)
