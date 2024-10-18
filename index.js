//Array in programming is simply a list of data. For example:

let studentNumberA = '2020-1923';
let studentNumberB = '2020-1924';
let studentNumberC = '2020-1925';
let studentNumberD = '2020-1926';

//but with array, we can simply write the code above like this :

let studentNumbers = ['2020-1923', '2020-1924', '2020-1925', '2020-1926'];

/*
	- Arrays are used to store multiple related values in a single variable
	- they are declared using square brackets ([]) also known  as  'Array Literals'

	- array also provide access to a number of functions/methods that help in achieving 
	-  a method term for functions associated with an object and is used to execute statements that are relevant to a specific object
	- the min difference of arrays with an object is that it contains information in a form of a 'list' unlike object which is used for properties
*/

let grades = [98,95,89,90];
let computerBrands = ['Ace', 'Asus', 'Lenovo', 'Redfox'];

console.log(grades);
console.log(computerBrands);

//Alternative way to write
let myTasks = [
		'drinkt html',
		'eat javascript',
		'inhale css',
		'bake nodejs'
	];

console.log(myTasks);

//create an array with values from variables
let city1 = 'Tokyo';
let city2 = 'Manila';
let city3 = 'Jakarta';

let cities = [city1, city2, city3];
console.log(cities.length);

// .length property allows us to get and set thetotal number of items in an array

let blankArr = []
console.log(blankArr.length);

let fullName = 'Jaime Noble';
console.log(fullName.length)

//length property on string show the number of characters in a string. Spaces are counted as characters in strings.

//length property can also set the total number of items in an array, mean we can actually delete the last item in an array by simple updating the legnth of an array


myTasks.length = myTasks.length-1;
console.log(myTasks.length);
console.log(myTasks);

// to delete a specific item in an array we can employ array methods
cities.length--;
console.log(cities);

fullName.length = fullName.length-1;
console.log(fullName.length);

fullName.length--;
console.log(fullName);

// if you can shorten the arrya by setting the length property, you can also lengthen it by adding a number into the length property. Since we lengthenthe array forcibly, there will be another item in the array, however, it will be empty or undefined. Like adding another seat but having no one to sit on it

let theBeatles = ['John', 'Paul', 'Ringo', 'George'];
theBeatles.length++;
console.log(theBeatles);

