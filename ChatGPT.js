//Nested Loops are helpful when working with multiple sets of data (i.e., 2 arrays, etc.), and multi-dimensional data sets (matrices).

//Nested Loops - 1) Iterating over two or more arrays:

//================ Challenge: Given two arrays, find pairs of elements that sum up to a specific target value ====================

/* 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const targetSum = 7;

function findPairs(arr1, arr2, sum) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j <arr2.length; j++) {
      if (arr1[i] + arr2[j] === targetSum) {
        newArray.push([arr1[i], arr2[j]]);
      }
    }
  }
  return newArray;
} 

let output = findPairs(array1, array2, targetSum);
console.log(output);

Output: [ [ 1, 6 ], [ 2, 5 ], [ 3, 4 ] ]
*/

// OR push into new obj intsead of new array

/* 
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const targetSum = 7;

function findPairs(arr1, arr2, sum) {
    let newObj = {};
    let counter = 0;
    
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j <arr2.length; j++) {
        if (arr1[i] + arr2[j] === targetSum) {
          newObj[counter] = [arr1[i], arr2[j]]
          counter++;
        }
      }
    }
    return newObj;
  }

 let output = findPairs(array1, array2, targetSum);
 console.log(output); 

 Output: 
 { '0': [ 1, 6 ], '1': [ 2, 5 ], '2': [ 3, 4 ] }
 */

//what i learned from this or got more comfortable with: working with multi sets of data, pushing into new arrays or new objects

//Nested Loops - 2) Multi-dimensional data processing:

//================ Challenge: Given a matrix, calculate the sum of all elements ===================

/* const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function calculateMatrixSum(arrayOfArrays) {
  let sum = 0;
  for (let i = 0; i < arrayOfArrays.length; i++) {
    for (let j = 0; j < arrayOfArrays[i].length; j++) {
      sum += arrayOfArrays[i][j];
    }
  }
  return sum;
}

let output = calculateMatrixSum(matrix);
console.log(output); 

//Output: 45 */

//What I learned or got more comfortable with: needing to gather data from arrays while simultaneuosly needing data from nested arrays

//Nested Loops - 3) Generating permutations and combinations:

//================= Challenge: Generate all possible combinations of two lists =============================

/* 
const fruits = ["apple", "banana", "orange"];
const colors = ["red", "green", "blue"];

function generateCombinations(arr1, arr2) {
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    // checking the property not necessary but wanted to learn so I added it
    if (!(obj.hasOwnProperty(arr1[i]))) {
      // could also write as:
      // if (!(arr1[i] in obj)) {     OR
      // if (!(obj[arr1[i]])) {
      obj[arr1[i]] = [];
    }
    for (let j = 0; j < arr2.length; j++) {
      const combination = `${arr2[j]} ${arr1[i]}`;
      //includes not necessary in this case bc of iteration but wanted to learn so I added it
      if (!(obj[arr1[i]].includes(combination))) {
        obj[arr1[i]].push(combination);
      }
    }
  }

  return obj;
}

let output = generateCombinations(fruits, colors);
console.log(output); 
*/

//what I learned from this: I wanted to push the results into an Object. Originally, I thought I needed to check if the property already existed. Now I realize that is not required as I could just push whatever it was currently on into the array (value of object property). Also learned about various ways to check if a property exists within an object such as hasOwnProperty(), if (__ in object), or if (object[__]). for example checking to see if the car object has a property Toyota --> car.hasOwnProperty("Toyota") OR if ("Toyota" in car) OR if (car["Toyota"]). If I wanted to check for a value inside of the property I could also use includes such as if (car["Toyota"].includes("Camry"))

//I also learned steps of problem decomposition --> for this problem it looked like this:
/* 
Inputs: 2 arrays (fruit and colors)
I --> O : Generate combinations of I to produce O
Outputs: an object with properties for each fruit from the fruit array. Within each fruit property we will have values being arrays of the different combinations which will look like [color fruit]. 

I will need: 
1 - an empty object (to push results into)
2 - nested loop (to iterate over both arrays)
3 - check if property already exists (alleviate redundancy; conditional)
4 - empty array (each property will have its own array to push the different combinations into)
5 - variable named combination (to store possible combinations between the two arrays (fruits and colors))
6 - check if value (array of combination) already exists (alleviate redundancy; conditional)  
*/

/* 
//=========== Challenge: Find Prime Numbers level 5 - 6 (on 10 pt scale) ===============
Write a function named findPrimes that takes in two numbers, start and end, and returns an array of all prime numbers between start and end, inclusive. 

const start = 10;
const end = 30; 

function findPrimes(numStart, numEnd) {
  let newArray = [];
  for () {
    if () {
      
    }
  }
  return newArray;
  
}

let output = findPrimes(start, end);
console.log(output);

//Prime number: a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1
//I: start num, end num
//O: array of prime numbers that exist between numStart and numEnd (inclusive meaning including start and end if feasible)
//What we will need: 
// newArray (to store results)
// loop (to divide against every number up to the current number)
// conditional (check if prime)

*/

/* 

//============ Challenge: Calculate Average level 2 - 3 (on 10 pt scale) ===============

let array = [1, 2, 3, 4, 88, 9, 13, 34]
 
 let calculateAverage = (numbers) => {

    if (numbers.length === 0 | numbers.some(isNaN)) {
        return "Invalid array"
    }

    let total = 0;
    let avg;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
   
    avg = total/ numbers.length;
    return avg;
 }

 let output = calculateAverage(array);
 console.log(output); 
 
 //learned about/ got more comfortable with: numbers.some(isNaN)

 */
