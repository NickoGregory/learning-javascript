/**
 * What is an Algorithm?
 * An algorithm is a step-by-step procedure or formula for solving a problem 
 * or performing a task. In JavaScript, algorithms are implemented as code.
 */

/**
 * What is a Data Structure?
 * A data structure is a way of organizing, managing, and storing data to 
 * enable efficient access and modification.
 */

// In this lesson, we will learn the basics of JavaScript and build a pyramid 
// generator as we follow along with freeCodeCamp lessons.

/** Lesson 1: Variables
 * The first lesson to build a pyramid generator is to learn about variables.
 * Variables are often declared using the `let` keyword. Variable naming follows 
 * specific rules:
 * - Names can include letters, numbers, dollar signs ($), and underscores (_).
 * - Names cannot contain spaces or begin with a number.
 *
 * Use the `let` keyword to declare a variable called `character`.
 * Note: It is common practice to end statements in JavaScript with a semicolon (`;`).
 */
let character;

// Lesson 2: Assigning Values
// This lesson teaches how to assign a value to a variable.
// Using the assignment operator (`=`), you can assign a value. This is called initialization.
// Example: I added the string value "hello" to the `character` variable.
character = "hello";

// Lesson 3: String Values
// This lesson explains string values.
// Strings in JavaScript can be written using either single (`'`) or double (`"`) quotes.
// Example: I replaced the double quotes in the `character` variable value with single quotes.
character = 'hello';

// Lesson 4: Console Log
// This lesson introduces `console.log`, a method used to output the value of a variable.
// Example: I used the `console.log` method to print the value of the `character` variable.
character = 'Hello';
console.log(character);

// Lesson 5: Reassigning Variables
// This lesson shows how to reassign or replace the value of a variable.
// Example: I changed the value of `character` from "Hello" to "World".
character = 'Hello';
character = "World";
console.log(character);

// Lesson 6: Camel Case Naming
// This lesson discusses naming variables using camelCase.
// In camelCase, each word in a variable name starts with a capital letter, except the first word.
// Example: I added a new variable called `secondCharacter` without initializing it.
let secondCharacter;

// Lesson 7: Initializing Uninitialized Variables
// This lesson teaches how to assign a value to an uninitialized variable.
// Example: I added a value to the `secondCharacter` variable.
secondCharacter = "Test";
console.log(secondCharacter);

// Lesson 8: Assigning Variables
// This lesson explains how to assign the value of one variable to another.
// Example: I assigned the value of `character` to `secondCharacter`.
secondCharacter = character;
console.log(secondCharacter);

// Lesson 9: Numbers as Variable Values
// This lesson highlights that quotation marks are not needed around numbers 
// when initializing them as variable values.
// Example: I created a new variable called `count` and assigned it the value 8.
let count = 8;

// Lesson 10: Number Data Type
// This lesson explains the number data type, which can perform math operations like `+`, `-`, and `*`.
// Example: I added a `console.log` statement to the `count` variable and used the `+` operator to add 1.
console.log(count + 1);

// Lesson 11: Array
// This lesson teaches about the array data structure,this allows us to store more complex data
// unlike string and number primitive data type.array is represented/denoted by []
// Example: I added a new variable called 'row' and assign it an empty array.
let character = 'Hello';
let count = 8;
let rows = [];

// Lesson 12: Understanding Arrays and Adding Values  
// Topic: Initializing arrays and adding elements  
// This lesson teaches how to initialize an array and add elements to it.  
// Example: Creating a rows variable with an array value.  
let rows = ["Naomi", "Quincy", "CamperChan"];

// Lesson 13: Accessing Array Elements by Index  
// Topic: Retrieving array elements using their positions  
// This lesson demonstrates how to retrieve values from an array using their index positions.  
// Example: Logging a value from the array to the console.  
console.log(rows[0]); // Output: Naomi  

// Lesson 14: Modifying Array Elements  
// Topic: Updating array values  
// This lesson explains how to update the value of an array element at a specific position.  
// Example: Changing the value at the 3rd position (index 2) of the array.  
rows[2] = 10;  
console.log(rows); // Output: ["Naomi", "Quincy", 10]  

// Lesson 15: Using Array Length to Access Elements  
// Topic: Accessing the last element of an array  
// This lesson shows how to use the .length property to manipulate or access the last element of an array.  
// Example: Modifying the last element of the array using .length - 1.  
rows[rows.length - 1] = 10;  
console.log(rows); // Output: ["Naomi", "Quincy", 10]  

// Lesson 16: Adding Elements with .push()  
// Topic: Appending elements to an array  
// This lesson teaches how to add new elements to the end of an array using the .push() method.  
// Example: Adding a new string to the array.  
rows.push("freeCodeCamp");  
console.log(rows); // Output: ["Naomi", "Quincy", 10, "freeCodeCamp"]  

// Lesson 17: Removing Elements with .pop()  
// Topic: Deleting the last element from an array  
// This lesson explains how to remove the last element from an array and store it in a variable using .pop().  
// Example: Removing the last element and logging the result.  
let popped = rows.pop();  
console.log(popped); // Output: freeCodeCamp  
console.log(rows);   // Output: ["Naomi", "Quincy", 10]  

// Lesson 18: Return Value of .push()  
// Topic: Using the return value of .push()  
// This lesson explores how the .push() method returns the new length of the array after adding an element.  
// Example: Assigning rows.push("freeCodeCamp") to a variable and logging the result.  
let pushed = rows.push("freeCodeCamp");  
console.log(pushed); // Output: 4 (new length of the array)  
console.log(rows);   // Output: ["Naomi", "Quincy", 10, "freeCodeCamp"]  
