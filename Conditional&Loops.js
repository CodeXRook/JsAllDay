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
// My name contains the letter C. 
// My name contains the letter o. 
// My name contains the letter d. 
// My name contains the letter e. 
// My name contains the letter X. 