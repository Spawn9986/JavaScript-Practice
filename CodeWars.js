/* 
//================== Jaden Casing Strings 7kyu =============

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"


//============ MY SOLUTION =====================

String.prototype.toJadenCase = function () {
  let arr = this.split(" ")
  let newArray = [];

  arr.map(function(item) {
    newArray.push(item[0].toUpperCase() + item.slice(1, item.length));
  });
  return newArray.join(" ");
};

// OR refactored

return this
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(" "); 
*/

//learned about/ got more comfortable with: refactoring code, split(), join(), map(), ensuring to not forget "return" when using inner functions so it doesnt return undefined, I dont need to push everything into a new array when using map() (after I refactored), arrow functions, 

/* 
    //================= Who Likes it? - 6kyu =====================

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases. 

//============ MY SOLUTION =====================

function likes(names) {
  switch (names.length) {
  case 0:
    return "no one likes this"
  case 1:
    return `${names[0]} likes this`
  case 2:
    return `${names[0]} and ${names[1]} like this`
  case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
  default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// Here is an alternate solution i found using returning an object

/* 
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
} 
*/

//learned about/ got more comfortable with: switch cases, could have also used .replace(regular expression) or return {0: string, 1: string, 2: string, etc}[Math.min(names.length, 4)] bc 4 would be the max and if names.length was less than 4 than it would take that instead. 

*/
