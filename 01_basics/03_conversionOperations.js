let score = "33asdf"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);  // will be converted but not a number is 
console.log(valueInNumber);  // NaN value (NaN == Not a number)

// true => 1, false => 0

let isLoggedIn = "sher"

let BooleanLoggedIn = Boolean(isLoggedIn);

console.log(typeof(isLoggedIn))
console.log(BooleanLoggedIn)

// 1 => true; 0 => false
// "" <empty string => false; non empty sting => true


let someNumber = 35;

let someString = String(someNumber)

console.log(typeof someString)