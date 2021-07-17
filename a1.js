// Technically array indices are strings

var arr = ["a", "b", "c"];
console.log(arr["0"]);
console.log(arr[0]);

// Arrays are maps from numbers to values and technically stored as string or encoded as strings.

// Array Constructor

// 3 ways of invoking an array .
/*
1. new Array() ; invokes an empty array.
2. new Array(len); creates an array with a lenght
3. new Array(el1,el2): creates an array with elements

*/

/*

Array Indices.

For property keys to be considered array indices.
1. they must unsigned 32 bit intergers and when converted they are equal to their value.
2. they must not exceed the maximum length , meaning smaller than 2^32-1

*/

function ToUint32(x) {
  return x;
}
console.log(ToUint32("abc"));

var arr1 = ["a", "b"];
arr1[Math.pow(2, 32) - 1] = "c";
console.log(arr1);
console.log(arr1.length);
console.log(arr1[Math.pow(2, 32) - 1]);

// Beyond  the limit of the array , it will throw a range error.
// this will throw an error

var arr2 = new Array(Math.pow(2, 32) - 1);
// arr2.push("z");
// console.log(arr2);

// how to assign values in array using a for loop statement.

var arr3 = [];
for (var i = 0; i < 150; i++) {
  arr3[i] = i + 1;
}
console.log(arr3);

// accessing all elements in array.

