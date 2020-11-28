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
        console.log(i + " " + whatToDraw);
    }
};

printMultipleTimes(7, "|*_*|");

//------------------------------