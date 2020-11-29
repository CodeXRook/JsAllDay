var ourFirstFunction =  function() {
    console.log("Hello world!");
};

ourFirstFunction();
// Hello world

//------------------------------

var sayHelloTo = function(name) {
    console.log("Hello my guy " + name + "!");
};
sayHelloTo("codeXrook");

//---------------------
// Hello my guy codeXrook!

//------------------------------

var printMultipleTimes = function(howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i  + " " +  whatToDraw);
    }
};

printMultipleTimes(7, "|*_*|");

//------------------------------
var double = function(number) {
    return number * 2;
   };
   double(6);
   // 12


 //----------------------------------  

 generateRandomInsult = function () {
    var randomBodyParts = ["Face", "Nose", "Hair"];
    var randomAdjectives = ["Smelly", "Boring", "Stupid"];
    var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
  // Join all the random strings into a sentence:
  var randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
   pickRandomWord(randomAdjectives) + " " + 
   pickRandomWord(randomWords) + "!!!";
    return randomString;
 }
generateRandomInsult();
 

//--------------------------------------

// leaving a function early with return

/* 
If the name passed
to the function has fewer than five characters, 
the function uses return to leave the function imme- diately. 
This means the return statement at the end, 
which tells you the fifth letter of your name, 
is never executed.
*/

var fifthLetter = function (name) {
    if (name.length < 5) {
      return "The Letter in my first name is " + name[0] + " ! ";
    }
     return "The fifth letter of your name is " + name[4] + ".";
   };
   fifthLetter("DanB");
   //"The Letter in my first name is D ! "

//----------------------------------------

// using return Multiple Times Instead of if...else Statements

var medalForScore = function (score){
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }

    return "Gold";
};
medalForScore(25);
// "Gold"

//----------------------------------------

// Shorthand for Creating functions 

// Long Hand version of functions
var double = function (number) {
    return number * 2;
};

// Short Hand version of functions

function double (number) {
    return number * 2;
};

// Fat arrow function

double = (number) => {
    return number * 2;
};
