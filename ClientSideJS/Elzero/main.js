/*let titleNAme = "Elzero",
  DescriptionName = "Elzero web school",
  DateNAme = "25/10";
let container = `
<div class ="procontainer">
<div class ="card">
<h1>hello ${titleNAme}</h1>
<p>${DescriptionName}</p>
<span>${DateNAme}</>
</div>
</div>
`;

let result = container.repeat(4);
document.write(result);*/

/* task1//////////////*/
// let number1 = 10,
//   number2 = 20;
// console.log(number1 + "" + number2);
// console.log(typeof number1 + " " + typeof number2);
// console.log(`${number1} ${number2}`);
// console.log(`${typeof number1} ${typeof number2}`);
// console.log(number2 +
//    '\n' +number1);
//    console.log(`${number2}
// ${number1}`);
/* task2//////////////*/

// let myVar = "100.56789 Views";

// console.log(Math.trunc(parseInt(myVar))); // 100
//  console.log(Math.max(parseFloat(myVar)).toFixed(2)); // 100.57
/* task3//////////////*/
// let num = 10;

// console.log(Number.isInteger(num)+Number.isInteger(num)); // 2
/* tsk4//////////////////*/
// let flt = 10.4;
// console.log(parseInt(flt)); // 10
// console.log(Math.trunc(flt)); // 10
// console.log(Math.floor(flt)); // 10
// console.log(Math.round(flt)); // 10
/* tsk5//////////////////*/
// console.log(Math.floor(Math.random() * 4));
/* tsk6//////////////////*/
// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.pop()); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends)
// // Method 2
// console.log(myFriends.slice(0,num)); // ["Ahmed", "Elham", "Osama"];
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.pop();
// friends.shift();
// console.log(friends); // ["Eman", "Osama"]
/////////////////////////////////////////////

// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
//////////////////////////
//
////////////////////////////////
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// if(
//     haystack.includes(needle)==true){
//     console.log("Found")
// }
// if(haystack.indexOf(needle)!==-1){
//     console.log("Found")
// }
// if(haystack[1]==needle){
//     console.log("Found")
// }
//////////////////////////////
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];
// arr2.splice(0,2);
// arr2.splice(1,0,arr1.pop());
// console.log(arr2);

// console.log(allArrs); // fxy
// let start = 10;
// let end = 100;
// let exclude = 40;
// for(let i=start;i<end;){
//   if(i!==exclude){
//     console.log(i);
//     i=i+10;
//   }
//   i=i+10;

// }
////////////////////////
// let start = 10;
// let end = 0;
// let stop = 3;
// for(let i=start;i>=3;i--){
//   if(i<start){
//     console.log('0'+i);
//   }
//   else
//   console.log(i);

// }
//////////////////////////////
// let start = 1;
// let end = 6;
// let breaker = 2;
// for(let i=start;i<=end;i++){
//   console.log(i);
//   for(let j=0;j<1;j++){
//     console.log(`--${breaker}`);
//     console.log(`--${end-breaker}`);
//   }
// }
///////////////////////////////
// let index = 10;
// let jump = 2;
// let end = 0;

// for (let i=index;i>2;) {
// console.log(i);
// i=i-2
// }
////////////////////////////////////
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for(let i=0;i<friends.length;i++){
//   console.log(`"${i+1}=>`+`${friends[i]}"`);
// }
// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
///////////////////////////////////////////////
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];
// for(let i=start+1;i<mix.length;i++){
//   if(typeof(mix[i])==='string'){
//     continue;
//     // طيررها وكمل continue
//   }
//   console.log(mix[i]);
//}
//////////////////////////////////////////
// function sayHello(theName,...theGender) {
//   if(theGender[0]==='Male'){

//     document.write(`<p>welcome MR ${theName}</p>`);
//   }
//   else if(theGender[0]==='Female'){
//     document.write(`<p>welcome Miss ${theName}</p>`);
//   }
//  else {
//   document.write(`<p>welcome ${theName}</p>`);
//  }
// }
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"
//////////////////////////////////////////////////////////////////
// function calculate(firstNum ,secondNum,operation='add') {
//   if(secondNum===undefined){
//     console.log("enter second number");
//   }
//   while(true){
//    switch(operation){
//      case 'add' :
//       return firstNum+secondNum;
//     case 'subtract' :
//       return firstNum-secondNum;
//     case 'multiply' :
//       return firstNum*secondNum;
//   }

// }
// }

// // Needed Output
// console.log(calculate(20));
// console.log(calculate(20, 30));
// console.log(calculate(20, 30, 'subtract'));
// console.log(calculate(20, 30, 'add'));
// console.log(calculate(20, 30, 'multiply'));
////////////////////////////////////////////////////
// let zName, zAge, zCountry, firstName;
// function getDetails(zName, zAge, zCountry){
//   //first function
// function namePattern(zName) {
//   var i = zName.indexOf(" ");
//   var partOne = zName.slice(0, i).trim();
//   var partTwo = zName.slice(i + 1, zName.length).trim();

