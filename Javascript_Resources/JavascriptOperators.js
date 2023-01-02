//Operators exist in all different languages, it's something that allow you to compare values, modify variables and much more flexibilities in handling variables

//MAIN TYPES
//1. Arithmetic
//2. Assignment
//3. Comparison
//4. Logical

//1. Arithmetic Operators
//Addition
const a = 10;
const b = 20;
const c = a + b;

console.log(c);

//Subtraction
const d = 1000;
const e = 500;
const f = d - e + c;
console.log(f);

//Multiplication
const g = 14;
const h = 35;
//nb: everything on the right side is called "expression"
const i = g * h + f - e;
console.log(i);

//Division
const j = 500;
const k = 3;
const m = j / k;

console.log(m);

const group = (20 / 4) * 2 - 20;
console.log(group);

// Modulus //prints the remainder of the value
const n = 100;
const o = 26;
const p = n % o;

console.log(p);

//Exponent //double star
const exponents = 8 ** 2;
console.log(exponents);

//Increment
let initialNumber = 0;
console.log(initialNumber++);
console.log(initialNumber);
console.log(initialNumber++);
console.log(initialNumber);

//or can be written as
initialNumber = initialNumber + 1;
console.log(initialNumber);

//Decrement
initialNumber = initialNumber - 1;
console.log(initialNumber);
console.log(initialNumber--);
console.log(initialNumber);

//ASSIGNMENT OPERATORS "=" we have used them very well before now
//Other examples add
let x = 10;
x = x + 5;
console.log(x);
//Can also be written as
let y = 10;
y += 5;
console.log(y);

//Other examples sub
let z = 10;
z = z - 5;
console.log(z);
//Can also be written as
let q = 10;
q -= 5;
console.log(q);

//Other examples mult
let r = 10;
r = r * 5;
console.log(r);
//Can also be written as
let s = 10;
s *= 5;
console.log(s);

//Other examples mult
let t = 10;
t = t * 5;
console.log(t);
//Can also be written as
let u = 10;
u *= 5;
console.log(u);

//You only need "="

//COMPARISON OPERATORS
//Equality
//Strict Equality. is the 20 equals to 20 in terms of value and size? is what is being equated of the same value and type, if yes, it prints true and if no it prints false
//same value, same datatype
const results2 = 20 === 20; //true
console.log("Results2: ", results2);
//same value, different data type
const results3 = 20 === "20"; //false
console.log("Results3: ", results3);
//same datatype
const results4 = "20" === "20";
console.log("Results4: ", results4); //true
//Normal Equality
//same value, same datatype
const results5 = 20 == 50;
console.log("Results5: ", results5); 
//same value, different data type
const results6 = 50 == "20";
console.log("Results6: ", results6);
//trciky
const results8 = "20" == 20;
console.log("Results8: ", results8);
//same datatype
const results7 = "20" == "20";
console.log("Results7: ", results7);

//NB: For the double equality "==" before it evaluates values, it first converts both values to the same datatype
//    For Strict "Triple" equality, it checks if values are the same datatype before evaluating them
