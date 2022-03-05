function sayHello(){
    console.log("welcome from function");
}
sayHello();
// function with parameters
function sum(num1,num2){
    let addition = num1+num2;
    console.log("Additions of a given numers are :"+addition);
}
sum(3,5);
// function with return type 
function multiply(num1,num2){
    return num1*num2
}
let ans = multiply(3,5);
console.log(ans);
// function stores in a variable 
let a= function sub(num1,num2){
    return num1-num2
}
console.log(a(10,5));
// IIFE immediately invoked function expression
(function(){
    console.log("Welcome from IIFE");
})();
// with parameter IIFE
(function(num1,num2){
    console.log(num1/num2);
})(10,5);
(function(num1,num2){
    console.log(num1*num2);
})(10,50);