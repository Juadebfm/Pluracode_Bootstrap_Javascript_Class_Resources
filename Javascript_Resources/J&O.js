// const numberVariable = 0;
// const shoudnt be used

let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);

//Are this two blocks of codes the same value
const firstNumber = 20;
const secondNumber = "20";

const result = firstNumber === secondNumber;
console.log(result);

//Are this two blocks of codes the same value
const firNumber = 20;
const secNumber = "20";

const res = firNumber === secNumber;
console.log(result);

//3
const exp1 = 100 % 50;
const exp2 = 100 / 50;
const exp3 = exp1 < exp2;
const exp4 = exp3 && 300 + 5 === 305;
const exp5 = !exp4;

const expArray = [exp1, exp2, exp3, exp4, exp5];
console.log(expArray);

//4
const myObj = {
  prop1: "first value",
  prop2: 20,
};

const myArray = [40, 50, 2];
const resultt = myObj.prop1 === myArray[0] / myArray[2];

console.log(resultt);

//5
const newObj = {
  nestedObj: {
    price: 100,
    quantity: 5,
  },
  nestedObj2: {
    price: 150,
    quantity: 2,
  },
};

const newArray = [newObj.nestedObj, newObj.nestedObj2];

const resulttt =
  newArray[0].price * newArray[0].quantity >
  newArray[1].price * newArray[1].quantity;

console.log(resulttt);
