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