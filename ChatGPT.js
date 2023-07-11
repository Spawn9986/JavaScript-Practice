/* 

Challenge: Calculate Average

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