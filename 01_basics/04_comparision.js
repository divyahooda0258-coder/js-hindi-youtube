console.log(2 == 2);
console.log(2 != 1);
console.log(2 >= 0);
console.log(2 < 3);

console.log("2" > 1);

// equality check == and comparision > < >= <= works differently in js. while doing
// comparision the values are converted accordingly but no convertion in equality check.

console.log(null == 0); // equality check no converstion
console.log(null > 0); // comparision ---conversion
console.log(null >= 0); // comparision ---conversion that's why output is true

// undefined is simply undefined
console.log(undefined == 0);
console.log(undefined >= 0);
// code from line 11 to 17 not clean #should be avoided only remember line 8 and 9.

// ===
// === < this also check the datatypes no comparision
console.log("2" === 2);
