// An array is just a list of other JavaScript data values.

/* For example, if your friend asked you,
 what your three favor- ite dinosaurs were,
  you could create an array with the names of those dinosaurs, 
  in order: */

  var myTopThreeDinosaurs = ['T-Rex', 'Velociraptor', 'Stegosaurus'];
 // So instead of using three seprate strings,
 // you can just use the single array myTopThreeDinosaurs.

 //You could create a variable for each dinosaur, like this:
 var dinosaur1 = "T-Rex";
 var dinosaur2 = "Velociraptor"; 
 var dinosaur3 = "Stegosaurus"; 
 var dinosaur4 = "Triceratops"; 
 var dinosaur5 = "Brachiosaurus"; 
 var dinosaur6 = "Pteranodon"; 
 var dinosaur7 = "Apatosaurus"; 
 var dinosaur8 = "Diplodocus"; 
 var dinosaur9 = "Compsognathus";
 /* You’d need to create 1000 separate variables, 
 which would be almost impossible to work with. */

//----------------------------------------------------------

 /*list of items in the array each on a new line, 
 and a closing square bracket, like this: 
 */

 var dinosaurs = ["T-Rex",
  "Velociraptor", 
  "Stegosaurus",
  "Triceratops",
   "Brachiosaurus", 
   "Pteranodon", 
   "Apatosaurus",
   "Diplodocus", 
   "Compsognathus"
];
/* to access elements in an array, 
you use square brackets with the index of the element you want
*/

dinosaurs[0];
// 'T-Rex'

dinosaurs[3];
//'Triceratops'

// Setting or Changing elements in an Array
dinosaurs[0] =  "Tyrannosaurus Rex";

//Mixing Data Types in an Array

/* Array elements don’t all have to be the same type. 
For example, the next array contains a number
 (3), a string ("dinosaurs"),
an array (["triceratops", "stegosaurus", 3627.5]),
 and another number (10):
 */

var dinosaursAndNumbers = [3, "dinosaurs", ["triceratops",
"stegosaurus", 3627.5], 10];

// dinosaursAndNumbers[2]; returns the entire inner array,

//dinosaursAndNumbers[2][0]; returns only the first element of that inner array,
//which is "triceratops".

//finding the length of an Array

var maniacs = ['Yakko', 'Wako', 'Dot'];
maniacs[0];
// "Yakko"
maniacs[1];
// "Wako"
maniacs[2];
// "Dot"

maniacs.length;
// 3


maniacs[maniacs.length - 1];
"Dot"


//Adding elements to an Array
// To add an element to the end of an array, 
// You can use the push method.

var animals =[];
animals.push("cod");
animals.push("IceFish");
animals.push("BearFace");
animals;
// animals["cod", "IceFish", "BearFace"];

//To add an element to the beginning of an array, 
//you can use .unshift(element), like this:
animals["cod", "IceFish", "BearFace"]
animals.unshift("Tiger");

// Removing elements from an Array
/*  To remove the last element from an array, 
you can pop it off by adding .pop() 
to the end of the array name
*/

animals ["Polar Bear", "Monkey", "Cat", "Dog", "Llama"]
var lastAnimal = animals.pop();
lastAnimal;
// "Llama"

animals;
["Polar Bear", "Monkey", "Cat", "Dog"]

//To remove and return the first element of an array, use .shift():

var animals = ["Llama", "Polar Bear", "Monkey", "Cat"]
animals; 
// (4) ["Llama", "Polar Bear", "Monkey", "Cat"]

var firstAnimal = animals.shift();
firstAnimal;
// "Llama"

animals;
(3) ["Polar Bear", "Monkey", "Cat"]


//Adding Arrays
/*To add two arrays together to make a new, 
single array, 
you can use firstArray.concat(otherArray) 
*/

/*For example, say we have a list of some furry animals and 
another list of some scaly animals, and we want to combine them.
If we put all of our furry animals in an array called furryAnimals and 
all of our scaly ani- mals in an array called scalyAnimals, 
entering furryAnimals.concat(scalyAnimals) 
will create a new array that has the values from the first array at
the beginning and the values from the second array at the end. 
*/

var furryAnimals = ["Aplaca", "Right-tailed Lemur", "Yeti"];
var scalyAnimals = ["Boa Constrictor", "Godzilla"];
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
furryAndScalyAnimals;
//(5)["Aplaca", "Right-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla"]

// Joining Multiple Arrays
// You can use concat to join more than two arrays together
 var furryAnimals = ["Alpaca", "Right-tailed Lemur", "Yeti"];
 var scalyAnimals = ["Boa Constrictor", "Godzilla"];
 var featheredAnimals = ["Macaw", "Dodo"];
 var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
 allAnimals; 
 //(7)["Alpaca", "Ring-tailed Lemur", "Yeti", "Boa Constrictor", "Godzilla", "Macaw", "Dodo"]

 //My Example
 var myBooks = ["David Goggins", "sage", "Count Of Monte Cristo"];
 var homieBooks = ["GooseBumps", "Harry Porter", "Marvel"];
 var allBooks = myBooks.concat(homieBooks);
 allBooks;
// (6) ["David Goggins", "sage", "count of monte cristo", "GooseBumps", "Harry Porter", "Marvel"]

//Finding the Index of an element in an Array
//To find the index of an element in an array, use .indexOf(element).

var colors = ["red", "green", "blue"];
colors.indexOf("blue");
// 2
colors.indexOf("green");
// 1

//If the element whose position you ask for is not in the array, 
//JavaScript returns -1.
colors.indexOf("Purple");
// -1

