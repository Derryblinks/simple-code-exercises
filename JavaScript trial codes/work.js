// let username;
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myLable").innerHTML = "Hello "+ username;
// }

// let y;
// let x;
// let z;

// y = Number(y);
// x = String(x);
// z = Boolean(z)


// console.log(y, typeof y);
// console.log(x, typeof x);
// console.log(z, typeof z);

// let pi = 3.14157;
// let radius = window.prompt("Enter the radius of the Circle: ");
//  radius = Number(radius);
//  let circumference;
//  circumference = pi * radius * 2;
//  circumference = Math.round(circumference);

// console.log("the circumference of the circle is :", circumference);




//this code is to calculate the value of the hypotenus of a triangle


// let Oposite;
// let Hypotenus;
// let Adjacent = window.prompt("Enter the Value for the adjacent: ");
// Adjacent= Number(Adjacent);

// //this calculates the value for the hypotenus
// Oposite = window.prompt("Enter the value for the Opposite: ");
// Oposite = Number(Oposite);
// Oposite = Math.pow(Oposite, 2) ;
// Adjacent =  Math.pow(Adjacent, 2);
// Hypotenus = Math.sqrt(Oposite + Adjacent);
// Hypotenus = Math.round(Hypotenus)
// console.log(Hypotenus);


// let count= 0;

//     document.getElementById("decreaseBtn").onclick = function(){
//     count-=1;
//     document.getElementById("countLable").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function(){
//     count=0;
//     document.getElementById("countLable").innerHTML = count;
// }

// document.getElementById("increaseBtn").onclick = function(){
//     count+=1;
//     document.getElementById("countLable").innerHTML = count;
// }


/*

let x = Math.random();
console.log(x);



let fullName = "snoop Dogg"
let firstName;
let lastName;


firstName = fullName.slice(0,fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);

console.log(firstName);
console.log(lastName);


*/

// let person = {name:"Derrick" , age: 20}

//  person.name ="John";
// let something = 'age';
// person[something] = 30;
// console.log(something);
// console.log(person);


// function greet(name1, name2){
//    console.log("Hello "+ name1 + name2)
// }

/*
function square(number){
    return number*number;
    console.log("this is " +number + " the square of the number you entered")
}
console.log(square(2));


//Constructor sample

function Cirlce(radius){
    this.radius = "radius";
    this.draw = function(){
        console.log('draw');
    }
}

const circle = new Cirlce;


//A small javaScript code to check whether a person has susbcribed on not

const blinks = document.getElementById("mycheckbox");
document.getElementById("mysubmission").onclick = function(){
    if(blinks.checked){
        console.log("Thank you for subscribing to our channel");
    }

    else{
            console.log("Hello please you haven't subscribed yet . Kindly do so to be awarded for this hackthon program")
    }
}


// for (i=10; i<20 ; i++){
//     console.log(i +"Happy new year")
// }


//the code below is to calculate the value of a rectangle
/*
let width;
let height;
let area;

width = window.prompt("Enter the value of width");
height = window.prompt("Enter the value of height");

area = getArea(width, height);
console.log("the value of the area is " , area)

function getArea(width, height){
    let result = width*height;
    console.log(result)
}
*/


/*

let adult = checkAge(21);
console.log(adult);

function checkAge(age){
    if(age >= 18){
        console.log("Indeed he's an adult");
    }
    else{
        console.log("No he's not an adult");
    }
}

checkAge(21);

*/

/*
let numbers = [1,2,3,4,5];
let squares = numbers.map(square);
squares.forEach(print);

function square(element){
    return Math.pow(element, 2);
}

function print(element){
    console.log(element);
}

*/

/*
let fruits = ["apple" , "mango", "Banana"];
let Vegetables = ["Carrot", "Onion", "SpringOnion"];
let meals = ["fufu", "Jollof", "friedRice"];

let consumable_Meals =[fruits, Vegetables, meals];

consumable_Meals[0][0]= "Yellow Apples"
for (let list of consumable_Meals){
    for (item of list){
        console.log(item);
    };
};
*/

// let numbers = [1,2,3,4,5,6];
// let high = Math.max(...numbers);
// console.log(high);

// let class1= ["Owusu", "Dorinda" , "Rahina"];
// let class2 = ["Sammy" , "Irene" , "Justice"]
//  class1.push(...class2);
//  console.log(...class1);



//  let a = 10
//  let b = 20 
//  let c  = 30 
 
// console.log(sum(a,b,c,));

// function sum(...numbers){
//     let total = 0;
//     for (let number of numbers){
//         total += number;
//     }
//     return total;

// };

sum( 1, 3, displayConsole)

function sum(x,y, callBack){
    let result = x+y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

