// Conditionals and loops are two of the most important concepts in JavaScript
// A conditional says, “If something is true, do this. 
// Otherwise, do that.

// if Statements
// The if statement is the simplest of JavaScript’s control structures.
//  It’s used to run code only if a condition is true

var name = "Nich";
console.log('Hello ' + name);
if (name.length > 7 ) {
    console.log("Wow this shit lit");
} else {
console.log("Your name isn't very long."); 
}

//Chaining if...else Statements

var lemonChicken = false;
var beefWithBlackBean = false;
var sweetAndSourPork = false;
var eggFriedRice = true;

if (lemonChicken) {
    console.log("Great! I'm having lemon chicken");
} else if (beefWithBlackBean){
    console.log("Let me get the beef wit the beans yo");
} else if (sweetAndSourPork) {
    console.log("Ok, let me have that sweet pork dawg");
} else if (eggFriedRice) {
    console.log("Fuck it, Let me get the egg fried rice a mf hungry");
}

/*There’s one other thing to note: 
you don’t necessarily have to include the final else. 
If you don’t, though, and none of the conditions is true, 
then nothing inside the if...else chain will be executed.
 */

var lemonChicken = false;
var beefWithBlackBean = false; var sweetAndSourPork = false;
if (lemonChicken) {
console.log("Great! I'm having lemon chicken!");
} else if (beefWithBlackBean) { console.log("I'm having the beef.");
} else if (sweetAndSourPork) { console.log("OK, I'll have the pork.");
}

//------------------------------------------------------------------------

// Write a program with a name variable. 
// If name is your name, print out Hello me!; 
// otherwise, print Hello stranger!. 
// (Hint: Use === to compare name to your name.)

var Jack = true;
var John = false;

if (John === Jack) {
  console.log("hey Jack");
} else {
 console.log("Nah wrong name fool");
}

//-----------------------------------------------

// LOOPS
// Loops allow you to run a piece of code multiple times, 
// depending on whether a condi- tion remains true.

// WHILE LOOPS
// Counting Sheep with a while loop
var sheepCounted = 0;
    while(sheepCounted < 15) {
    console.log("Damn that's alot of sheep dogs" + sheepCounted + "FAK!");
    sheepCounted++;
    }
console.log("Zzzzzzzzzzzzz");

// Preventing Infinite loops
/* if you left out the line sheepCounted++;,
then sheepCounted would remain 0, 
and the output would look like this: 
*/
// Expected outout
/* I have counted 0 sheep! 
   I have counted 0 sheep! 
   I have counted 0 sheep! 
   I have counted 0 sheep! 
...
*/
//---------------------------------------

// FOR LOOPS
for ( var sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
   console.log("I have counted " + sheepCounted + " sheep!");
}
console.log("ZZZzzz FAK DAWG I GOT IT...");

// for loops are often used to do something a set number of times.
// For example, this program will say Hello! three times/
var timesToSayHello = 3;
for (var i = 0; i < timesToSayHello; i++); {
    console.log("Hello");
}

//-------------------------------------------

// Using for loops with Arrays and Strings
var animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for ( var i = 0; i < animals.length; i++) { // Looking inside full lenght of array so always remember .length for arrays.
    console.log("The Zoo contain " + animals[i] + " ");
}

/* you can access individual characters in a string
in the same way you can access individual elements in an array, 
using square brackets. This next example uses a for loop
to print out the characters in a name:
*/

var name = "CodeX";
for ( var i = 0; i < name.length; i++) {
    console.log("My name contains the letter " + name[i] + ".");
}
// Expected outout
// My name contains the letter C. 
// My name contains the letter o. 
// My name contains the letter d. 
// My name contains the letter e. 
// My name contains the letter X. 


// other Ways to use for loops
// here’s a way to print all the powers of 2 
// below the number 10,000:

for (var x = 2; x < 100000; x = x * 2) {
    console.log(x);
}

// Expected outout
/*
2
4
8
16
32
64
128
256
512
1024
2048
4096
8192
16384
32768
*/

//---------------------------------------------

// Write a loop to print the powers of 3 under 10,000 
// (it should print 3, 9, 27,

for (var x = 3; x < 10000; x = x * 3) {
    console.log(x);
}
// Expected outout
/*   
3
9
27
81
243
729
2187
6561
*/

/*
Write a for loop that modifies an array of animals, 
making them awesome!
*/

var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i] = "Awesome " + animals[i]);
} 
// Expected Result
/*
Awesome Cat
Awesome Fish
Awesome Lemur
Awesome Komodo Dragon
*/

//-------------------------------------------------------

// Make a random string generator. 
// You’ll need to start with a string 
// containing all the letters in the alphabet

var alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet[Math.floor(Math.random() * alphabet.length)];

//////////////////////////////////////////////////////
//PART2
// Damm I still feel like i'm off here, 
// where do i use square brackets to get the character at that index?

var alphabet = "abcdefghijklmnopqrstuvwxyz"; 

// To create the random string, start with an empty string
var randomString = "";

// Then, create a while loop that will continually add new random letters to this string, as long as the string length is less than 6 (or any length you choose). 
while (randomString.length < 6) {

// pick a random letter from this string
 var randomIndex = Math.floor(Math.random() * alphabet.length);

// Use square brackets to get the character at that index. 
 var randomChar = alphabet[randomIndex];

// Use the += operator to add a new letter to the end of the string. 
 randomString += randomChar;
}
// After the loop has finished, log it to the console!
console.log(randomString);

///////////----------------------------------------


// h4ck3r sp34k
// Turn text into h4ck3r sp34k

var input = "javascript is awesome";
var output = "";
 for (var x = 0; x < input.length; x++){
    if (input[x] === "a") {
        output += "4";
    }
    else if (input[x] === "e") {
        output += "3";
    }
    else if (input[x] === "i") {
        output += "1";
    }
    else if (input[x] === "o") {
        output += "0";
    }
    else if (input[x] === "s") {
        output += "s";
    }
     else {
        output += input[x];
    }
}
console.log(output);

// j4v4scr1pt 1s 4w3s0m3