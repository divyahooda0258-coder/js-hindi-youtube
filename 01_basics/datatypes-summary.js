// Primitive   (call by value)

// types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100.4 // also a Number nothing different for decimal.

const id = Symbol("1234");
const Object = null
const idanother = Symbol("1234");
console.log(id == idanother)
const BigNumber = 12345672345678909876543n // n in the last


// Reference (Non Premitive) (call by reference)

// Array, Objects, Functions


const heros = ["shaktiman", "nagraj", "doga"] // array (like list in python)
// {} curly braces => objects we have key for a value
let myObj = {
    name: "Divya",
    age: 18,
}

//function
const MyFunction = function(){
    console.log("Hello world")
}

console.log(typeof idanother)




//**********************************************

// Stack(Primitive), Heap(Non Primitive)

let MyYoutubeName = "YoutubeName";

let anotherName = MyYoutubeName
anotherName = "newname"

console.log(anotherName)
console.log(MyYoutubeName)

let UserOne = {
    email: "something",
    id: "also something"
}

console.log(UserOne)

let UserTwo = UserOne

UserTwo.email = "something else"

console.log(UserOne);
console.log(UserTwo);