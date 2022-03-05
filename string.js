let str = "I am a String";
console.log(str);
// length of a string
let len = str.length;
console.log(len);
// slice method -> Extract part of String
let slicedArr=str.slice(2,8);
console.log(slicedArr);
// 2. Replace method-> replace a part with given word 
let replacedStr = str.replace("am","was"); 
console.log(replacedStr);
console.log(str);
// upperCase
let upperCase = str.toUpperCase();
console.log(upperCase);
// lowercase 
let lowerCase = str.toLowerCase();
console.log(lowerCase);
// concate two string
let firstName = "Abhimanyu";
let lastName = " Kumar";
let fullName=firstName.concat(lastName);
console.log(fullName);
// 2nd method conacate two string
let first= "khagesh"
let last = " Kumar";
let fullNam = first+last;
console.log(fullNam);
// split method --->return array
let splitted =str.split(" ");
console.log(splitted);
console.log(str.charAt(0));

