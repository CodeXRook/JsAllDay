// A Boolean value is simple, a value that's either true or false.
// && AkA (AND)


// var javaScriptIsCool = true;
// console.log(javaScriptIsCool);

var hasShower = true;
var hasBackpack = false;
hasShower && hasBackpack;
// //false

var hadShower = true;
var hasBackpack = true; hadShower && hasBackpack; 
// //true

/* The Boolean Operator || means "Or" AKA "PIPES"
 the character itself is called pipe. */

 var hasApple = true;
 var hasOrange = false;
 hasApple || hasOrange;
 //true

 /* ! (not)
! just means “not.” You can call it “not,” 
but lots of people call it “bang.” */
var isWeekend = true;
var needToShowerToday = !isWeekend;
needToShowerToday;


var isWeekend = false;
var hadShower = true;
var hasApple = false;
var hasOrange = true;
var shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange); shouldGoToSchool;
//true

// Greater Than
var height = 65;
var heightRestriction = 60;
height > heightRestriction;

// What if a rider were exactly 60 inches tall, though?

var height = 60;
var heightRestriction = 60;
height > heightRestriction;
// false

/* Luckily, JavaScript has another operator, 
>=, which means “greater than or equal to”:
----------------------------------------------
we can also use the operator <=, 
which means “less than or equal to”
*/

var height = 60;
var heightRestriction = 60;
height >= heightRestriction;
// true

/*-------------------------*/

var height = 48;
var heightRestriction = 48; height <= heightRestriction;
// true

/* equal To
To find out if two numbers are exactly the same, 
use the triple equal sign (===), 
which means “equal to.”
*/

var mySecretNumber = 5;
var chicoGuess = 3;
mySecretNumber === chicoGuess;
//false

var harpoGuess = 7;
mySecretNumber === harpoGuess;
//false

var grouchoGuess = 5;
mySecretNumber === grouchoGuess;
//true

/* Double equals
Now to confuse things a bit: 
there’s another JavaScript operator (double equals, or ==) 
that means “equal-ish.” 
Use this to see whether two VALUES are the same
*/

var stringNumber = "5";
var actualNumber = 5;
stringNumber === actualNumber;
//false

stringNumber == actualNumber;
//true

0 == false;
//true

'false' == false;
//false