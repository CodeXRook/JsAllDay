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

