/*
1.
Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and a function for displaying the student’s grade average.

 
*/

function grades() {
  this.studentGrades = [];
  this.add = add;
  this.toString = toString;
}

function add(grade) {
  this.studentGrades.push(grade);
}

function toString() {
  return this.studentGrades;
}

var g = new grades();

console.log("----Adding Grades ----");
g.add(80);
g.add(85);
g.add(90);
g.add(95);
console.log(g.toString());

/*
Store a set of words in an array and display the contents both forward and backward.

*/

function concat(accu, item) {
  return accu + item;
}

var words = ["i ", "like", "to", " play", "to", "soccer"];
var sentenceFrwd = words.reduce(concat);
var sentenceBckwrd = words.reduceRight(concat);

console.log("---Displaying words forward ----");
console.log(sentenceFrwd);
console.log(sentenceBckwrd);

/*
Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

*/

function single(arr) {
  var splits = arr.split(" ");
  for (var i = 0; i < splits.length; i++) {
    console.log(`words ---> ${i} : -->  ${splits[i]}`);
  }
}
console.log(single("messi is the best football player ever"));

const obj = ["a", "b", "c"];
for (var i = 0; i < obj.length; i++) {
  console.log(obj[i]);
}

const obj2 = ["messi", "is", "the", "best"];
const obj2Str = obj2.join();
console.log(obj2Str);
