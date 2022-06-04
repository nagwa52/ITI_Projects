// add function to add two numbers
function addMethod(number1,number2){
    if (isNaN(number1) || isNaN(number2))
    console.log(`ERROR  ${number1} or ${number2} are not numbers`);
      else{ 
sum = parseInt(number1+number2);
console.log(`The sum  is ${sum}`);
      }
}
// sub function to subtract two numbers
function subMethod(number1,number2){
    if (isNaN(number1) || isNaN(number2))
    console.log(`ERROR  ${number1} or ${number2} are not numbers`);
      else{ 
      sub = parseInt(number1-number2);
      console.log (`The subtract is ${sub}`);
    }

   
    }
function multMethod(number1,number2){
    if (isNaN(number1) || isNaN(number2))
    console.log(`ERROR  ${number1} or ${number2} are not numbers`);
      else{ 
    mult = parseInt(number1*number2);
    console.log(`The Multiplication is ${mult}`);
      }
    }
    
 
module.exports = {
    add: addMethod,
    sub: subMethod,
    mult: multMethod
};
