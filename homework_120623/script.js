const myArray = ["z", "k", "f", 2, 6, "l", "o", 1];

let arrayNumber = [];
let arrayLetter = [];
for (i = 0; i < myArray.length; i++) {
  if (typeof myArray[i] === "number") {
    arrayNumber.push(myArray[i]);
  } else {
    arrayLetter.push(myArray[i]);
  };
}

console.log(arrayNumber.sort());
console.log(arrayLetter.sort());

//console.log(arrayNumber.sort())
//[1, 2, 6];
//console.log(arrayLetter.sort())
//[f, k, l, o, z];