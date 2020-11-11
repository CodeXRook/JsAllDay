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

var dog = { name: "Pancake", 
age: 6, 
color: "white", 
bark: "Yip yap yip!" 
};
Object.keys(dog);
// ["name", "age", "color", "bark"]

var cat = { name: "Harmony", 
age: 8, 
color: "tortoiseshell" 
};
Object.keys(cat);
// ["name", "age", "color"]


//Adding Values to objects
//An empty object is just like an empty array, 
//but it uses curly brackets, { }, instead of square brackets:


var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "Tortoiseshell";

cat;
// { color: "Tortoiseshell", legs: 3, name: "Harmony" }


// Adding Keys with Dot Notation

var cat = {};
cat.legs = 3;
cat.name = "Harmony"; 
cat.color = "Tortoiseshell";

var dog = {
name: "Pancake", 
legs: 4, 
isAwesome: true
}; 
dog.isBrown; 
undefined

// Combining Arrays and objects
var dinosaurs = [
    { name: "Tyrannosaurs Rex", period: "Late Cretaceous"},
    { name: "Stegosaurus", period: "Late Jurassic"},
    { name: "Plateosaurus", period: "Triassic"}
];
// To get all the information 
// entering the index in square brackets:

dinosaurs[0];
// { name: "Tyrannosaurus Rex", period: "Late Cretaceous"}

dinosaurs[0]["name"];
// "Tyrannosaurus Rex"

//Or, you can use dot notation, like this:
dinosaurs[1].period;
// "Late Jurassic"


//An Array of friends
var anna = { name: "Anna", age: 11, luckyNumbers: [2, 4, 8, 16]};
var dave = { name: "Dave", age: 5, luckyNumbers: [3, 9, 40]};
var kate = { name: "Kate", age: 9, luckyNumbers: [1, 2, 3]};

//Next we’ll make an array of our friends:
var friends = [anna, dave, kate];

friends[1];
// { name: "Dave", age: 5, luckyNumbers: Array[3] }


// Storing Information About Your Movies

var movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brook", "Ellen DeGeneres", "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate:1983,
        duration: 134,
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blu-ray"
    }
};

//Now, when you want information about a movie, it’s easy to find:
var findingNemo = movies["Finding Nemo"];
findingNemo.duration;
// 100
findingNemo.format
//"DVD"


var cars = { 
    releaseDate: 2006,
    duration: 117,
    actors: ["Owens Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blue-ray"
    };
    movies["Cars"] = cars;



// Say you had the following object:
var myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
     "random animal": "Banana Shark"
    };
/* How would you get the number 123 out of this object
 using one line of JavaScript?
 */
myCrazyObject["some array"][2]["number"];
// 123
