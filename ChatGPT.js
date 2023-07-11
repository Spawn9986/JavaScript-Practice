let array = [1, 2, 3, 4, 88, 9, 13, 34]
 
 let calculateAverage = (arr) => {
    let total = 0;
    let avg;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
   
    avg = total/ arr.length;
    return avg;
 }

 let output = calculateAverage(array);
 console.log(output);