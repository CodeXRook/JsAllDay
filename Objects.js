// Creating Objects
/* We could store lots of information about a single animal by creat- ing
 a JavaScript object. 
 Here’s an object that stores information about a 
 three-legged cat named Harmony. 
 */

 var cat = { 
     "legs": 4,
     "name": "Harmony",
     "color": "Tortoiseshell"
 };
 cat; // {legs: 4, name: "Harmony", color: "Tortoiseshel"}

 //-----------------

// Keys Without Quotes
var cat = {
    legs: 4,
    name: "Harmony",
    color: "Tortoiseshell"
};
cat;// {legs: 4, name: "timmy", color: "Red"}

// You can also put the whole object on one line, 
// but it can be harder to read like that:

var cat = { legs: 3, name: "Harmony", color: "Tortoiseshell" };

// Accessing Values in objects

cat["name"];
// "Harmony"

cat.name;
"Harmony"

/*Instead of looking up a value by typing its key, 
say you wanted to get a list of all the keys in an object. 
JavaScript gives you an easy way to do that, using Object.keys():
 */