//If the element appears more than once in the array, 
//the indexOf method will return the first index of that element in the array.

var insects = ["Bee", "Ant", "Bee", "Ant"];
insects.indexOf("Bee");
// 0


// Turning an Array into a String
// You can use .join() to join all the elements 
// in an array together into one big string.

var boringAnimals = [" Monkey", "Cat", "Fish", "Lizard"];
boringAnimals.join();
// "Monkey,Cat,Fish,Lizard"


// You can use .join(separator) 
// to do the same thing, but with your own chosen separator between each value.

var boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"]; 
boringAnimals.join(" - ");
//"Monkey - Cat - Fish - Lizard"
boringAnimals.join("*")
//"Monkey*Cat*Fish*Lizard" 
boringAnimals.join(" sees ")
//"Monkey sees Cat sees Fish sees Lizard"

// Another .join example
var myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
myNames.join(" ");
// "Nicholas Andrew Maxwell Morgan"


// Useful Things to Do with Arrays
// Building the Array with push
// AKA Last In, First Out (LIFO).
var landmarks = [];
landmarks.push("My house");
landmarks.push("Front path");
landmarks.push("Flickering streetlamp");
landmarks.push("Leaky fire hydrant");
landmarks.push("Fire station");
landmarks.push("Cat rescue center");
landmarks.push("My old school");
landmarks.push("My friend's house");
landmarks;
//(8)["My house", "Front path", "Flickering streetlamp", "Leaky fire hydrant", "Fire station", "Cat rescue center", "My old school", "My friend's house"]

// Going in Reverse with pop

landmarks.pop();
"My friend's house" 
landmarks.pop();
"My old school" 
landmarks.pop(); 
"Cat rescue center" 
landmarks.pop(); 
"Fire station" 
landmarks.pop(); 
"Leaky fire hydrant"
landmarks.pop();
"Flickering streetlamp" 
landmarks.pop();
"Front path" 
landmarks.pop();
"My house"


// Decision Maker
// We can use arrays in JavaScript 
// to build a program to make decisions for us
// (like a Magic 8-Ball).
// using Math.random()



/* It’s important to note that Math.random() 
always returns a num- ber less than 1 and will never return 1 itself 
*/ 

Math.random();
0.8945409457664937
Math.random();
0.3697543195448816
Math.random();
0.48314980138093233

/* If you want a bigger number, 
just multiply the result of calling Math.random(). 
For example, if you wanted numbers between 0 and 10, 
you would multiply Math.random() by 10:
*/

Math.random() * 10;
7.648027329705656
Math.random() * 10;
9.7565904534421861
Math.random() * 10;
0.21483442978933454


// Rounding Down with Math.floor()
 /* Math.floor(). takes a number and rounds 
 it down to the whole number below it 
 (basically getting rid of everything after the decimal point). 
 */

Math.floor(3.7463463);
3
Math.floor(9.9999);
9
Math.floor(0.793423451963426);
0

// The Complete Decision Maker

var phrases = [
   "That sounds good",
   "Yes, you should definitely do that",
   "I'm not sure that's a great idea",
   "Maybe not today",
   "Computer says no."
];

// Should I have another milkshake? 
phrases[Math.floor(Math.random() * 5)]; 
"I'm not sure that's a great idea"
// Should I do my homework?
 phrases[Math.floor(Math.random() * 5)]; 
 "Maybe not today?"

 // Creating a Random Insult Generator
 var randomBodyParts = ["Face", "Nose", "Hair"];
 var randomAdjectives = ["Smelly", "Boring", "Stupid"];
 var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"]
 // Pick a random body part from the randomBodyParts array:
 var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
 // Pick a random adjective from the randomAdjectives array:
 var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];
 // Pick a random word from the randomWords array:
 var randomWord = randomWords[Math.floor(Math.random() * 5)];
 // Join all the random strings into a sentence:
 var randomInsult = " Your " + randomBodyPart + " is like a " +
randomAdjectives + " " + randomWord + "!!!";
randomInsult;
// " Your Hair is like a Smelly,Boring,Stupid Stick!!!"

// If you wanted to be really clever, you could replace linew with this:
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// Here’s another way to build up our random insult:
var randomInsult = ["Your", randomBodyPart, "is", "like", "a", randomAdjective, randomWord + "!!!"].join(" ");
"Your Hair is like a Smelly Fly!!!"

/* More Sophisticated Insults
Extend the random insult generator so it generates insults 
like “Your [body part] is more [adjective] 
than a [animal]’s [animal body part].” 
(Hint: You’ll need to create another array.)
 */

var myCarParts = ["Hood", "Side Door", "Backseat"];
var dislikes = ["Stinky", "Gas Intake", "Cheap"];
var animalParts = [ "Tail", "Donkey Ass", "Ears", "Pork Belly", "Pig Feet"];
var animal = ["Tiger", "Donkey", "Pig", "Cow", "Horse", "Goat" ];
var randomWords = ["New Car", "Tesla", "Oh Shit", "Fuck Yeah", "Donald Trump", "Biden"];

var randomCarPart = myCarParts[Math.floor(Math.random() * 3)];
var randomDislikes = dislikes[Math.floor(Math.random() * 3)];
var randomWord = randomWords[Math.floor(Math.random() * 6)];
var animals = animal[Math.floor(Math.random() * 6)];
var randomAnimalPart = animalParts[Math.floor(Math.random() * 6)];

var dissMe = " Your " + randomCarPart + " is more " + randomDislikes + " than a " + animals + " " + randomAnimalPart + " you " + randomWord + "!!!";

dissMe;

//-----------------------------------------------------------------