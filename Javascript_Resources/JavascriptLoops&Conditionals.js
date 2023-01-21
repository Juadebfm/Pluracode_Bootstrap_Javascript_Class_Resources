//Conditionals in javascripts
//Basic structure in example below
// if ("string" === "another string") {
//   console.log("the strings are equal");
// } else {
//   console.log("not equal");
// }

//or another example
// let a = 10;
// let b = 200;

// if (a > b) {
//   console.log("A townHall");
// } else if (a < b) {
//   console.log("different");
// } else if (a === b) {
//   console.log("balablu");
// } else {
//   console.log("ment");
// }

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//or another example
// const firstNumber = 20;
// const secondNumber = 10;
// const jsExpression = firstNumber > secondNumber; //true

//only using an if statement (no "else")
// if (jsExpression) {
//   console.log("This is true");
// }

//An if-else statement
// if (jsExpression) {
//   console.log("This is true");
// } else {
//   console.log("This is false");
// }

//Adding another "Code path" with else if
//hint: you can use as many else if's as you want
// if (jsExpression) {
//   console.log("The expression is true");
// } else if (firstNumber > 0) {
//   console.log("The expression is false and the firstNumber is greater than 0");
// } else {
//   console.log("expression false, and firstNumber 0 or less");
// }

//Switch case statements
// const colors = ["orange", "green", "yellow", "purple", "blue"];

//gets random number between 0 - 4 and stores it in a variable
// const randomNumber = Math.floor(Math.random() * colors.length);

// remember, to get a value from an Array, we use bracket notation for example, to get 'green' we use colors[1], since the randomNumber will be a random number between 0 and 4, we can pass this in as our index to retireve a random color from the array

// const randomColor = colors[randomNumber];

//conditionals
// if (randomColor === "orange") {
//   console.log("The color is orange");
// } else if (randomColor === "green") {
//   console.log("The color is green");
// } else if (randomColor === "yellow") {
//   console.log("The color is yellow");
// } else if (randomColor === "purple") {
//   console.log("The color is purple");
// } else if (randomColor === "blue") {
//   console.log("The color is blue");
// } else {
//   console.log("No colors found");
// }

//Switch case
// switch (randomColor) {
//   case "orange":
//     console.log("the color is orange");
//     break;
//   case "green":
//     console.log("the color is green");
//     break;
//   case "yellow":
//     console.log("the color is yellow");
//     break;
//   case "purple":
//     console.log("the color is purple");
//     break;
//   case "blue":
//     console.log("the color is blue");
//     break;
//   default:
//     console.log("no colors found");
// }

//LOOPS is used efficiently to loop or iterate over a group pf resources that are of the same types
//example sample
const blogPosts = [
  {
    title: "What is javescript?",
    author: "Mide",
    publishDate: "Dec, 20, 2022",
    content: "Some Post go here",
  },
  {
    title: "Problems of javascript",
    author: "Mide's Brother",
    publishDate: "Dec, 19, 2022",
    content: "Some Post go here",
  },
  {
    title: "What is javescript loops?",
    author: "Ade",
    publishDate: "Dec, 25, 2022",
    content: "lorem10",
  },
];

//loops
for (let i = 0; i < blogPosts.length; i++) {
  const postTitle = blogPosts[i].title;
  const postAuthor = blogPosts[i].author;
  const postDate = blogPosts[i].date;
  const postContent = blogPosts[i].content;

  //Here we would use the variables that contains the props of the objects to do something unique, but in our case we're just going to print it
  console.log(postTitle);
  console.log(postAuthor);
  console.log(postDate);
  console.log(postContent);
}
