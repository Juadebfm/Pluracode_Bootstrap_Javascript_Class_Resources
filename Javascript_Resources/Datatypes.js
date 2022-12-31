//JavaScript DataTypes
const number = 10; //number commonly known as INTEGER
const number2 = "20"; //Still a string
const string = "My Name"; //string
const boolean = false; //boolean

//To confirm the type of var they are we use the typeOf
console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);

//Javascript datatypes
console.log(number + number2);
console.log(number2 + number);
console.log(number + number);
console.log(number2 + number2);
console.log(Number(number2) + number);

//Javascript Arrays, is basically a list which can consist different datatypes
//Declaring an array

const my2ndArray = [
  "Femi", //value
  "string", //string
  true, //boolean
  false, //boolean
  10000, //integer
  { prop: "Object Value" }, //object
  [1, 2, 3, 4, 5, 6], //another array
];

/*Arrays are index, i.e each value seperated by comma are identified as a index starting from 0 - n so to access contents of an array we use the index in a block bracket */
console.log(my2ndArray[6][4]);

//Objects, is the most used tools in javascript
const objOne = {
  prop1: 20,
  prop2: "String this time",
  prop3: true,
  prop4: 30,
};

//to access we use "." location
console.log(objOne.prop4);

//objects can be infinitely nested

const nestedObject = {
  layer1: {
    layer2: {
      layer3: {
        layer4: {
          targetValue: 20,
        },
      },
    },
  },
};

console.log(nestedObject.layer1.layer2.layer3.layer4.targetValue);

//Functions

const functionContainer = function () {
  return 200;
};

console.log(functionContainer());