var arr4 = [2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;
for (var i = 0; i < arr4.length; i++) {
  sum += arr4[i];
}
console.log(sum);

// creating an array from a string.
var sent = "messi is the best football player ever";
var words = sent.split(" ");
for (var i = 0; i < words.length; i++) {
  console.log(`word ----> ${i} : ----> ${words[i]}`);
}

// Aggregate operations on Arrays.
/*
1/ You can assign array to another array.

*/

var n1 = [];
for (var i = 0; i < 15; i++) {
  n1[i] = i + 1;
}
console.log(n1);
var samen1 = n1;
console.log(samen1);

// making a shallow copy.
// the array will pint back to the original array.
var samen2 = n1;
n1[0] = 100;
console.log(samen2[0]);

// doing a deep copy
// best to use , so that we can keep the original values of our array.
// we write a function to best approach this.

function copy(ar1, ar2) {
  for (var i = 0; i < ar1.length; i++) {
    ar2[i] = ar1[i];
    // console.log("=========");
    // console.log(ar2[i]);
  }
}

var n2 = [];
for (var i = 0; i < 20; i++) {
  n2[i] = i + 1;
}
var samen3 = [];
copy(n2, samen3);
n2[0] = 400;
console.log(n2[0]);
console.log(samen3[0]);

//  Array Accessors Function.
// build in methods for arrays in javascript.

// 1. indexOf(); returns an element or value in the array with their indices
//2. lastIndexOf(); return the last element or value in an array.

function checkName(name) {
  var names = ["rico", "tito", "zendonki", "bito"];
  var position = names.indexOf(name);

  if (position >= 0) {
    console.log(`found --> ${name} at location ---> ${position}`);
  } else {
    console.log(`${name} was not found`);
  }
}
checkName("ricoe");
checkName("tito");
checkName("zendonki");

/*
String Represenation of an array.
1. join()
2. toString()

They both return a string with the element of the array with the trailing commas.
*/

var fruits = ["apple", "mango", "pineapple"];
var fruitsStr = fruits.join();
console.log(fruitsStr);
var fruitsStr = fruits.toString();
console.log(fruitsStr);

// Creating new Arrays from an Existing Array.
/*
1. concat(); allows to put together two or more arrays to create a new array.
2.splice(); allows you to create a new array from a subset an existing array. technically it creates a new array by adding new contents and it removes the existing or old array.
-- the first argument is where to start the slice. 
-- second argument is the number of element or values you want to slice.

*/

var findpt = ["rachel", "miguel", "bossy"];
var actdpt = ["tracy", "mira", "batos", "levy", "aby"];
var auditdpt = findpt.concat(actdpt);
console.log(auditdpt);
var auditdpt = actdpt.concat(findpt);
console.log(auditdpt);

var teams = ["france", "wales", "england", "italy", "denmark", "belgium"];
var finalist = teams.splice(2, 2);
console.log("----Finalist Teams----");
console.log(finalist);
var eliminated = teams;
console.log("----Eliminated Teams----");
console.log(eliminated);

// Array Mutator Functions
/*
Allows us to modify the content of an array with referencing the individaul elements

*/

// Adding elements into an array.
/*
Two mutator functions to add elements to an arrays
1. psuh(); add elements to the end of the array
2.unshift(); adds elements at the begining of an array.

*/

// Removing elements from an array.
/*
1. pop(); removes elements at end of array.
2. shift(); removes elements at begining of array.
*/

// Adding and removing elements in the middle of an array
//1. splice(); first args is where you want to start adding,second arg is what you want to add or remove, (0 , when adding), third args in the element you want to addnto the array.

// Putting Arrays Element in Order
// 1. reverse(); reverse order of elements in an array.
// 2. sort(); for sorting

// Array Iterator function
//1. forEach();takes a function as an argument and applies the function to each element in the array

function square(num4) {
  console.log(num4, num4 * num4);
}
var numz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numz.forEach(square);

// 2. every(); applies a boolean function to an array and returns true if the function return true for every element in the array

function isEven(num5) {
  return num5 % 2 == 0;
}

var numx = [2, 4, 6, 8, 10];
var even = numx.every(isEven);
if (even) {
  console.log("all even");
} else {
  console.log("not all are even");
}

// some(); take a boolean function and return true if at least one of the element
var numx = [25, 35, 9, 3, 2];
var someEven = numx.some(isEven);
if (someEven) {
  console.log(" some are all even");
} else {
  console.log(" not all are even");
}

// reduce(); applies a function to an accumulator and next element until the end of the array is reached, giving a single value.

function add(runningTotal, currentVal) {
  return runningTotal + currentVal;
}

var n5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var s1 = n5.reduce(add);
console.log(s1);

// reduceRight(); moves from right to left

function concat(accumulatorNum, numItem) {
  return accumulatorNum + numItem;
}

var n6 = ["messi", "is", "the", "best"];
var s2 = n6.reduceRight(concat);
console.log(s2);

// iterator function that returns a new array
//1. map(); apply function to each element in the array and return a new array with the results.
function curve(grade) {
  return (grade += 5);
}
var grades = [45, 67, 89, 76, 55];
var newGrades = grades.map(curve);
console.log(newGrades);

// filter(); return a new array, if all the elements meet the condition

function isEven1(numx1) {
  return numx1 % 2 == 0;
}

function isOdd(numx1) {
  return numx1 % 2 != 0;
}
var n7 = [];
for (var i = 0; i < 50; i++) {
  n7[i] = i + 1;
}
var e1 = n7.filter(isEven1);
console.log("---filter even ---");
console.log(e1);
var o1 = n7.filter(isOdd);
console.log("---filter odd ---");
console.log(o1);

// Creating two dimensional array;

// takes nums of cols, nums of rows and an initial;

Array.matrix = function (numrows, numcols, initial) {
  // set empty array first;
  var arr = [];
  // create loop and loop thru rows and set colums to an empty array;
  for (var i = 0; i < numrows; i++) {
    var columns = [];
    for (var j = 0; j < numcols; j++) {
      columns[j] = initial;
    }
    arr[i] = columns;
  }
  return arr;
};

var nums = Array.matrix(5, 5, 0);
console.log("---Checking column and row---");
console.log(nums[1][1]);
var names = Array.matrix(3, 3, "");
names[1][2] = "Dave";
console.log(names[1][2]);

var grades = [
  [34, 56, 87],
  [87, 98, 68],
  [90, 23, 56],
];
var total = 0;
var avg = 0.0;

for (var columns = 0; columns < grades.length; columns++) {
  for (var rows = 0; rows < grades[columns].length; rows++) {
    total += grades[rows][columns];
  }

  avg = total / grades[columns.length];
  console.log("Test" + parseInt(columns + 1) + "average:" + avg.toFixed(2));
  total = 0;
  avg = 0.0;
}
