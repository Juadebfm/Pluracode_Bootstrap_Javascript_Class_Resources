//Variables are containers that stores values
//variables examples
const firstVariables = "I'm new here, be kind to me";

const secondVariable = 10;

// this is called an object in javascript
const thirdVariable = {
  firstProperty: "Hello World",
  secondProperty: "I am new to javascript programming",
  thirdProperty: "I'm learining with amazing friends in Pluracode Academy",
  fourthProperty: 2,
  fifthProperty: [2, 3, 4],
};

//Console.log is used to print your code contents to the console
console.log(firstVariables);
console.log(secondVariable);
//since 3rd variable is an object, we can use object ethods on it by selecting partcular properties to print out
console.log(thirdVariable);
console.log(thirdVariable.firstProperty);
console.log(thirdVariable.secondProperty);
console.log(thirdVariable.thirdProperty);
console.log(thirdVariable.fourthProperty);
console.log(thirdVariable.fifthProperty);
console.log(thirdVariable.fifthProperty[1] + thirdVariable.fifthProperty[0]);

//Difference between using VAR, Let and Const
//We can redeclare variables in the same scope, which can cause lots of bugs
var Variable = 10;
var Variable = 20;
console.log(Variable);
//But for const, we can't redeclare variables after declaring it the first time
const variableNew = 200;
const variableNeww = 500;
console.log(variableNew);
//Let is used to reassign a variable , remember reclare is different from reassign.
let counter = 0;

counter = counter + 1;
