// printing in java Script

console.log("swagat hai aap sabhi ka !!!!!!!!!!!!!! ")
// variable in javaScript
let num=10;
console.log(num);//Numbers
// character
let char='a';
console.log(char);
// String
let str="I am String";
console.log(str);
// boolean
let bool=true;
console.log(bool);
//loops
for(let i=1;i<=5;i++){
    console.log(i);
}
let count =10;
while(count>10){
    console.log(count);
    count--;
}

// isPrime
let n=25;
isPrime=true;
for(let i=2;i*i<=n;i++){
    if(n%i==0){
        isPrime=false;
        break;
    }
}
if(isPrime==true){
    console.log("Number is prime");
}else {
    console.log("Number is not prime");
}

