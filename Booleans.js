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