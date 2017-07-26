// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
    if (x > y) {
      return x;
    } else if (y > x) {
      return y;
    } else {
      return "They are equal";
    }
}

console.log(max(3,5));


function max_refactored(x,y) {
  return Math.max(x,y)
}

console.log(max_refactored(1,100));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else if (z > x && z > y) {
    return z;
  } else {
    return "There's a tie!"
  }
}

console.log(maxOfThree(3,6,5));

function maxOT_refactored(x,y,z) {
  return Math.max(x,y,z);
}

console.log(maxOT_refactored(3, 3000, 30));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  char = char.toLowerCase();
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel('a'));
console.log(isVowel('I'));
console.log(isVowel('f'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x,y) {
  return x + y;
}

console.log(sum(5,6));
console.log(sum(5,6));



// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x,y,z) {
  function sum3(x,y,z) {
    return x + y + z;
  }
  return sum3(x,y,z)/3;
}

console.log(avg(2,11,6));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  return string.length;
}

console.log(getLength("sam kane"));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

console.log(greaterThan(4,4.1));
console.log(greaterThan(4.1,4));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Sam'));



// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(adj1, noun1, adj2, noun2) {
  return `The ${adj1} ${noun1} befriended the ${adj2} ${noun2}.`;
}

console.log(madlib('smart', 'woman', 'nice', 'man'));
