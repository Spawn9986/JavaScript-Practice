//Nested Loops are helpful when working with multiple sets of data (i.e., 2 arrays, etc.), and multi-dimensional data sets (matrices).

//1) Iterating over two or more arrays:

//================ Challenge: Given two arrays, find pairs of elements that sum up to a specific target value ====================

//2) Multi-dimensional data processing:

//================ Challenge: Given a matrix, calculate the sum of all elements ===================

//3) Generating permutations and combinations:

//================= Challenge: Generate all possible combinations of two lists =============================


/* 
//=========== Challenge: Find Prime Numbers level 5 - 6 (on 10 pt scale) ===============
Write a function named findPrimes that takes in two numbers, start and end, and returns an array of all prime numbers between start and end, inclusive. */

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
