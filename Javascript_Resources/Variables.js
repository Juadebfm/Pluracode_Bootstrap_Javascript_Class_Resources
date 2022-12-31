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
console.log(counter);
counter++;
console.log(counter);

//NB: You only use const to declare variables that you know will never change and let to declare variables that you know you might reassign

//Variable name conventions and types
const yourFirstVar = 10; //camelCase
const your_First_Var = 10; //snake case
const YOUR_FIRST_VAR = 10; //snake case
const yourfirstvar = 10; //snake case
const YourFirstVariable = 10; //Like camelCase, Pascal case, All words capitalized
//But i personally prefer camelCase

//Things you cannot do with variables
//1. You cannot declare variables with space e.g
// const your First Var = 10;
//2. You cannot declare variables in quotes
// const "your first variable" = 10;
//3. You cannot start variable declaration with a digit
// const 1yourVariable = 10;
//but
// const yourVariable1 = 10;

/* NB: Variable name must be descriptive
it must not be too short so it's ambigious and hard to relate or understand
*/

const var1 = 10;
const varBus = 5;
const var2 = varBus;
const var3 = "Julius";
const var4 = {
  varType: "object",
  varValue: "some value",
};
const var5 = (function () {
  return "Hello, my name is ";
})();
const var6 = var5 + var3;
console.log(var6);
