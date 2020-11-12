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