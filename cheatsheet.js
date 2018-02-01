// This is a single line comment!
/*
   And this is a multi-line comment! The Javascript engine won't read these.
   I'll leave you notes about this document using these. Javascript files are
   Executed top to bottom, so you should feel free to read them that way too!
   By the end of this file, you'll know all the basic constructs that make
   Javascript tick.
*/

/*******************************************************
 *                      Variables                      *
 *******************************************************/

// 👆(nifty trick right? Adding more '*'s makes this comment look like a headline!)

// Variables are a box that you can hold values in.
// You declare a variable in one of these three ways:
var myVariable = 1;
let myScopedVariable = 1;
const myConstantVariable = 1;

// The first character of a variable name must be a letter, an underscore (_),
// or a dollar sign ($). Subsequent characters may be letters, numbers, underscores,
// or dollar signs. These rules also apply to function names (explained below).

// You can re-assign values to variables initialized with `var` or `let`.
// We will go over the difference between `var` and `let` below when we get to
// "Control Structures".
myVariable = 2;
myScopedVariable = 2;

// You can not re-assign values to variables initialized with `const` (short for constant):
myConstantVariable = 2 // This will throw and error.

/******************************************************
 *                Basic Variable Types                *
 ******************************************************/

// There are five basic types in Javascript:

// Numbers
var number = 1.235;

// Strings (Aka: text. There are 3 syntax options!)
var string = "My string – it's awesome!";
var string2 = 'My string says: "something awesome!"';
var string3 = `This string lets you use variables inside it like this: ${string}
               And it lets you have multiple lines!`;

// Boolean: May be true or false
var truthyBool = true;
var falsyBool = false

// Non-existant values
// (There is a very subtle difference between `undefined` and `null`. We won't get in to it here.)
var notHere = undefined;
var isNull = null;

/******************************************************
 *                Complex Data Storage                *
 ******************************************************/

// Basic data types are all well and good, but sometimes
// we want to store something more complex! That is where
// Arrays and Objects come in.

/*********************** Arrays ***********************/

// Arrays are *ordered* lists of values. You can create an array like this:
var emptyArray = [];
var myArray = [ 10, 'foobar', false, 'bizbaz', 100 ];

// You access an array at a given "index" like this:
// (Note: Arrays start at index "0")
console.log(myArray[0]); // Logs "10"
console.log(myArray[2]); // Logs "false"
console.log(myArray[3]); // Logs "bizbaz"
console.log(emptyArray[3]); // Logs "undefined"

// You can set the value of an array at an index like this:
console.log(myArray[1]); // Logs "foobar"
myArray[1] = 'zomg I changed!';
console.log(myArray[1]); // Logs "zomg I changed!"

// Arrays may be set at any numbered index:
console.log(emptyArray[1]); // Logs "undefined"
console.log(emptyArray[100]); // Logs "undefined"
emptyArray[100] = 'now it has value';
console.log(emptyArray[1]); // Logs "undefined"
console.log(emptyArray[100]); // Logs "now it has value"

/********************** Objects ***********************/

// Objects are *named* collections of values. You can create an object like this:
var emptyObj = {};
var myObj = {
  myNumber: 10,
  myString: 'foobar',
  myBool: true
};

// You access an object at a given "key" one of two ways:
console.log(myObj.myNumber); // Dot Syntax – Logs "10"
console.log(myObj['myNumber']); // Bracket Syntax – Logs "10"

// Bracket syntax is useful for when an object key uses an otherwise illigal character.
// Following the same rules as variables, object keys cannot be accessed via dot syntax
// if he first character is not a letter, an underscore (_), or a dollar sign ($) or
// subsequent characters are not letters, numbers, underscores, or dollar signs.
var specialObj = {
  '1 illegal key name!': true
};
console.log(specialObj['1 illegal key name!']) // true


/*******************************************************
 *                     Expressions                     *
 *******************************************************/

// Expressions let you do smart things with your variables!
// They let you run logic and math equations with your data.

/***************** Logic Expressions *******************/

// All logic expressions will evaluate to the boolean values `true` or `false`
// depending on the conditions to the left and right side.

// The `==` operator checks for *EQUALITY* and evaluates to `true` or `false`
console.log(true == true);     // Log: true
console.log(true == false);    // Log: false
console.log(10 == 20);         // Log: false
console.log('asdf' == 'asdf'); // Log: true

// The `===` operator checks for *type safe* equality and evals to `true` or `false`.
// When using `==`, Javascript will try to convert each argument to the same type.
console.log('10' == 10);       // Log: true
console.log('10' === 10);      // Log: false
console.log('asdf' == true);   // Log: true
console.log('asdf' === true);  // Log: false
console.log('' == false);      // Log: true
console.log('' === false);     // Log: false
console.log(1 == true);        // Log: true
console.log(1 === true);       // Log: false
console.log(0 == false);       // Log: true
console.log(0 === false);      // Log: false

