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
 