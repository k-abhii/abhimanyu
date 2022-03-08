// Empty object
let obj ={};
//console.log(obj);
objAbhimanyu={
    "Name":" Abhimanyu Kumar",
    Age : 27,
    "Phone no ": 8860503744,
    "LastName ": "Kumar"
};
//console.log(objAbhimanyu);
objAbhi={
    Name : "Abhimanyu Kumar",
    Age : 27,
    phoneNo:8298845885,
    Mail : "kabhimanyu656@gmail.com",
    LastName:"Pandey",
    dob:"16/02/1996"

};
//console.log(objAbhi);
let capAmerica={
    Name :'Steve',
    Age: 999,
    friends:['Natasha','Thor','Bucky','Bruce'],
    adress:{
        city: 'Queens',
        State:'Haryana'
    },
    isAvenger : false,
    sayHi:function(){
        console.log("Cap America says Hi");
    }
};
//console.log(capAmerica);
// function call
//capAmerica.sayHi();
// only print Name of captain America
console.log(capAmerica.Name)
// key acess age 
console.log(capAmerica.Age);
// acess only frinds of captain america
console.log(capAmerica.friends);
// acess one friends only
console.log(capAmerica.friends[1]);
// how to acess city
console.log(capAmerica.adress.city)
//console.log(capAmerica.sayHi());
console.log("Object before update : ",capAmerica);
// add  a new key to object
capAmerica.Movies = ["Avengers","CivilWar","Endgame"] ;
console.log("object after update :",capAmerica);

// delete a key 
delete capAmerica.adress;
console.log(capAmerica);
//
capAmerica.isAvenger=true;
console.log(capAmerica);

//capAmerica.adress.State='New york';
//console.log(capAmerica);
// Two method to acess key
console.log(capAmerica.Name);
console.log(capAmerica['Name']);