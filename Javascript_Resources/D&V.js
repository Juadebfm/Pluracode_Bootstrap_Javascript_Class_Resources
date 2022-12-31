const myBoolean = true;
const myString = "Hello World";
const firstNumber = 20;

//reassignment
let secondNumber = 40;

secondNumber = 40 * 2;
console.log(secondNumber);

const myArray = [myBoolean, myString];

const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber,
};

console.log(myObject);

console.log(myObject.sumProperty);

console.log(myObject.firstProperty[1]);
