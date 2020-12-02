// A Simple object
var dog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true
 };
 // Adding Methods to objects
dog.bark = function() {
    console.log("Woof woof! My name is " + this.name + "!");
};
dog.bark();


// using the this Keyword
/* this.name refers to dog.name. 
The this keyword makes methods more versatile, 
allowing you to add the same method
to multiple objects and have it access the properties
 of whatever object it’s currently being called on. 
 */

 // Sharing a Method Between Multiple objects

 var speak = function () {
     console.log(this.sound + "! My name is " + this.name + "!");
 };

 var cat = {
     sound: "Miaow",
     name: "Mittens",
     speak: speak
 };
 cat.speak();
 // Miaow! My name is Mittens!

 //We can use the same speak function as a method in other objects too:
 var pig = {
    sound: "Oink",
    name: "Charlie",
    speak: speak
 };

 var horse = {
    sound: "Neigh",
    name: "Marie",
    speak: speak
 };

 pig.speak();
 //Oink! My name is Charlie!

 horse.speak();
 //Neigh! My name is Marie!


 //Creating objects using Constructors
 // A JavaScript constructor is a function that creates objects 
 // and gives them a set of built-in properties and methods

 // Anatomy of the Constructor
 // Each time you call a constructor, 
 // it creates an object and gives the new object built-in properties.
 // Creating a Car Constructor