// Fun Fact:
// Every value in Javascript can be converted, or "cast" to any other type, to differing effect.
// You can test these conversions yourself in the browser by using the "primitive constructors"
// `String`, `Boolean`, and `Number`, to cast values to different types and see what comes out.
// For example:
String(10);    // "10"
Boolean(245);  // true
Boolean("");   // false
Number("100"); // 100

// The `<=` operator checks if the left value is *Less Than or Equal To* the right value.
console.log(10 <= 5);  // Log: false
console.log(5 <= 10);  // Log: true
console.log(10 <= 10); // Log: true

// The `>=` operator checks if the left value is *Greater Than or Equal To* the right value.
console.log(10 >= 5);  // Log: true
console.log(5 >= 10);  // Log: false
console.log(10 >= 10); // Log: true

// The `<` operator checks if the left value is *Less Than* the right value.
console.log(10 < 5);  // Log: false
console.log(5 < 10);  // Log: true
console.log(10 < 10); // Log: false

// The `>` operator checks if the left value is *Greater Than* the right value.
console.log(10 > 5);  // Log: true
console.log(5 > 10);  // Log: false
console.log(10 > 10); // Log: false

// The `||` operator returns `true` or `false` if the left side *OR* the right side is truthy
console.log(true || false);          // Log: true
console.log(false || false);         // Log: false
console.log( (10 > 5) || (10 < 5) ); // Log: true

// The `&&` operator returns `true` or `false` if the left side *AND* the right side is truthy
console.log(true && false);        // Log: false
console.log(true && true);         // Log: true
console.log((10 > 5) && (10 < 5)); // Log: false

/***************** Math Expressions *******************/
// Math expressions will return a new value depending on the input values
// The most common input for these operators are number values.

// + Addition Operator (Used to concatonate strings too!)
console.log(1 + 2) // Log 3
console.log('Trevor' + ' Foehl') // Log "Trevor Foehl"

// - Subtraction Operator
console.log(3 - 2) // Log 1

// * Multiplication Operator
console.log(2 * 2) // Log 4

// \ Division Operator
console.log(2 / 2) // Log 1


/*******************************************************
 *                      Functions                      *
 *******************************************************/

// Functions take a block of code and save it for later.
// The code inside the curly brackets will not execute until you "call" this function!
// You can declare a function like this:
function myFunctionName() {
  console.log('Called this function!');
}

// The above *technically* is shorthad for this (you typically won't do this):
var myFunctionName = function() {
  console.log('Called this function!');
}

// Functions are "called" using `()`. You call functions like this:
myFunctionName(); // Logs 'Called this function'

// You can try to call things that aren't functions, but it won't go well...
var notAFunction = false;
notAFunction(); // Throws error: "notAFunction" is not a function.

// Functions may take any number of arguments. You can pass values to the
// function inside the `()` used to call it! Those values will be available
// for use inside the function's "scope".
function iTakeArguments(arg1, arg2, arg3){
  console.log(arg1, arg2, arg3);
}

var val = 'value';
iTakeArguments(val, true, 10); // Logs: 'value' true 10
iTakeArguments(val, false, 20); // Logs: 'value' false 20

// Functions may "return" a value when called. This value can be used like any
// other variable.
function timesTwo(num) {
  return num * 2;
}
var a = timesTwo(2);
console.log(a) // Logs: 4
console.log(timesTwo(4)) // Logs: 8

// Becuase functions are just fancy values that can be "called", it stands to
// reason that functions can be passed around like other variables:
function callThis(func){
  return func();
}
function one(){
  return 1;
}
function two() {
  return 1;
}
console.log(callThis(one)) // Logs: 1
console.log(callThis(two)) // Logs: 2

// Also because functions are just fancy values, it turns our that functions
// can be assigned as values on an object! When a function is stored in an
// object, it is said to be a "method" of that object. For example, this
// object has a "method" called `notify`:
var obj = {
  notify(){
    console.log('Notification!');
  }
  // The above is fancy shorthand for this:
  // notify: function(){ console.log('Notification!'); }
};

// You may call this object's method by accessing it using either dot or bracket
// notation, and calling it using `()` like we do above.
obj.notify(); // Logs: Notification!

// I mentioned the word "scope" above. Scope is tricky! Scope is all about
// what variables are available to a line of code. Functions always define a
// new scope. Any variables defined in this scope are available to itself, and
// any other scopes delcared within it. If a variable is with the same name
// is re-declared in a different scope, it uses the closest declared variable.
// For example:
var a = 1;

function one() {
  var b = 2;

  function two() {
    var a = 4;
    var c = 3;
    console.log(a, b, c) // Logs: 4, 2, 3
  }

  two();
  console.log(a, b) // Logs: 1, 2, undefined
}

console.log(a, b, c); // Logs 1, undefined, undefined
one();