//   return `${partOne} ${partTwo[0]}.`;
// }
// // second function
// function ageWithMessage(zAge) {
//   zAge = parseInt(zAge);
//   return `your age is ${zAge}`;
// }
// // third function
// function countryTwoLetters(){

// }
// // fourth function
// function fullDetails(){

// }
// }
// Write Your Code Here
// 38 Is My Age => Your Age Is 38
// 32 Is The Age => Your Age Is 32

// console.log(namePattern("Mohamed Talaat"));
// console.log(ageWithMessage("28 is hhhfjjhf"));
////////////////////////////////////////////////////////
// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let filterarray = mix.map(function(ele){
// return isNaN(parseInt(ele)) ? ele : "";
// }).join("");
// // Elzero
// console.log(filterarray);
////////////////////////////////////////
// let myString = "EElllzzzzzzzeroo";
// let uniqueChars = myString.split("").filter(function(item, pos, self) {
//   return self.indexOf(item) == pos;
// })
// .join('');
// console.log(uniqueChars);
/////////////////////////////////////////////////
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let array = myArray.reduce((a, b) => a.concat(b), []).join("");
//     console.log(array);
//////////////////////////////////
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let filterarray = numsAndStrings.filter(function(ele){
// return !isNaN(parseInt(ele))
// }).map(function(ele){
// return - ele;
// });
// console.log(filterarray);
///////////////////////////////////////////////////////////////////
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let add = nums.reduce(function(acc,current,index){
// if (current%2===0)
// return acc*current;
// else if(current%2===1)
// return acc+ current;
// },1);
// console.log(add);
//////////////////////////////////////////////////////////////// video 79-85
// let member ={
//   name:"Elzero",
//   age:38,
//   country:"Egypt",
//   fullDetails: function(){
//     console.log(`my Name is ${member.name}, my age is${member.age},I live in ${member.country}`)

//   }
// }

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt
////////////////////////////////////////////////////////////////////////////////
// Method One
// Create Your Object Here
// let objMethodOne ={
//   property:"one",
// }
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = new Object();
// objMethodTwo.property="two";
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = Object.create({})
// objMethodThree.property="three";
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.create(objMethodTwo)
// // objMethodFour.property="three";

// console.log(objMethodFour.property); // "Method Four"
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// let finalObject = Object.assign({},{a},threeNums,twoNums)

// console.log(finalObject);
////////////////////////////////////////////////////////////////////
// The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;
// let key =myFavGames["Trinity Universe"].publisher;
// console.log(key);
// console.log(objectLength);

// for (let i = 0; i < objectLength; i++) {
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
//   console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[Object.keys(myFavGames)[i]].hasOwnProperty('bestThree')) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
//     console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
//     console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }
///////////////////////////////////////////////////////////86-101

// let elementid = document.getElementById("elzero");
// let elementClass = document.getElementsByClassName("element");
// let elementselect = document.querySelector("js");
// let elementselectAll = document.querySelectorAll("js");
// console.log(elementid);
// console.log(elementClass);
// console.log(elementselectAll);
// let mySrc=document.getElementById("person-img");
//  for(let i=0;i<10;i++){
// mySrc.setAttribute("src","https://www.google.com.eg/search?q=ball");
//  mySrc.setAttribute("alt","Elzero Logo");
//  console.log(mySrc);
//  }
////////////////////////////////////////////////////////////////////
// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");
// document.forms[0].onsubmit = function(event){
//   let validuser = false;
//   let validage = false;

// if(validuser === false ||validage === false){
// event.preventDefault();
// }
// if(userInput.value !== "" && userInput.value.length >=8){
//   validuser = true;
// }
// if(ageInput.value !== "" ){
//   validage = true;
// }
// };

// console.log(userInput);
// console.log(ageInput);
////////////////////////////////////////////////////////////


//   let money = document.querySelector("[name= 'dollar']");
//   let moneyresult = document.querySelector(".result");
//    money.addEventListener("input", () =>{
//  if (money.value !=="" && money.value > 0){
//   let eG = money.value * 15.6;
//   moneyresult.textContent =`{${money.value}} USD Dollar = {${eG.toFixed(2)}} Egyptian Pound`;
//  }
// });
////////////////////////////////////////////////////////
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// document.querySelector(".one").title = one.className;
// one.innerHTML = one.className;
// console.log(one);
// document.querySelector(".two").title = two.className;
// two.innerHTML =two.className +` ${2}`;
// console.log(two);
//////////////////////////////////////////////////////
// let image = document.getElementsByTagName("img");
// for(let i = 0 ;i<image.length;i++){
// if(image[i].alt ==""){
//   image[i].alt ="Elzero new";
// }
// else{
//   image[i].alt ="old";
// }
// console.log(image[i]);
// }
/////////////////////////////////////////////
// let first = document.querySelector("[name ='elements']");
// let second = document.querySelector("[name ='texts']");
// window.onload = function (){
//   first.focus();

// };
// second.onblur = function(){
//   document.links[0].onclick();
// };
// document.getElementsByClassName("open")[1].click();

