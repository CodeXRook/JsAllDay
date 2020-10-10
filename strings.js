/* STRING
Strings are a data type used to represent text 
and are wrapped in either a single or double quotes.

string is a primitive data type 
string, number, boolean, null, undefined, symbol
*/

// Don't use same inner and outer quotes
//mini challenge
// var greeting = 'It's great to see you'!;// error
// var response = "Billy said, "I am sisk"";// error

var greeting = "It's great to see you";
var response = 'Billy said "I am sick".';


// LengthProperty 
// The lengthProperty returns the length of a string

var greeting = "It's good to meet you!";
greeting.length;//22

// Sting Method
// toUpperCase()

var greeting = 'Good to see you!';
greeting;// 'Good to see you!';

var shoutGreeting = greeting.toUpperCase();
shoutGreeting;//'GOOD TO SEE YOU!';

// review
// strings used to represent text
// turn any primitive data type into a string by adding single or double quotes
// escape backslash to handle special characters
// length property and toUpperCase() method

// challenge
// change the following code to make valid strings
// var animal = 'horse"; // error
// var answer = false; // "boolean"
// // possible solution
// var animal = 'horse'; 
// var answer = 'false';

// challenge - fix errors
// var greeting1 = "Sam says, "hi."";
// var greeting2 = 'It's great to see you!';
// // possible solution without escape character
// greeting1 = 'Sam says, "hi."';
// greeting2 = "It's great to see you!";

// // challenge 
// // make a valid string with escape character
// // use \n two times to start a new line
// var greeting3 = 'Don't forget to grab the newspaper on your way out. You are going to be on the bus for a long time because of traffic.';
// // possible solution
// greeting3 = 'Don\'t forget to grab the newspaper\n on your way out. You are going to be\n on the bus for a long time because of traffic.';

// challenge 
// find length of greeting3;
// use toUpperCase() method to turn greeting3 into an uppercase string
// greeting3.length; // 120
// greeting3.toUpperCase();

// Getting a Single Character from a String
var codeWord1 = 'are';
var codeWord2 = 'tubas';
var codeWord3 = 'unsafe';
var codeWord4 = "?!";
console.log(codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1]);

// Cutting up Strings
var longString = "My long string is long";
console.log(longString.slice(3, 14));