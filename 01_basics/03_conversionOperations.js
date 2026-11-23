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


// ************************. Operations .************************

let value = 3

let negValue = -value

console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%3)

console.log("heelog" , "hell")

console.log("2" , 3)

let gameCounter = 100;
gameCounter++;//postfix operator
++gameCounter;//prefix operator
console.log(gameCounter)

// prefix and postfix operator

let x = 3;
const y = x++; // the postfix first assigns the value then increases the variable(the variable which is being fix) by one.

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a; // the prefix first increases the variable by one and the assigns the value.

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
