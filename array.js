// empty array
let arr =[]
console.log(arr);
// Array with elements 
let elearr=[1,2,3,4,5,"Hello I am String",false,'c',4.5];
console.log(elearr);
console.log("Element at 4th index :"+elearr[4]);
console.log("Element at oth index"+elearr[0]);
elearr[3]="Nothing";
console.log(elearr);
// length of array
console.log(elearr.length);
// ARRAYS METHOD
// 1.push()
console.log("############################");
console.log("Array Before Push :",elearr);
elearr.push("new item");
console.log("Array after push  :",elearr);
//2 pop
console.log("array Before pop :",elearr);

elearr.pop();
console.log("Array after pop :",elearr);
// 3 shift
console.log("Array before Shift :",elearr);
elearr.shift();
console.log("Array after shift :",elearr);
// unshift
console.log("array before Unshift :",elearr);
elearr.unshift("newly added item");
console.log("Array after unshift :",elearr);
