let movies = ["Deadpool & Wolverine", "Captian America: Brave New World", "Thunderbolts", "Fantastic Four", "Blade", "Spider-Man 4", "Shang-Chi 2", "Armor Wars", "Doctor Strange: 3", "Avengers: Kang Dynasty", "Avengers: Secret Wars"]

// console.log(movies);

/* Find a specfic index in an Array */
// console.log(`\n`, movies[10]);

/* Find index value of Array */
// console.log(movies.length);

/* Printing Each Movie */
// for ( let i = 0; i < movies.length; i++) {
//     console.log(movies[i]);
// }

/* Adding to end of an Array */
movies [movies.length] = "Thor 5";
console.log(movies);

/* Adding index far beyong the Array's current length*/ 
// movies[15] = "Black Panther: 3";
// console.log(movies);


/* Array Methods */

/* Concat */
// Merge two Arrays into one
// ex. 
// let allMovies = marvel.concat(dc);

/* Join */
// Turns all of the elements of an array into a single string. 
// Also adds delimiter (i.e. "and") inbetween each index 
// ex. 
// console.log(movies.join(" and "));

/* Push */
// Add elements to the end of the Array
// ex. 
// movies.push(`Thor 5`);
// console.log(movies);

// Use unshift to push to the front of the Array

/* Pop */
// Remove elements from the end of the Array
// ex.
// movies.pop();
// console.log(movies);

// Use shift to pop from the front of the array

/* Splice */
// Adds or Removes index's from anywhere in the Array
// Have the 0 for the second # to not delete anything
// ex.
// movies.splice(1, 0, "BUOOSj" );
// console.log(movies);

/* Slice */
// Same thing as Splice but always does changes on new Array.
// This never changes the original Array
/*
const str = `You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go`;

let newStr = str.split(" ");
console.log(`This string has a length of ${newStr.length}`); // Template Literal - String Literal
*/

/* At */
// ALlows you to access value at the nth index
// Able to count backwards 
// Equavilent is consol.log(movies[movie.length - 2]);
// ex.
// const newMovie = movies.at(-2);
// console.log(newMovie);

/* Reverse */
// Displays the Array elements in reverse
// ex.
// console.log(movies.reverse());

/* Flat */
// Flattens nested Arrays
// ex.
// let numArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// /*numArray[0][0] contains the value 1.
// numArray[1][2] contains the value 6. */
// console.log(numArray);
// console.log(numArray.flat());

// let numArray = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[
// 		[7, 8, 9],
// 		[10, 11, 12],
// 		[13, 14, 15]
// 	],
// ];
// /* numArray[2][1][1] contains the value 11. */

/* Sort */
// Sorts the Array by default in a alphabetical order
// Can be used to find highest, lowest, etc... indexes
// Use `toSorted()` to only sort for that single line 
// So ^ does not change the original Array
// ex.
// console.log(movies.sort());

/* indexOf */
// Find the first index number for a Array Element
// If there is multiple elements with the same name, use `lastIndexOf()` to to get the last index of that Array element
// Can also used `indexOf` to search the Array if something exists 
// ex.
// console.log(movies.indexOf("Blade"));

/* For Each */
// Runs a code block FOR EACH element in an Array ( iterate )
// No break, unlike for...of
// ex.
// movies.forEach((puppy) => {
//     puppy = puppy + " is a mid movie";
//     console.log(puppy)
// });

/* Spread */
// Allows you to copy Arrays to another value that DO NOT reference eachother. Without the `...`, all changes would apply to both!
// You can also add indexes to either the start or end 
// ex. 
// let newMovieList = [...movies];
// console.log(newMovieList);

/* Objects */
// Similar to Array
// We use objects to repesent key:value pairs
// ex.
// const vehicle = {
// 	color: "blue",
// 	hp: 4000,
// 	year: [1989, 2000, 2010, 2015],
//  sound: function(){console.log(`Vroom Vroom`)}
// }
// console.log(vehicle.year[3]);
// vehicle.sound();

// Change/Add object value 
// ex.
// vehicle.color = "Green";

/* Iterate Through Objects */
// ex.
// for (const key in vehicle) {
// 	console.log(vehicle[key]);
// }

