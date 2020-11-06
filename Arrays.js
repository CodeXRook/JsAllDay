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